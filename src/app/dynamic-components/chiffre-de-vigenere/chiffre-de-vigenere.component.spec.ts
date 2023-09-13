import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiffreDeVigenereComponent } from './chiffre-de-vigenere.component';

describe('ChiffreDeVigenereComponent', () => {
  let component: ChiffreDeVigenereComponent;
  let fixture: ComponentFixture<ChiffreDeVigenereComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChiffreDeVigenereComponent]
    });
    fixture = TestBed.createComponent(ChiffreDeVigenereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
