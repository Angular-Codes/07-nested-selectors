import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from './components/app-icon/app-icon.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppIconComponent
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    AppIconComponent
  ]
})
export class SharedModule { }
