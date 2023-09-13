import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsGeneratorComponent } from './forms-generator.component';

describe('FormsGeneratorComponent', () => {
  let component: FormsGeneratorComponent;
  let fixture: ComponentFixture<FormsGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormsGeneratorComponent]
    });
    fixture = TestBed.createComponent(FormsGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
