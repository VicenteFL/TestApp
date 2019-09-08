import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

    titulo: string = "Alert Page";

  constructor(public alertCtrl:AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancel Button');
        }
         },
         
         {
          text: 'Ok',
          handler: (blah) => {
            console.log('Ok Button');
        }
         }]
    });

    await alert.present();
  }

  async presentAlertInput() {
    const titulo = await this.alertCtrl.create({
      header: 'Alert',
      inputs: [{
        name: 'titulo',
        type: 'text',
        label: 'Titulo 1',
        value: '',
        placeholder: 'New Title'
      }],
      buttons: [ 
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Cancel Button');
        }
         },        
         {
          text: 'Ok',
          handler: ( data) => {
            console.log('Ok Button', data);
          this.titulo = data.titulo;
        }
         }]
    });

    await titulo.present();
  }

}
