import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-tables-basic',
  templateUrl: './tables-basic.component.html',
  styleUrls: [
    './tables-basic.component.scss'
  ]
})
export class TablesBasicComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Basic Tables';
  }

  ngOnInit() {
  }

}
