import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-layout-edges',
  templateUrl: './layout-edges.component.html',
  styleUrls: [
    './layout-edges.component.scss'
  ]
})
export class LayoutEdgesComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Edges';
  }

  ngOnInit() {
  }

}
