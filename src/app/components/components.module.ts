import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component'
import { IonicModule } from '@ionic/angular';
import { GoogleMapComponent } from './google-maps/google-maps.component';



@NgModule({
  declarations: [HeaderComponent, GoogleMapComponent],
  exports: [HeaderComponent, GoogleMapComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
