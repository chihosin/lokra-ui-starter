import { Component, ElementRef, Input, AfterViewInit } from '@angular/core';
declare var Clappr: any;

@Component({
  selector: 'lk-media-clappr',
  templateUrl: './media-clappr.component.html',
  styleUrls: [
    './media-clappr.component.scss'
  ]
})
export class MediaClapprComponent implements AfterViewInit {

  @Input() options: any;

  private nativeElement: any;
  private player: any;

  constructor(public elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
  }

  ngAfterViewInit() {
    this.buildPlayer();
  }

  private buildPlayer() {
    if (!this.options.width)
      this.options.width = this.nativeElement.querySelector('.media-clappr-container').clientWidth;
    this.options.parent = this.nativeElement.querySelector('.media-clappr-container');
    this.player = new Clappr.Player(this.options);
  }

}
