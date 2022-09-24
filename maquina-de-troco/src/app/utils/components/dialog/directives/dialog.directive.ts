import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[adHost]",
})
export class DialogDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}