import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-pages-notfound',
  templateUrl: './pages-notfound.component.html',
  styleUrls: [
    './pages-notfound.component.scss'
  ]
})
export class PagesNotfoundComponent implements OnInit, OnDestroy {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Not Found';
    appService.getState().pageFullscreen = true;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.appService.getState().pageFullscreen = false;
  }

}
