import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { ChartModule } from '../chart/chart.module';
import { InfoTileComponent } from './info-tile/info-tile.component';
import { ChartTileComponent } from './chart-tile/chart-tile.component';

@NgModule({
  declarations: [
    InfoTileComponent,
    ChartTileComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    ChartModule,
  ],
  exports: [
    InfoTileComponent,
    ChartTileComponent
  ]
})
export class WidgetModule {
}
