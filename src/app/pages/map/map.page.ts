import { Component, OnInit, ViewChild } from '@angular/core';
import { GoogleMapComponent } from 'src/app/components/google-maps/google-maps.component';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit{

  @ViewChild(GoogleMapComponent, {static: true}) mapComponent: GoogleMapComponent;

    constructor() {

    }

    ngOnInit() {}

    testMarker(){

        let center = this.mapComponent.map.getCenter();
        this.mapComponent.addMarker(center.lat(), center.lng());
        console.log('Marker Clicked')
    }
}
