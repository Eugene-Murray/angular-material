import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomSheetOverviewExampleComponent } from './bottom-sheet-overview-example.component';

describe('BottomSheetOverviewExampleComponent', () => {
  let component: BottomSheetOverviewExampleComponent;
  let fixture: ComponentFixture<BottomSheetOverviewExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomSheetOverviewExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomSheetOverviewExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
