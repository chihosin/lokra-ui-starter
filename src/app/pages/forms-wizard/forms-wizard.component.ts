import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-forms-wizard',
  templateUrl: './forms-wizard.component.html',
  styleUrls: [
    './forms-wizard.component.scss'
  ]
})
export class FormsWizardComponent implements OnInit {

  phone: string;
  email: string;
  selectIndex: number = 0;

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Wizard Forms';
  }

  ngOnInit() {
  }

  prev() {
    if (this.selectIndex <= 0)
      this.selectIndex = 0;
    else
      this.selectIndex = this.selectIndex - 1;
  }

  next() {
    if (this.selectIndex >= 3)
      this.selectIndex = 3;
    else
      this.selectIndex = this.selectIndex + 1;
  }

}
