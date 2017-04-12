import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-pages-invoice',
  templateUrl: './pages-invoice.component.html',
  styleUrls: [
    './pages-invoice.component.scss'
  ]
})
export class PagesInvoiceComponent implements OnInit {

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Invoice';
  }

  ngOnInit() {
  }

}
