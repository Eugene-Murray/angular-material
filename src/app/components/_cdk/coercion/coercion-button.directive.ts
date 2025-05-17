import {
  BooleanInput,
  coerceBooleanProperty,
  coerceElement,
  coerceNumberProperty,
  NumberInput,
} from '@angular/cdk/coercion';
import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: 'appCoercionButton',
  host: {
    '[disabled]': 'disabled',
    '(click)': 'greet()',
  },
})
export class CoercionButtonDirective {
  @Input()
  get disabled() {
    return this._disabled;
  }
  set disabled(value: BooleanInput) {
    this._disabled = coerceBooleanProperty(value);
  }
  private _disabled = false;

  @Input()
  get greetDelay() {
    return this._greetDelay;
  }
  set greetDelay(value: NumberInput) {
    this._greetDelay = coerceNumberProperty(value, 0);
  }
  private _greetDelay = 0;

  greet() {
    setTimeout(() => alert('Hello!'), this.greetDelay as number);
  }

  // `coerceElement` allows you to accept either an `ElementRef`
  // or a raw DOM node and to always return a DOM node.
  getElement(elementOrRef: ElementRef<HTMLElement> | HTMLElement): HTMLElement {
    return coerceElement(elementOrRef);
  }
}
