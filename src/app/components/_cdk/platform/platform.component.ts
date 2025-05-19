import { getSupportedInputTypes, Platform, supportsPassiveEventListeners, supportsScrollBehavior } from '@angular/cdk/platform';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-platform',
  imports: [],
  templateUrl: './platform.component.html',
  styleUrl: './platform.component.scss'
})
export class PlatformComponent {
  platform = inject(Platform);

  supportedInputTypes = Array.from(getSupportedInputTypes()).join(', ');
  supportsPassiveEventListeners = supportsPassiveEventListeners();
  supportsScrollBehavior = supportsScrollBehavior();
}
