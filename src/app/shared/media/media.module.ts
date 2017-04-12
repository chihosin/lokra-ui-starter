import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '@angular/material';
import { MediaClapprComponent } from './media-clappr/media-clappr.component';

@NgModule({
  declarations: [
    MediaClapprComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule
  ],
  exports: [
    MediaClapprComponent,
  ]
})
export class MediaModule {
}
