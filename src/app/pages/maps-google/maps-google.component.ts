import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-maps-googlemap',
  templateUrl: './maps-google.component.html',
  styleUrls: [
    './maps-google.component.scss'
  ]
})
export class MapsGoogleComponent implements OnInit {

  lat: number = 23.1221926;
  lng: number = 113.4048019;
  zm: number = 13;
  mlat: number = 23.1221926;
  mlng: number = 113.4048019;
  mlabel: string = 'L';
  mdraggable: boolean = false;

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Google Maps';
  }

  ngOnInit() {
  }

}
