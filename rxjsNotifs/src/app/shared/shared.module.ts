import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatToolbarModule, MatIconModule, MatTooltipModule, MatButtonModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ],
  exports: [
    MatToolbarModule,
    FlexLayoutModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule
  ]
})
export class SharedModule { }
