import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-component-toolbar',
  templateUrl: './component-toolbar.component.html',
  styleUrls: [
    './component-toolbar.component.scss'
  ]
})
export class ComponentToolbarComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Toolbar';
  }

  ngOnInit() {
  }

}
