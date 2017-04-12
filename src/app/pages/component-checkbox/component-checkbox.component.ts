import {Component, OnInit, Input} from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-component-checkbox',
  templateUrl: './component-checkbox.component.html',
  styleUrls: [
    './component-checkbox.component.scss'
  ]
})
export class ComponentCheckboxComponent implements OnInit {
  checked = false;
  indeterminate = false;
  align = 'start';
  disabled = false;

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Checkbox';
  }

  ngOnInit() {
  }

}
