import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'lk-component-notifications',
  templateUrl: './component-notifications.component.html',
  styleUrls: [
    './component-notifications.component.scss'
  ]
})
export class ComponentNotificationsComponent implements OnInit {

  private snackBarRef: any;
  time=1000;


  constructor(private appService: AppService, public snackBar: MdSnackBar) {
    appService.getState().topnavTitle = 'Notifications';
  }

  ngOnInit() {
  }

  openNotify() {
    this.snackBarRef = this.snackBar.open('Launch success!', 'Done', {
      duration: 2000,
    });
    this.snackBarRef.afterDismissed().subscribe(() => {
      console.log('The snack-bar was dismissed');
    });
    this.snackBarRef.onAction().subscribe(() => {
      console.log('The snack-bar action was triggered!');
    });
  }

  closeNotify() {
    if (this.snackBarRef)
      this.snackBarRef.dismiss();
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: this.time,
    });
  }

}
