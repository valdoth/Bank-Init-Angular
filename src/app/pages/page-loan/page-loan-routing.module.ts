import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoanCreateComponent } from '../../features/loan/loan-create/loan-create.component';
import { LoanListComponent } from '../../features/loan/loan-list/loan-list.component';
import { PageLoanComponent } from './page-loan.component';

const routes: Routes = [
  {
    path:"create",
    component:LoanCreateComponent
  }, {
    path:"list",
    component:LoanListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLoanRoutingModule { }
