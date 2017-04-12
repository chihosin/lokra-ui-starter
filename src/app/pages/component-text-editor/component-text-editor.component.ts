import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-component-text-editor',
  templateUrl: './component-text-editor.component.html',
  styleUrls: [
    './component-text-editor.component.scss'
  ]
})
export class ComponentTextEditorComponent implements OnInit {

  data: string = 'appendix';

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Text Editor';
  }

  ngOnInit() {
  }

}
