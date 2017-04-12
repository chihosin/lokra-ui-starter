import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-component-bootstrap',
  templateUrl: 'component-bootstrap.component.html',
  styleUrls: [
    'component-bootstrap.component.scss'
  ]
})
export class ComponentBootstrapComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Bootstrap';
  }

  ngOnInit() {
  }

}
