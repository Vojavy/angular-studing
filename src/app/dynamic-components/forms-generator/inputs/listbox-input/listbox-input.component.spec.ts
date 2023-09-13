import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListboxInputComponent } from './listbox-input.component';

describe('ListboxInputComponent', () => {
  let component: ListboxInputComponent;
  let fixture: ComponentFixture<ListboxInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListboxInputComponent]
    });
    fixture = TestBed.createComponent(ListboxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
