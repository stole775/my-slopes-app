import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserManagementComponent } from './user-management/user-management.component';
import { ContentModerationComponent } from './content-moderation/content-moderation.component';
import { AnalyticsComponent } from './analytics/analytics.component';



@NgModule({
  declarations: [
    UserManagementComponent,
    ContentModerationComponent,
    AnalyticsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
