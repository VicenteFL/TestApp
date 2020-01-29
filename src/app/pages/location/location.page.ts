import { Component, OnInit } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;


@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  lat1: any;
  lon1: any;
  distanceIsValid: boolean = false;
  time:any = {
    fullDate: null,
    hour: null,
    minute: null
  } 

  universidad = {
    latitude: 40.453932,
    longitude: -3.726402
  }


  constructor() { }

  ngOnInit() {
  }

  async getCurrentPosition() {
    const coordinates = await Geolocation.getCurrentPosition();
    console.log('Current', coordinates);
    this.lat1 = coordinates.coords.latitude;
    this.lon1 = coordinates.coords.longitude;
    console.log(this.lat1)
    console.log(this.lon1)
  }

  watchPosition() {
    const pos = Geolocation.watchPosition({}, (position, err) => {
    })
    console.log(pos)
  }

  async distanciaUniversidad(){
    await this.getCurrentPosition();
    const distance = this.getDistanceFromLatLonInKm(this.lat1, this.lon1, this.universidad.latitude, this.universidad.longitude);
    console.log(distance)
    if (distance < 10){
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

  fichar(){
    this.time.fullDate = new Date();
    this.time.hour = this.time.fullDate.getHours()
    this.time.minute = this.time.fullDate.getMinutes()
  }


}
