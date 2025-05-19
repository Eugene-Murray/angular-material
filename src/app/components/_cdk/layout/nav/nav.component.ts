import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { CommonModule } from '@angular/common';
import { Component, DestroyRef, ElementRef } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-nav',
  imports: [CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  protected links = [
    'Home', 
    'Product', 
    'Blog', 
    'About', 
    'Contact', 
    'Support', 
    'Login', 
    'Join'
  ];
  protected isVisible = false;
  protected currentRange?: 'Small' | 'Medium' | 'Large';

  constructor(private breakpointObserver: BreakpointObserver,
              private destroyRef: DestroyRef,
              private elementRef: ElementRef) {
  }

  ngOnInit() {
    const breakpoint = getComputedStyle(this.elementRef.nativeElement).getPropertyValue('--breakpointForMenu');
    this.breakpointObserver.observe(`(max-width: ${breakpoint})`)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(state => {
        if (!state.matches) {
          this.isVisible = false;
        }
      });

    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Medium, Breakpoints.Large])
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        if (this.breakpointObserver.isMatched(Breakpoints.Small)) {
          this.currentRange = 'Small';
        }
        if (this.breakpointObserver.isMatched(Breakpoints.Medium)) {
          this.currentRange = 'Medium';
        }
        if (this.breakpointObserver.isMatched(Breakpoints.Large)) {
          this.currentRange = 'Large';
        }
      });
  }
}
