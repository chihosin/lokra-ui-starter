import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-apps-explorer',
  templateUrl: './apps-explorer.component.html',
  styleUrls: [
    './apps-explorer.component.scss'
  ]
})
export class AppsExplorerComponent implements OnInit {

  viewType: string = 'grid';

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Explorer';
  }

  ngOnInit() {
  }

}
