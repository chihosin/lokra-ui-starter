import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'lk-forms-upload',
  templateUrl: './forms-upload.component.html',
  styleUrls: [
    './forms-upload.component.scss'
  ]
})
export class FormsUploadComponent implements OnInit {

  public uploader: FileUploader = new FileUploader({url: 'https://evening-anchorage-3159.herokuapp.com/api/'});
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Upload';
  }

  ngOnInit() {
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public fileOverAnother(e: any): void {
    this.hasAnotherDropZoneOver = e;
  }

}
