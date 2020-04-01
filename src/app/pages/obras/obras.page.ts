import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-obras',
  templateUrl: './obras.page.html',
  styleUrls: ['./obras.page.scss'],
})
export class ObrasPage implements OnInit {

  jsonRes: any;
  obras: any;
  construction: any;
  consSelected: boolean = false;
  sendObject: any = {
    email: '',
    constructionid: ''
  };
  day; year; month;


  constructor(private http: HttpClient, public alertController: AlertController, private router: Router) {
  }

  ngOnInit() {
    this.consSelected = false;
    this.readListOfDocs();
  }

  async readListOfDocs(){
    await this.http.get('http://192.168.1.50:3000/constructions').toPromise().then(
      res => { // Success
        this.jsonRes = JSON.parse(JSON.stringify(res))
        console.log(this.jsonRes)
        this.obras = this.jsonRes.constructions[0];
      });
    }

  async loadCons(obra){
    await this.http.get('http://192.168.1.50:3000/constructions/' + obra.constructionid).toPromise().then(
      res => { // Success
        this.construction = JSON.parse(JSON.stringify(res)).construction;
        console.log(this.construction)

        let date: Date = new Date(this.construction.starttime);
        console.log(date);
        this.day = date.getDate();
        this.month = date.getMonth() + 1;
        console.log(this.month)
        this.year =  date.getFullYear();
        this.consSelected = true;
        
        
      });
    
  }

  async inscription(id){

    this.sendObject.email = "vicente.241296@gmail.com";
    this.sendObject.constructionid = id;

    this.http.post('http://192.168.1.50:3000/constructions/candidate', this.sendObject).subscribe(async (response)=>{
      console.log(response)
      let jsonRes = JSON.parse(JSON.stringify(response));

      const alert = await this.alertController.create({
        header: 'INSCRIPCIÓN',
        message: 'Inscripción realizada correctamente.',
        buttons: ['Siguiente']
      });
      
      if (jsonRes.result){  
        await alert.present();
        this.router.navigate(['/menu/noticias']);
      } 
    },  async  (error) => {

      console.log(error);
      const alertError = await  this.alertController.create({
        header: 'INSCRIPCIÓN',
        message: '¡Error! Vuelve a intentarlo',
        buttons: ['Siguiente']
      });
      
      await alertError.present();

    }); 
  }
  
}
