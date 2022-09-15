import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BootRoutingModule } from './boot-routing.module';
import { BootComponent } from './component/boot.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    BootComponent
  ],
  imports: [
    BrowserModule,
    BootRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [BootComponent]
})
export class BootModule { }
