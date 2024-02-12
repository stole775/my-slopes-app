import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileInstructorEditComponent } from './profile-instructor-edit.component';

describe('ProfileInstructorEditComponent', () => {
  let component: ProfileInstructorEditComponent;
  let fixture: ComponentFixture<ProfileInstructorEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileInstructorEditComponent]
    });
    fixture = TestBed.createComponent(ProfileInstructorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
