import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNotificationsComponent } from './user-notifications.component';

describe('UserNotificationsComponent', () => {
  let component: UserNotificationsComponent;
  let fixture: ComponentFixture<UserNotificationsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserNotificationsComponent]
    });
    fixture = TestBed.createComponent(UserNotificationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
