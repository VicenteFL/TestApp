import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

fechaNacimiento: Date = new Date();
customPickerOptions;
customDate;


  constructor() { }

  ngOnInit() {

    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: ( evento ) => {
          console.log('Clicked Save!')
          console.log(evento)} //evento.day.value
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false; //Este false hace que no se cierre
        }
      }]
    };

  }

  cambioFecha(event){
    console.log('ionChange', event);
    console.log('Date', new Date(event.detail.value));
  }

}
