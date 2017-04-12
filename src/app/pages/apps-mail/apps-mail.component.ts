import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-apps-mail',
  templateUrl: './apps-mail.component.html',
  styleUrls: [
    './apps-mail.component.scss'
  ]
})
export class AppsMailComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Mail';
  }

  ngOnInit() {
  }

}
