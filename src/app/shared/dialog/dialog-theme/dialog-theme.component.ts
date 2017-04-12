import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';
import { TranslateService } from 'ng2-translate';
import { AppService } from '../../../app.service';

@Component({
  templateUrl: './dialog-theme.component.html',
  styleUrls: [
    './dialog-theme.component.scss'
  ]
})
export class DialogThemeComponent implements OnInit {

  collapseSidenavChecked: boolean;
  lang = 'en';

  constructor(private appService: AppService,
              private dialogRef: MdDialogRef<DialogThemeComponent>,
              private translate: TranslateService) {
    this.collapseSidenavChecked = appService.getState().sidenavCollapse;
  }

  ngOnInit(): void {
  }

  toggleLang() {
    this.translate.setDefaultLang(this.appService.getState().defaultLang);
  }

  toggleCollapseSidenav() {
    this.appService.getState().sidenavCollapse = !this.appService.getState().sidenavCollapse;
  }

  toggleTheme() {
    let body = document.getElementsByTagName('body')[0];
    body.className = '';
    if (this.appService.getState().darkMode) {
      body.className = 'dark';
    } else {
      body.className = 'light';
    }
  }
}
