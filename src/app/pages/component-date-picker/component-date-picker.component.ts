import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-component-date-picker',
  templateUrl: './component-date-picker.component.html',
  styleUrls: [
    './component-date-picker.component.scss'
  ]
})
export class ComponentDatePickerComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Date Picker';
  }

  ngOnInit() {
  }

}
