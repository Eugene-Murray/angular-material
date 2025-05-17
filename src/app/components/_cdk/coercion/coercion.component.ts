import { Component } from '@angular/core';
import { CoercionButtonDirective } from "./coercion-button.directive";

@Component({
  selector: 'app-coercion',
  imports: [CoercionButtonDirective],
  templateUrl: './coercion.component.html',
  styleUrl: './coercion.component.scss'
})
export class CoercionComponent {

}
