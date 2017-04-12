import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-icon-material',
  templateUrl: './icon-material.component.html',
  styleUrls: [
    './icon-material.component.scss'
  ]
})
export class IconMaterialComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Material Icons';
  }

  ngOnInit() {
  }

}
