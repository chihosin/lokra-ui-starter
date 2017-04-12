import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { MediaChange } from '@angular/flex-layout';

const ALIGN_OPTIONS = ['auto', 'start', 'center', 'baseline', 'end', 'stretch'];
const DIRECTIONS = ['row', 'row-reverse', 'column', 'column-reverse'];

@Component({
  selector: 'lk-layout-flex',
  templateUrl: './layout-flex.component.html',
  styleUrls: [
    './layout-flex.component.scss'
  ]
})
export class LayoutFlexComponent implements OnInit {
  firstCol = 'row';
  firstColXs = 'column';
  firstColMd = 'column';
  firstColLg = 'invalid';
  firstColGtLg = 'column';
  secondCol = 'column';
  isVisible = true;
  alignTo = 'center';
  direction = 'row';
  someValue = 20;
  mainAxis = 'space-around';
  crossAxis = 'center';

  private _activeMQC: MediaChange;

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Flex';
  }

  ngOnInit() {
  }

  toggleLayoutFor(col) {
    switch (col) {
      case 1:

        col = `firstCol${this._activeMQC ? this._activeMQC.suffix : ''}`;
        this[col] = (this[col] === 'column') ? 'row' : 'column';
        break;

      case 2:
        col = 'secondCol';
        this[col] = (this[col] == 'row') ? 'column' : 'row';
        break;

      default:
        break;
    }
  }

  toggleAlignment() {
    let j = ALIGN_OPTIONS.indexOf(this.alignTo);
    this.alignTo = ALIGN_OPTIONS[(j + 1) % ALIGN_OPTIONS.length];
  }

  toggleDirection() {
    let next = (DIRECTIONS.indexOf(this.direction) + 1 ) % DIRECTIONS.length;
    this.direction = DIRECTIONS[next];
  }

  layoutAlign() {
    return `${this.mainAxis} ${this.crossAxis}`;
  }
}
