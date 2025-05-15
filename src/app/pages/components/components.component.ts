import {Component} from '@angular/core';
import { AutocompleteComponent } from "../../components/autocomplete/autocomplete.component";

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrl: './components.component.scss',
  imports: [AutocompleteComponent]
})
export class ComponentsComponent {

}
