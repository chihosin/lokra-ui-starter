import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-layout-cards',
  templateUrl: './layout-cards.component.html',
  styleUrls: [
    './layout-cards.component.scss'
  ]
})
export class LayoutCardsComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Cards';
  }

  ngOnInit() {
  }

}
