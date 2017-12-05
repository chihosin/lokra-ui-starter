import { NgModule } from '@angular/core';
import { ChartJsComponent } from './chart-js/chart-js.component';
import { ChartPeityComponent } from './chart-peity/chart-peity.component';
import { ChartC3Component } from './chart-c3/chart-c3.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    ChartJsComponent,
    ChartPeityComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    ChartJsComponent,
    ChartPeityComponent,
  ]
})
export class ChartModule {
}
