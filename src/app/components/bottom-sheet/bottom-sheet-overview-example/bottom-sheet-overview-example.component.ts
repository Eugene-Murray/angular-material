import { Component, inject } from '@angular/core';
import { MatBottomSheetModule, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-bottom-sheet-overview-example',
  imports: [MatListModule],
  templateUrl: './bottom-sheet-overview-example.component.html',
  styleUrl: './bottom-sheet-overview-example.component.scss'
})
export class BottomSheetOverviewExampleComponent {
  private _bottomSheetRef =
    inject<MatBottomSheetRef<BottomSheetOverviewExampleComponent>>(MatBottomSheetRef);

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
