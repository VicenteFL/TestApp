import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'alert', loadChildren: './pages/alert/alert.module#AlertPageModule' },
  { path: 'action-sheet', loadChildren: './pages/action-sheet/action-sheet.module#ActionSheetPageModule' },
  { path: 'avatar', loadChildren: './pages/avatar/avatar.module#AvatarPageModule' },
  { path: 'botones', loadChildren: './pages/botones/botones.module#BotonesPageModule' },
  { path: 'card', loadChildren: './pages/card/card.module#CardPageModule' },
  { path: 'check', loadChildren: './pages/check/check.module#CheckPageModule' },
  { path: 'date-time', loadChildren: './pages/date-time/date-time.module#DateTimePageModule' },
  { path: 'file-upload', loadChildren: './pages/file-upload/file-upload.module#FileUploadPageModule' },
  { path: 'request', loadChildren: './pages/request/request.module#RequestPageModule' },
  { path: 'location', loadChildren: './pages/location/location.module#LocationPageModule' },
  { path: 'map', loadChildren: './pages/map/map.module#MapPageModule' },
  { path: 'menu', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  { path: 'send-pdf', loadChildren: './pages/send-pdf/send-pdf.module#SendPdfPageModule' },
  
  { path: 'create-news', loadChildren: './pages/create-news/create-news.module#CreateNewsPageModule' },
  { path: 'new-construction', loadChildren: './pages/new-construction/new-construction.module#NewConstructionPageModule' },
  //{ path: 'fichar', loadChildren: './pages/fichar/fichar.module#FicharPageModule' },


  //{ path: 'documents', loadChildren: './pages/documents/documents.module#DocumentsPageModule' },

  //{ path: 'signpad', loadChildren: './pages/signpad/signpad.module#SignpadPageModule' },

  //{ path: 'privacidad', loadChildren: './pages/privacidad/privacidad.module#PrivacidadPageModule' },
  //{ path: 'mi-perfil', loadChildren: './pages/mi-perfil/mi-perfil.module#MiPerfilPageModule' },
  //{ path: 'ajustes', loadChildren: './pages/ajustes/ajustes.module#AjustesPageModule' },
  //{ path: 'noticias', loadChildren: './pages/noticias/noticias.module#NoticiasPageModule' },
  //{ path: 'obras', loadChildren: './pages/obras/obras.module#ObrasPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
