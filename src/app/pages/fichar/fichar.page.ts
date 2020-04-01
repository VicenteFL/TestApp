import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Geolocation } from '@capacitor/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-fichar',
  templateUrl: './fichar.page.html',
  styleUrls: ['./fichar.page.scss'],
})
export class FicharPage implements OnInit {


  email: string = "vicente.241296@gmail.com";
  construction;
  message: String;
  message2: String;
  registrations;
  entrada: boolean;
  updated: boolean;
  sendObject = {
    email: '',
    status: false,
    constructionid:''
  }

  lat1: any;
  lon1: any;
  distanceIsValid: boolean = false;
  time: any;
  date: any;

  location = {
    latitude: 0,
    longitude: 0
  }

  constructor( private router: Router, private http: HttpClient, public alertController: AlertController) { }

  async getConstruction(){
    await this.http.get('http://192.168.1.50:3000/user/construction/' + this.email).toPromise().then(
      res => { // Success
        this.construction = JSON.parse(JSON.stringify(res));
        if (this.construction.error) {
          this.message = "Todavía no estás participando en ninguna obra.";
        } else {
          this.construction = this.construction.construction;
          console.log(this.construction)
          let startDate: Date = new Date(this.construction.starttime);
          let todayDate: Date = new Date("25 december 2022");
          if (todayDate > startDate){
            this.presentForm(this.construction);
          } else {
            this.message = "Ha sido asignado a " + this.construction.title + ". Esta obra comenzará en la siguiente fecha: " + startDate.toLocaleDateString();
          } 
        }     
      });
  }

  async presentForm(construction){
    this.message = "Obteniendo distancia...";
    await this.distanceToWork();
    if(this.distanceIsValid){
      this.message="Distancia correcta";
      await this.http.get('http://192.168.1.50:3000/registrations/' + this.email).toPromise().then(
      res => { // Success
        this.updated = false;
        this.registrations = JSON.parse(JSON.stringify(res)).registrations;
        this.message2 = "Entradas y salidas de los últimos 7 días.";  

        this.entrada = !this.registrations.reverse()[0].status;
        
        let i = 0;
        this.registrations.forEach(element => {
          let d = new Date(this.registrations[i].time)
          this.registrations[i].time = d.toLocaleDateString() + ' a la/s: ' +  d.toLocaleTimeString();
          i++;
        });

        this.updated = true;
        /* this.date = this.registrations.time.toLocaleDateString();
        this.time = this.registrations.time.toLocaleTimeString(); */
       

      }, error => {
        this.message2 = "No ha fichado en los últimos 7 días.";
        this.entrada = true;
      });
    } else {
      this.message="La distancia máxima a '"+ this.construction.title + "' son 10 km.";
    }
  }

  async saveMove(status: boolean){
    //status = true; means sign in (entrada);

    this.sendObject.email = this.email;
    this.sendObject.status = status;
    this.sendObject.constructionid = this.construction.constructionid;
    console.log(this.sendObject)

    this.http.post('http://192.168.1.50:3000/registration', this.sendObject).subscribe(async (response)=>{

      console.log(response)
      let jsonRes = JSON.parse(JSON.stringify(response));
      const alert = await this.alertController.create({
        header: 'FICHAR',
        message: 'Registrado correctamente',
        buttons: ['Siguiente']
      });
      
      if (jsonRes.time){  
        await alert.present();
        this.ngOnInit();
        this.router.navigate(['/menu/fichar']);
      } 
    },  async  (error) => {
      const alertError = await  this.alertController.create({
        header: 'OBRAS',
        message: '¡Error! Vuelve a intentarlo',
        buttons: ['Siguiente']
      });
      
      await alertError.present();

    }); 
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.lat1 = coordinates.coords.latitude;
    this.lon1 = coordinates.coords.longitude;
    console.log(this.lat1)
    console.log(this.lon1)
  }

  async distanceToWork(){
    await this.getCurrentPosition();

    this.location = JSON.parse(this.construction.location)
    console.log(this.location);
    const distance = this.getDistanceFromLatLonInKm(this.lat1, this.lon1, this.location.latitude, this.location.longitude);
    console.log('Distancia: ' + distance)
    if (distance < 400){
      this.distanceIsValid = true;
    }
  }

  getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = this.deg2rad(lat2-lat1);  // deg2rad below
    var dLon = this.deg2rad(lon2-lon1); 
    var a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(this.deg2rad(lat1)) * Math.cos(this.deg2rad(lat2)) * 
      Math.sin(dLon/2) * Math.sin(dLon/2)
      ; 
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
    var d = R * c; // Distance in km
    return d;
  }
  
  deg2rad(deg) {
    return deg * (Math.PI/180)
  }

  ngOnInit() {
    this.getConstruction()
  }

}
