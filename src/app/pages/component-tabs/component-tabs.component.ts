import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-component-tabs',
  templateUrl: './component-tabs.component.html',
  styleUrls: [
    './component-tabs.component.scss'
  ]
})
export class ComponentTabsComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Tabs';
  }

  ngOnInit() {
  }

}
