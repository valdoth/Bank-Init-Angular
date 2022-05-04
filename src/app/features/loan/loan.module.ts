import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoanCreateComponent } from './loan-create/loan-create.component';
import { LoanListComponent } from './loan-list/loan-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoanCreateComponent,
    LoanListComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports : [
    LoanCreateComponent,
    LoanListComponent
  ]
})
export class LoanModule { }
