import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignpadPage } from './signpad.page';
import { SignaturePadModule } from 'angular2-signaturepad';


const routes: Routes = [
  {
    path: '',
    component: SignpadPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    SignaturePadModule
    
  ],
  declarations: [SignpadPage]
})
export class SignpadPageModule {}

