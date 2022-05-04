import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { PageLayoutComponent } from './page-layout.component';
import { LoanModule } from '../../features/loan/loan.module';


@NgModule({
  declarations: [
    PageLayoutComponent,
  ],
  imports: [
    CommonModule,
    PageLayoutRoutingModule,
    LoanModule,
  ]
})
export class PageLayoutModule { }
