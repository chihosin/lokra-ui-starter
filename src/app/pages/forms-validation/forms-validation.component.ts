import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-forms-validation',
  templateUrl: './forms-validation.component.html',
  styleUrls: [
    './forms-validation.component.scss'
  ]
})
export class FormsValidationComponent implements OnInit {

  forms: any = {
    firstName: null,
    lastName: null,
    password: null,
    certainPassword: null,
    url: null,
  };


  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Validation Forms';
  }

  ngOnInit() {
  }

}
