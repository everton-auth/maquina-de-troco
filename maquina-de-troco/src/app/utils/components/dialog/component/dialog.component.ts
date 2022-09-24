import { Component, ComponentFactoryResolver, Inject, OnInit, ViewChild } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { Subscription } from "rxjs";
import { take } from "rxjs/operators";

import { DialogDirective } from "../directives/dialog.directive";
import { DialogButton } from "../interfaces/dialog-button.interface";
import { Dialog } from "../interfaces/dialog.interface";

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"],
})
export class DialogComponent implements OnInit {
  @ViewChild(DialogDirective, { static: true }) adHost!: DialogDirective;

  public dialogLoad = false;
  private componentRef!: any;
  public dialog;
  subscription: Subscription[] = [];
  
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    @Inject(MAT_DIALOG_DATA) public data: Dialog<any>,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {
    this.dialog = data;
  }

  ngOnInit() {
    if (this.dialog.component) this.loadComponent();
  }
  loadComponent() {
    const content = this.dialog.component;
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(content);
    const viewContainerRef = this.adHost.viewContainerRef;

    this.componentRef = viewContainerRef.createComponent<any>(componentFactory);

    this.componentRef.instance.data = this.dialog.data;
    if (this.componentRef.instance.emitter && this.dialog.callback) {
      this.subscription = this.componentRef.instance.emitter.pipe(take(1)).subscribe((rst: any) => {
        this.dialog.callback(rst);
      });
    }
  }

  handleButton(button: DialogButton) {
    if (this.componentRef?.instance.handleDialogButton)
      this.componentRef.instance.handleDialogButton(button.value);
    else this.dialogRef.close(button.value);
  }

  isLoading(value: boolean){
    setTimeout(() => {
    this.dialogLoad = value;
    });
  }
}
