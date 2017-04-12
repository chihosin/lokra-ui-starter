import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-component-slider',
  templateUrl: './component-slider.component.html',
  styleUrls: [
    './component-slider.component.scss'
  ]
})
export class ComponentSliderComponent implements OnInit {
  max = 100;
  min = 0;
  step = 8;
  value = 20;
  tickInterval=6;

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Slider';
  }

  ngOnInit() {
  }

}
