import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

componentes: Componente[] = [
  {
    icon: 'appstore',
    name: 'Alert',
    redirectTo: '/alert'
  },
  
  {
    icon: 'american-football',
    name: 'Action Sheet',
    redirectTo: '/action-sheet'
  },
  {
    icon: 'beaker',
    name: 'Avatar',
    redirectTo: '/avatar'
  },
  {
    icon: 'radio-button-on',
    name: 'Botones y router',
    redirectTo: '/botones'
  },
  {
    icon: 'card',
    name: 'Cards',
    redirectTo: '/card'
  },
  {
    icon: 'checkmark-circle-outline',
    name: 'Checkbox',
    redirectTo: '/check'
  },
  {
    icon: 'send',
    name: 'Enviar Pdf',
    redirectTo:'/send-pdf'
  },
  {
    icon: 'construct',
    name: 'Crear Obra',
    redirectTo:'/new-construction'
  },
  {
    icon: 'paper',
    name: 'Enviar Noticias',
    redirectTo:'/create-news'
  },
  {
    icon: 'calendar',
    name: 'DateTime',
    redirectTo: '/date-time'
  },
  {
    icon: 'folder-open',
    name: 'File Upload',
    redirectTo: '/file-upload'
  },
  {
    icon: 'git-pull-request',
    name: 'Request',
    redirectTo: '/request'
  },
  {
    icon: 'locate',
    name: 'Location',
    redirectTo:'/location'
  },
  {
    icon: 'map',
    name: 'Google Map',
    redirectTo:'/map'
  },
  {
    icon: 'albums',
    name: 'Menu',
    redirectTo:'/menu/noticias'
  }
]

  constructor() { }

  ngOnInit() {
  }

}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}