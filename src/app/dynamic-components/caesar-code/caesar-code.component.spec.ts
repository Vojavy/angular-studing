import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaesarCodeComponent } from './caesar-code.component';

describe('CaesarCodeComponent', () => {
  let component: CaesarCodeComponent;
  let fixture: ComponentFixture<CaesarCodeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CaesarCodeComponent]
    });
    fixture = TestBed.createComponent(CaesarCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
