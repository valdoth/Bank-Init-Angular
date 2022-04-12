import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLoanRoutingModule } from './page-loan-routing.module';
import { LoanModule } from '../../features/loan/loan.module';
import { PageLoanComponent } from './page-loan.component';


@NgModule({
  declarations: [
    PageLoanComponent
  ],
  imports: [
    CommonModule,
    PageLoanRoutingModule,
    LoanModule
  ]
})
export class PageLoanModule { }
