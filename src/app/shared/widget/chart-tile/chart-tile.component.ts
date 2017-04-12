import { Component, ElementRef, Input, AfterViewInit, OnChanges } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'lk-chart-tile',
  templateUrl: './chart-tile.component.html',
  styleUrls: [
    './chart-tile.component.scss'
  ]
})
export class ChartTileComponent implements OnChanges, AfterViewInit {

  @Input() title: string;
  @Input() value: string;
  @Input() valueTrending: string;
  @Input() color: string;
  @Input() chartType: string;
  @Input() chartData: Array<string>;
  @Input() chartOptions: any;

  private nativeElement: any;

  constructor(public elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
    this.debounceResize();
  }

  debounceResize() {
    Observable.fromEvent(window, 'resize')
      .debounceTime(250)
      .subscribe(() => {
        this.chartOptions = {width: this.nativeElement.querySelector('md-card').clientWidth / 2};
      });
  }

  ngOnChanges() {
    this.buildWidget();
  }

  ngAfterViewInit() {
    this.buildWidget();
  }

  private buildWidget() {
    this.chartOptions['height'] = 56;
    this.chartOptions['width'] = this.nativeElement.querySelector('md-card').clientWidth / 2;
    this.nativeElement.querySelector('div.widget-tile-counter > span > i').style.color = this.color;
    switch (this.valueTrending) {
      case 'up':
        this.nativeElement.querySelector('div.widget-tile-counter > span > i').className += ' fa fa-caret-up';
        break;
      case 'down':
        this.nativeElement.querySelector('div.widget-tile-counter > span > i').className += ' fa fa-caret-down';
        break;
      default:
        this.nativeElement.querySelector('div.widget-tile-counter > span > i').className += ' fa fa-caret-right';
        break;
    }
  }

}
