import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-pages-signin',
  templateUrl: './pages-signin.component.html',
  styleUrls: [
    './pages-signin.component.scss'
  ]
})
export class PagesSigninComponent implements OnInit, OnDestroy {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Sign In';
    appService.getState().pageFullscreen = true;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.appService.getState().pageFullscreen = false;
  }

}
