import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.sideMenu()
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit(){
  }

  sideMenu(){
    this.navigate = [
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
      }
    ]
  }
}