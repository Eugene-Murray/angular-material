import { FocusMonitor, FocusOrigin } from '@angular/cdk/a11y';
import { ChangeDetectorRef, Component, ElementRef, inject, NgZone, ViewChild } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-accessibility',
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './accessibility.component.html',
  styleUrl: './accessibility.component.scss'
})
export class AccessibilityComponent {
  focusMonitor = inject(FocusMonitor);
  private _cdr = inject(ChangeDetectorRef);
  private _ngZone = inject(NgZone);

  @ViewChild('monitored')
  monitoredEl!: ElementRef<HTMLElement>;

  origin = this.formatOrigin(null);

  ngAfterViewInit() {
    this.focusMonitor.monitor(this.monitoredEl).subscribe(origin =>
      this._ngZone.run(() => {
        this.origin = this.formatOrigin(origin);
        this._cdr.markForCheck();
      }),
    );
  }

  ngOnDestroy() {
    this.focusMonitor.stopMonitoring(this.monitoredEl);
  }

  formatOrigin(origin: FocusOrigin): string {
    return origin ? origin + ' focused' : 'blurred';
  }
}
