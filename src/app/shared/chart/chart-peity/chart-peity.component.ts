import 'peity';
import { Component, OnInit, ElementRef, Input, OnChanges, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'lk-chart-peity',
  templateUrl: './chart-peity.component.html',
  styleUrls: [
    './chart-peity.component.scss'
  ]
})
export class ChartPeityComponent implements OnInit, OnChanges, OnDestroy {

  @Input() type: string;
  @Input() data: Array<string>;
  @Input() options: any;

  private nativeElement: any;
  private jqueryElement: JQuery;
  private chart: any;

  constructor(public elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
    this.jqueryElement = $(this.nativeElement);
    this.debounceResize();
  }

  debounceResize() {
    Observable.fromEvent(window, 'resize')
      .debounceTime(250)
      .subscribe(() => {
        this.buildChart();
      });
  }

  ngOnInit() {
    this.buildChart();
  }

  ngOnChanges() {
    if (this.chart) {
      this.chart.text(this.data.join(this.options.delimiter ? this.options.delimiter : ','));
      this.chart.change();
    }
  }

  ngOnDestroy() {
    if (this.chart) {
      this.chart = null;
      this.nativeElement.remove();
    }
  }

  private buildChart() {
    this.chart = this.jqueryElement.find('span').peity(this.type, this.options);
    this.ngOnChanges();
  }

}
