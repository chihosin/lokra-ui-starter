import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChartModule } from '../../shared/chart/chart.module';
import { AgmCoreModule } from 'angular2-google-maps/core';

export const routes = [
  {path: '', component: DashboardComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    AgmCoreModule,
    RouterModule.forChild(routes),
    ChartModule
  ]
})
export class DashboardModule {
  static routes = routes;
}
