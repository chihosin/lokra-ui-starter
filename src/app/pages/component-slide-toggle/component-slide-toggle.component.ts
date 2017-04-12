import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-component-slide-toggle',
  templateUrl: './component-slide-toggle.component.html',
  styleUrls: [
    './component-slide-toggle.component.scss'
  ]
})
export class ComponentSlideToggleComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Slide Toggle';
  }

  ngOnInit() {
  }

}
