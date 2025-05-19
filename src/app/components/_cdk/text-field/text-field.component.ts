import { TextFieldModule } from '@angular/cdk/text-field';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-text-field',
  imports: [MatFormFieldModule, MatInputModule, TextFieldModule, MatButtonModule],
  templateUrl: './text-field.component.html',
  styleUrl: './text-field.component.scss'
})
export class TextFieldComponent {
  firstNameAutofilled: boolean | undefined;
  lastNameAutofilled: boolean | undefined;
}
