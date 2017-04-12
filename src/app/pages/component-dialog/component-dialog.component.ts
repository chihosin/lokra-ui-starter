import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { MdDialog } from '@angular/material';
import { DialogExampleComponent } from '../../shared/dialog/dialog-example/dialog-example.component';

@Component({
  selector: 'lk-component-dialog',
  templateUrl: './component-dialog.component.html',
  styleUrls: [
    './component-dialog.component.scss'
  ]
})
export class ComponentDialogComponent implements OnInit {

  selectedOption: string;

  constructor(private appService: AppService, private dialog: MdDialog) {
    appService.getState().topnavTitle = 'Dialog';
  }

  ngOnInit() {
  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogExampleComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
  }

}
