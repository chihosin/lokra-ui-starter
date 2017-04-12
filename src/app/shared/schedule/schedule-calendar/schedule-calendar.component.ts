import { Component, ElementRef, Input, AfterViewInit, OnChanges, OnDestroy } from '@angular/core';
import 'fullcalendar';

@Component({
  selector: 'lk-schedule-calendar',
  templateUrl: './schedule-calendar.component.html',
  styleUrls: [
    './schedule-calendar.component.scss'
  ]
})
export class ScheduleCalendarComponent implements OnChanges, OnDestroy, AfterViewInit {

  @Input() options: any;

  private nativeElement: any;
  private jqueryElement: JQuery;
  private calendar: any;

  constructor(public elementRef: ElementRef) {
    this.nativeElement = elementRef.nativeElement;
    this.jqueryElement = $(this.nativeElement);
  }

  ngOnDestroy() {
    this.calendar = null;
    this.nativeElement.remove();
  }

  ngOnChanges() {
    this.buildCalendar();
  }

  ngAfterViewInit() {
    this.buildCalendar();
  }

  private buildCalendar() {
    this.jqueryElement.find('.schedule-calendar-container').fullCalendar(this.options);
  }

}
