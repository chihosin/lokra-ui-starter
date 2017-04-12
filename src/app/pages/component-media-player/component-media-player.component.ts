import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-component-media-player',
  templateUrl: './component-media-player.component.html',
  styleUrls: [
    './component-media-player.component.scss'
  ]
})
export class ComponentMediaPlayerComponent implements OnInit {

  options: any = MediaMock.options;

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Media Player';
  }

  ngOnInit() {
  }

}

class MediaMock {
  static options: any = {
    source: 'http://techslides.com/demos/sample-videos/small.mp4',
  };
}
