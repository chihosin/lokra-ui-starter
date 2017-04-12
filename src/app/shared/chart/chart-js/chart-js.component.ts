import { Component, ElementRef, Input, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import * as Chart from 'chart.js';

@Component({
  selector: 'lk-chart-js',
  templateUrl: './chart-js.component.html',
  styleUrls: [
    './chart-js.component.scss'
  ]
})
export class ChartJsComponent implements OnChanges, OnDestroy, AfterViewInit {

  @Input() type: string;
  @Input() data: any;
  @Input() options: any;
  @Input() syncData: any;
  @Input() height: number;
  @Input() width: number;

  private nativeElement: any;
  private chart: Chart;

  constructor(public elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
  }

  ngOnChanges() {
    if (this.chart) {
      if (this.syncData) {
        for (let index = 0; index < this.data.datasets.length; index++) {
          this.data.datasets[index].data = this.syncData[index];
        }
      }
      this.chart.update();
    }
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart.destroy();
    }
  }

  ngAfterViewInit() {
    this.buildChart();
    this.debounceResize();
  }

  debounceResize() {
    Observable.fromEvent(window, 'resize')
      .debounceTime(250)
      .subscribe(() => {
        this.buildChart();
      });
  }

  private buildChart(): void {
    if (this.chart) {
      this.chart.destroy();
      this.nativeElement.querySelector('.chart-js-container > canvas').remove();
      this.nativeElement.querySelector('.chart-js-container')
        .appendChild(document.createElement('canvas'));
    }

    if (this.height > 0) {
      this.nativeElement.querySelector('.chart-js-container > canvas').height = this.height;
    }
    if (this.width > 0) {
      this.nativeElement.querySelector('.chart-js-container > canvas').width = this.width;
    } else {
      this.nativeElement.querySelector('.chart-js-container > canvas').width =
        this.nativeElement.querySelector('.chart-js-container').clientWidth;
    }
    if (this.syncData) {
      for (let index = 0; index < this.data.datasets.length; index++) {
        this.data.datasets[index].data = this.syncData[index];
      }
    }

    this.chart = new Chart(this.nativeElement.querySelector('.chart-js-container > canvas'), {
      type: this.type,
      data: this.data,
      options: this.options
    });
  }

}
