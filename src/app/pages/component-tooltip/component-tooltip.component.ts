import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-component-tooltip',
  templateUrl: './component-tooltip.component.html',
  styleUrls: [
    './component-tooltip.component.scss'
  ]
})
export class ComponentTooltipComponent implements OnInit {
  position = 'before';
  tooltip='Tooltip!';

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Tooltip';
  }

  ngOnInit() {
  }

}
