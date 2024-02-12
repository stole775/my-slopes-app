import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScheduleComponent } from './schedule/schedule.component';
import { StatsComponent } from './stats/stats.component';
import { ProfileInstructorEditComponent } from './profile-instructor-edit/profile-instructor-edit.component';
import { ProfileInstructorComponent } from './profile-instructor/profile-instructor.component';



@NgModule({
  declarations: [
    ScheduleComponent,
    StatsComponent,
    ProfileInstructorEditComponent,
    ProfileInstructorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class InstructorModule { }
