import { Component, OnInit } from '@angular/core';
import { MdDialogRef } from '@angular/material';

@Component({
  templateUrl: './dialog-example.component.html',
  styleUrls: [
    './dialog-example.component.scss'
  ]
})
export class DialogExampleComponent implements OnInit {
  constructor(private dialogRef: MdDialogRef<DialogExampleComponent>) {
  }

  ngOnInit(): void {
  }
}
