import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-pages-signup',
  templateUrl: './pages-signup.component.html',
  styleUrls: [
    './pages-signup.component.scss'
  ]
})
export class PagesSignupComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Sign Up';
    appService.getState().pageFullscreen = true;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.appService.getState().pageFullscreen = false;
  }

}
