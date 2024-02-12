import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileUserComponent } from './profile-user/profile-user.component';
import { ProfileUserEditComponent } from './profile-user-edit/profile-user-edit.component';
import { UserBookingksComponent } from './user-bookingks/user-bookingks.component';
import { UserNotificationsComponent } from './user-notifications/user-notifications.component';



@NgModule({
  declarations: [
    ProfileUserComponent,
    ProfileUserEditComponent,
    UserBookingksComponent,
    UserNotificationsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
