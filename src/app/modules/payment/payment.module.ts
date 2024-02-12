import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentOptionsComponent } from './modules/payment/payment-options/payment-options.component';
import { PaymentDetailsComponent } from './modules/payment/payment-details/payment-details.component';
import { PaymentConfirmationComponent } from './modules/payment/payment-confirmation/payment-confirmation.component';



@NgModule({
  declarations: [
    PaymentOptionsComponent,
    PaymentDetailsComponent,
    PaymentConfirmationComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaymentModule { }
