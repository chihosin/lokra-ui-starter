import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-component-radio-button',
  templateUrl: './component-radio-button.component.html',
  styleUrls: [
    './component-radio-button.component.scss'
  ]
})
export class ComponentRadioButtonComponent implements OnInit {

  favoriteColor: string;

  colors = [
    'White',
    'Black',
    'Gray',
    'Brown',
  ];

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Radio Button';
  }

  ngOnInit() {
  }

}
