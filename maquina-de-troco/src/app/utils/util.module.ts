import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DialogComponent } from './components/dialog/component/dialog.component';
import { SnackbarComponent } from './components/snackbar/component/snackbar.component';

@NgModule({
  declarations: [
    DialogComponent,
    SnackbarComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: []
})
export class UtilModule { }
