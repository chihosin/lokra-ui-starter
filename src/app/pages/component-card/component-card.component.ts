import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-component-card',
  templateUrl: './component-card.component.html',
  styleUrls: [
    './component-card.component.scss'
  ]
})
export class ComponentCardComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Card';
  }

  ngOnInit() {
  }

}
