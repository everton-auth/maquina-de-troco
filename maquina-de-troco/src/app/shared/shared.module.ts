import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './modules/material.module';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModule,
  ],
  exports: [
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class SharedModule { }
