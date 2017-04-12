import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-layout-fullscreen',
  templateUrl: './layout-fullscreen.component.html',
  styleUrls: [
    './layout-fullscreen.component.scss'
  ]
})
export class LayoutFullscreenComponent implements OnInit, OnDestroy {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Fullscreen';
    appService.getState().pageFullscreen = true;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.appService.getState().pageFullscreen = false;
  }

}
