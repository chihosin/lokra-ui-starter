import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-charts-peity',
  templateUrl: './charts-peity.component.html',
  styleUrls: [
    './charts-peity.component.scss'
  ]
})
export class ChartsPeityComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Peity';
  }

  ngOnInit() {
  }

}
