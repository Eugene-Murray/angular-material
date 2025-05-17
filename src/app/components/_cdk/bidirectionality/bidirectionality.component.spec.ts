import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BidirectionalityComponent } from './bidirectionality.component';

describe('BidirectionalityComponent', () => {
  let component: BidirectionalityComponent;
  let fixture: ComponentFixture<BidirectionalityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BidirectionalityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BidirectionalityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
