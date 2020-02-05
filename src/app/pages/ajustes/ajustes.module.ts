import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AjustesPage } from './ajustes.page';

const routes: Routes = [
  {
    path: '',
    component: AjustesPage,
    children: [
      {path:'miperfil', loadChildren:'../mi-perfil/mi-perfil.module#MiPerfilPageModule'}
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AjustesPage]
})
export class AjustesPageModule {}
