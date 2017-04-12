import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { ScheduleCalendarComponent } from './schedule-calendar/schedule-calendar.component';

@NgModule({
  declarations: [
    ScheduleCalendarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    ScheduleCalendarComponent,
  ]
})
export class ScheduleModule {
}
