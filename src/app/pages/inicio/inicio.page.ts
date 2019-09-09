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