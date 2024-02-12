import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipmentManagementComponent } from './equipment-management/equipment-management.component';
import { InstructorManagementComponent } from './instructor-management/instructor-management.component';
import { AllOffersComponent } from './all-offers/all-offers.component';
import { AddOffersComponent } from './add-offers/add-offers.component';
import { ReservationManagementComponent } from './reservation-management/reservation-management.component';



@NgModule({
  declarations: [
    EquipmentManagementComponent,
    InstructorManagementComponent,
    AllOffersComponent,
    AddOffersComponent,
    ReservationManagementComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SchoolModule { }
