import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-icon-fontawesome',
  templateUrl: './icon-fontawesome.component.html',
  styleUrls: [
    './icon-fontawesome.component.scss'
  ]
})
export class IconFontawesomeComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Font Awesome';
  }

  ngOnInit() {
  }

}
