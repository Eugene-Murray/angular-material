import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections',
  imports: [],
  templateUrl: './collections.component.html',
  styleUrl: './collections.component.scss',
})
export class CollectionsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const model = new SelectionModel(
      true, // multiple selection or not
      [2, 1, 3] // initial selected values
    );

    // select a value
    model.select(4);
    console.log(model.selected.length); //->  4

    // deselect a value
    model.deselect(4);
    console.log(model.selected.length); //->  3

    // toggle a value
    model.toggle(4);
    console.log(model.selected.length); //->  4

    // check for selection
    console.log(model.isSelected(4)); //-> true

    // sort the selections
    console.log(model.sort()); //-> [1,2,3,4]

    // listen for changes
    model.changed.subscribe((s) => console.log(s));
  }

  // Add any additional methods or properties as needed
}
