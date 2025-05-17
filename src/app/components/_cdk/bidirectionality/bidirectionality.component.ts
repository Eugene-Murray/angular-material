import { Directionality } from '@angular/cdk/bidi';
import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-bidirectionality',
  imports: [],
  templateUrl: './bidirectionality.component.html',
  styleUrl: './bidirectionality.component.scss',
})
export class BidirectionalityComponent implements OnDestroy {
  /** Whether the widget is in RTL mode or not. */
  private isRtl: boolean;

  /** Subscription to the Directionality change EventEmitter. */
  private _dirChangeSubscription = Subscription.EMPTY;

  constructor(dir: Directionality) {
    this.isRtl = dir.value === 'rtl';

    this._dirChangeSubscription = dir.change.subscribe(() => {
      this.flipDirection();
    });
  }

  ngOnDestroy() {
    this._dirChangeSubscription.unsubscribe();
  }

  flipDirection() {
    console.log('Direction changed');
  }
}
