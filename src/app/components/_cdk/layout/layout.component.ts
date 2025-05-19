import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, DestroyRef, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-layout',
  imports: [NavComponent],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent implements OnInit{
  message = 'Default message';

  constructor(private breakpointObserver: BreakpointObserver, private destroyRef: DestroyRef) {}

  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Handset])
      .subscribe(result => {
        this.message = result.matches ? 'Handset view' : 'Desktop view';
      });
  }

}
