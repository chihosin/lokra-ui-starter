import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-pages-error',
  templateUrl: './pages-error.component.html',
  styleUrls: [
    './pages-error.component.scss'
  ]
})
export class PagesErrorComponent implements OnInit, OnDestroy {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Error';
    appService.getState().pageFullscreen = true;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.appService.getState().pageFullscreen = false;
  }

}
