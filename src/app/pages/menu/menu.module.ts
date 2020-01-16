import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {path: 'noticias', loadChildren: '../noticias/noticias.module#NoticiasPageModule'},
      {path: 'obras', loadChildren: '../obras/obras.module#ObrasPageModule'}
    ]
  },
  {
    path:'',
    redirectTo:'/menu/noticias'
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [MenuPage]
})
export class MenuPageModule {}
