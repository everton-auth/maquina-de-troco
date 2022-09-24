import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SnackbarComponent } from './../component/snackbar.component';
import { Snackbar } from './../interface/snackbar.interface';


@Injectable({ providedIn: "root" })
export class SnackBarService {

  constructor(
    private _snackBar: MatSnackBar,
  ) { }

  openSnackBar(snackbar: Snackbar) {
    return this._snackBar.openFromComponent(SnackbarComponent,
      {
        data: {
          message: snackbar.message,
          type: snackbar.type,
          button: snackbar.button ? snackbar.button : "OK"
        },
        panelClass: snackbar.type,
        horizontalPosition: snackbar.horizontalPosition ? snackbar.horizontalPosition : "center",
        verticalPosition: snackbar.verticalPosition ? snackbar.verticalPosition : "top",
        duration: snackbar.secondsDuration ? snackbar.secondsDuration * 1000 : undefined,
      }
    ).afterDismissed();
  }

  closeSnackBar() {
    return this._snackBar.dismiss();
  }
}