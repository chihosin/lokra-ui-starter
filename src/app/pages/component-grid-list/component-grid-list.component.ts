import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-component-grid-list',
  templateUrl: './component-grid-list.component.html',
  styleUrls: [
    './component-grid-list.component.scss'
  ]
})
export class ComponentGridListComponent implements OnInit {
  rowHeight=200;
  gutterSize=10;
  tiles = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Grid List';
  }

  ngOnInit() {
  }

}
