import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-component-chips',
  templateUrl: './component-chips.component.html',
  styleUrls: [
    './component-chips.component.scss'
  ]
})
export class ComponentChipsComponent implements OnInit {

  color: string;

  availableColors = [
    { name: 'none', color: '' },
    { name: 'Primary', color: 'primary' },
    { name: 'Accent', color: 'accent' },
    { name: 'Warn', color: 'warn' }
  ];
  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Chips';
  }

  ngOnInit() {
  }

}
