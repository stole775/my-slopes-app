import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserBookingksComponent } from './user-bookingks.component';

describe('UserBookingksComponent', () => {
  let component: UserBookingksComponent;
  let fixture: ComponentFixture<UserBookingksComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserBookingksComponent]
    });
    fixture = TestBed.createComponent(UserBookingksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
