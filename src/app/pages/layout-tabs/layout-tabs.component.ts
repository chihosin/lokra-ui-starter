import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-layout-tabs',
  templateUrl: './layout-tabs.component.html',
  styleUrls: [
    './layout-tabs.component.scss'
  ]
})
export class LayoutTabsComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Tabs';
  }

  ngOnInit() {
  }

}
