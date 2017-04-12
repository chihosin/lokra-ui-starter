import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-icon-weather',
  templateUrl: 'icon-weather.component.html',
  styleUrls: [
    'icon-weather.component.scss'
  ]
})
export class IconWeatherComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Weather Icons';
  }

  ngOnInit() {
  }

}
