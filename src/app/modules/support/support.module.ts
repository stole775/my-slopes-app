import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';
import { ContactComponent } from './contact/contact.component';



@NgModule({
  declarations: [
    FaqComponent,
    ContactComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SupportModule { }
