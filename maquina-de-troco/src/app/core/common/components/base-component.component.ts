import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  template: ""
})
export class BaseComponentComponent implements OnDestroy {

  private Subscriptions: Subscription[] = [];
  public set subscribe(subs: Subscription) {
    this.Subscriptions.push(subs);
  }


  
  constructor() { }

  ngOnDestroy() {
    this.Subscriptions.forEach(sub => sub.unsubscribe())
  }
}
