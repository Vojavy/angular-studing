import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMainContentComponent } from './app-main-content.component';

describe('AppMainContentComponent', () => {
  let component: AppMainContentComponent;
  let fixture: ComponentFixture<AppMainContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppMainContentComponent]
    });
    fixture = TestBed.createComponent(AppMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
