import { Component, ElementRef, Input, AfterViewInit, OnChanges } from '@angular/core';

@Component({
  selector: 'lk-info-tile',
  templateUrl: './info-tile.component.html',
  styleUrls: [
    './info-tile.component.scss'
  ]
})
export class InfoTileComponent implements OnChanges, AfterViewInit {

  @Input() title: string;
  @Input() description: string;
  @Input() iconClass: string;
  @Input() color: string;
  @Input() backgroundStyle: string;

  private nativeElement: any;

  constructor(public elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
  }

  ngOnChanges() {
    this.buildWidget();
  }

  ngAfterViewInit() {
    this.buildWidget();
  }

  private buildWidget() {
    this.nativeElement.querySelector('md-card').style.background = this.backgroundStyle;
    switch (this.color) {
      case 'primary' :
        this.nativeElement.querySelector('md-card').className += ' bg-primary';
        break;
      case 'accent' :
        this.nativeElement.querySelector('md-card').className += ' bg-accent';
        break;
      case 'warn' :
        this.nativeElement.querySelector('md-card').className += ' bg-warn';
        break;
      default:
        break;
    }
  }

}
