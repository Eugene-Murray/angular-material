import { CdkAccordionModule } from '@angular/cdk/accordion';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion',
  imports: [CdkAccordionModule],
  templateUrl: './accordion.component.html',
  styleUrl: './accordion.component.scss'
})
export class AccordionComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
}
