import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ScheduleCalendarComponent } from './schedule-calendar/schedule-calendar.component';

@NgModule({
  declarations: [
    ScheduleCalendarComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    ScheduleCalendarComponent,
  ]
})
export class ScheduleModule {
}
