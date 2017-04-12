import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';

@Component({
  selector: 'lk-apps-calendar',
  templateUrl: './apps-calendar.component.html',
  styleUrls: [
    './apps-calendar.component.scss'
  ]
})
export class AppsCalendarComponent implements OnInit {

  options = CalendarMock.options;

  constructor(private appService: AppService) {
    appService.getState().topnavTitle = 'Calendar';
  }

  ngOnInit() {
  }

}

class CalendarMock {
  static options: any = {
    header: {
      left: '',
      center: 'prev, title, next',
      right: 'today agendaDay,agendaTwoDay,agendaWeek,month'
    },
    defaultDate: '2017-01-12',
    editable: true,
    selectable: true,
    eventLimit: true,
    events: [
      {
        title: 'All Day Event',
        start: '2017-01-01'
      },
      {
        title: 'Long Event',
        start: '2017-01-07',
        end: '2017-01-10',
        className: 'event-green'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2017-01-09T16:00:00',
        className: 'event-red'
      },
      {
        id: 999,
        title: 'Repeating Event',
        start: '2017-01-16T16:00:00',
        className: 'event-orange'
      },
      {
        title: 'Conference',
        start: '2017-01-11',
        end: '2017-01-13',
        className: 'event-coral'
      },
      {
        title: 'Meeting',
        start: '2017-01-12T10:30:00',
        end: '2017-01-12T12:30:00',
        className: 'event-green'
      },
      {
        title: 'Lunch',
        start: '2017-01-12T12:00:00'
      },
      {
        title: 'Meeting',
        start: '2017-01-12T14:30:00',
        className: 'event-red'
      },
      {
        title: 'Happy Hour',
        start: '2017-01-12T17:30:00'
      },
      {
        title: 'Dinner',
        start: '2017-01-12T20:00:00',
        className: 'event-orange'
      },
      {
        title: 'Birthday Party',
        start: '2017-01-13T07:00:00'
      },
      {
        title: 'Click for Google',
        url: 'http://google.com/',
        start: '2017-01-28',
        className: 'event-coral'
      }
    ]
  };
}
