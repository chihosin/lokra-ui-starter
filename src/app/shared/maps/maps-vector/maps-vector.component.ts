import { Component, ElementRef, Input, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';
import 'jqvmap';

@Component({
  selector: 'lk-maps-vector',
  templateUrl: './maps-vector.component.html',
  styleUrls: [
    './maps-vector.component.scss'
  ]
})
export class MapsVectorComponent implements OnChanges, OnDestroy, AfterViewInit {

  @Input() options: any;
  @Input() height: number;

  private nativeElement: any;
  private jqueryElement: JQuery;
  private map: any;

  constructor(public elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
    this.jqueryElement = $(this.nativeElement);
  }

  ngOnChanges() {
    this.buildMap();
  }

  ngAfterViewInit() {
    this.buildMap();
  }

  ngOnDestroy() {
    this.map = null;
    this.nativeElement.remove();
  }

  private buildMap() {
    this.jqueryElement.find('.maps-vector-container').css({
      height: this.height + 'px',
      width: '100%'
    });
    this.jqueryElement.find('.maps-vector-container').vectorMap(this.options);
  }

}
