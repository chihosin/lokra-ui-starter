import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-pages-lockscreen',
  templateUrl: './pages-lockscreen.component.html',
  styleUrls: [
    './pages-lockscreen.component.scss'
  ]
})
export class PagesLockscreenComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Lockscreen';
    appService.getState().pageFullscreen = true;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.appService.getState().pageFullscreen = false;
  }

}
