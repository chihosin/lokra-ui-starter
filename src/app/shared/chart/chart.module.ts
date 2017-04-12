import { NgModule } from '@angular/core';
import { ChartJsComponent } from './chart-js/chart-js.component';
import { ChartPeityComponent } from './chart-peity/chart-peity.component';
import { ChartC3Component } from './chart-c3/chart-c3.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';

@NgModule({
  declarations: [
    ChartJsComponent,
    ChartPeityComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    ChartJsComponent,
    ChartPeityComponent,
  ]
})
export class ChartModule {
}
