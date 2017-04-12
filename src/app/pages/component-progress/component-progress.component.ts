import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-component-progress',
  templateUrl: './component-progress.component.html',
  styleUrls: [
    './component-progress.component.scss'
  ]
})
export class ComponentProgressComponent implements OnInit {
  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Progress';
  }

  ngOnInit() {
  }

}
