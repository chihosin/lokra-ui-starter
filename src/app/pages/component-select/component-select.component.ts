import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-component-select',
  templateUrl: './component-select.component.html',
  styleUrls: [
    './component-select.component.scss'
  ]
})
export class ComponentSelectComponent implements OnInit {
  selectedValue: string;
  colors = [
    {value: 'yellow', viewValue: 'Yellow'},
    {value: 'blue', viewValue: 'Blue'},
    {value: 'red', viewValue: 'Red'}
  ];

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Select';
  }

  ngOnInit() {
  }

}
