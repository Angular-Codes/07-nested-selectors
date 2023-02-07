import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppIconComponent } from './components/app-icon/app-icon.component';



@NgModule({
  declarations: [
    AppIconComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AppIconComponent
  ]
})
export class SharedModule { }
