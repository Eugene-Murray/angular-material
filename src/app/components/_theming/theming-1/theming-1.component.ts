import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-theming-1',
  imports: [MatFormFieldModule, MatSelectModule],
  templateUrl: './theming-1.component.html',
  styleUrl: './theming-1.component.scss',
})
export class Theming1Component {
  changeTheme(theme: string) {
    document.body.className = theme;
  }
}
