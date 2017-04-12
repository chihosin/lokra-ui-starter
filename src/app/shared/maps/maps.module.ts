import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { MapsVectorComponent } from './maps-vector/maps-vector.component';

@NgModule({
  declarations: [
    MapsVectorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    MapsVectorComponent
  ]
})
export class MapModule {
}
