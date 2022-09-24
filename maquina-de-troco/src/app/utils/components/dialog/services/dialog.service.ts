import { Injectable } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { take } from "rxjs/operators";

import { DialogComponent } from "../component/dialog.component";
import { Dialog } from "../interfaces/dialog.interface";

@Injectable({
  providedIn: "root",
})
export class DialogService {
  constructor(private ngDialog: MatDialog) { }

  private dialog(dialog: Dialog<any>): Promise<any> {
    return new Promise((resolve) => {
      let dialogresult = this.ngDialog.open(DialogComponent, {
        data: dialog,
        autoFocus: false,
        disableClose: true,
        width: dialog.width ? dialog.width : "initial",
        minWidth: dialog.width ? dialog.width : "initial",
        height: dialog.height ? dialog.height : "initial",
        backdropClass: "DialogBackground"
      });

      return dialogresult.afterClosed().pipe(take(1)).subscribe((result) => {
        resolve(result);
      });
    });
  }

  public async component(option: Dialog<any>): Promise<any> {
    option.type = "default";
    return await this.dialog(option);
  }

  public async confirm(options: Dialog<any>): Promise<any> {
    options.type = "default";
    options.buttons = [
      {
        text: "Confirmar",
        color: "success",
        value: true,
      },
      {
        text: "Cancelar",
        color: "default",
        value: false,
      },
    ];
    return await this.dialog(options);
  }

  public async alert(options: Dialog<any>): Promise<any> {
    options.buttons = [
      {
        text: "Ok",
        color: options.type,
        value: true,
      },
    ];
    return await this.dialog(options);
  }

  close() {
    this.ngDialog.closeAll();
  }

  isLoading(value: boolean){
    this.ngDialog?.openDialogs[this.ngDialog.openDialogs?.length - 1]?.componentInstance?.isLoading(value);
  }
}
