import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { SharedModule } from '../shared';



@NgModule({
  declarations: [
    NotificationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NotificationComponent
  ]
})
export class NotificationModule { }
