import { OverlayModule } from '@angular/cdk/overlay';
import { Component } from '@angular/core';

@Component({
  selector: 'app-overlay',
  imports: [OverlayModule],
  templateUrl: './overlay.component.html',
  styleUrl: './overlay.component.scss'
})
export class OverlayComponent {
  isOpen = false;
}
