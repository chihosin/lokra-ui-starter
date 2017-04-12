import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: [
    './component-list.component.scss'
  ]
})
export class ComponentListComponent implements OnInit {


  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'List';
  }
  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  ngOnInit() {
  }

}
