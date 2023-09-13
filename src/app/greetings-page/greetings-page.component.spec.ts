import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingsPageComponent } from './greetings-page.component';

describe('GreetingsPageComponent', () => {
  let component: GreetingsPageComponent;
  let fixture: ComponentFixture<GreetingsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GreetingsPageComponent]
    });
    fixture = TestBed.createComponent(GreetingsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
