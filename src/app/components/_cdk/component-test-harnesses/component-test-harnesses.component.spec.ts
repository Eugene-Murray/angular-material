import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentTestHarnessesComponent } from './component-test-harnesses.component';

describe('ComponentTestHarnessesComponent', () => {
  let component: ComponentTestHarnessesComponent;
  let fixture: ComponentFixture<ComponentTestHarnessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComponentTestHarnessesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentTestHarnessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
