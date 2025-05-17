import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoercionComponent } from './coercion.component';

describe('CoercionComponent', () => {
  let component: CoercionComponent;
  let fixture: ComponentFixture<CoercionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoercionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoercionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
