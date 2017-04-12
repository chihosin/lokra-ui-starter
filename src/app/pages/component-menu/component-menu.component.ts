import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-component-menu',
  templateUrl: './component-menu.component.html',
  styleUrls: [
    './component-menu.component.scss'
  ]
})
export class ComponentMenuComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Menu';
  }

  ngOnInit() {
  }

}
