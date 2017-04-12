import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-component-buttons',
  templateUrl: './component-buttons.component.html',
  styleUrls: [
    './component-buttons.component.scss'
  ]
})
export class ComponentButtonsComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Buttons';
  }

  ngOnInit() {
  }

}
