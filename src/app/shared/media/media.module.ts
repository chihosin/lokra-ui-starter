import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MediaClapprComponent } from './media-clappr/media-clappr.component';

@NgModule({
  declarations: [
    MediaClapprComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule
  ],
  exports: [
    MediaClapprComponent,
  ]
})
export class MediaModule {
}
