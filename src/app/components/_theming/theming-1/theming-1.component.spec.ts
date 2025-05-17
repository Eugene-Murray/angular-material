import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Theming1Component } from './theming-1.component';

describe('Theming1Component', () => {
  let component: Theming1Component;
  let fixture: ComponentFixture<Theming1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Theming1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Theming1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
