import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-ripple',
  imports: [MatCheckboxModule, FormsModule, MatFormFieldModule, MatInputModule, MatRippleModule],
  templateUrl: './ripple.component.html',
  styleUrl: './ripple.component.scss'
})
export class RippleComponent {
centered = false;
  disabled = false;
  unbounded = false;

  radius: number = 0;
  color: string = '';
}
