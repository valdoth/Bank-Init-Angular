import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLayoutComponent } from './page-layout.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CalendarComponent } from '../calendar/calendar.component';

const routes: Routes = [
  {
    path: "",
    component: PageLayoutComponent
  } ,{
    path: "loan",
    loadChildren: () => import('../page-loan/page-loan.module')
      .then(module => module.PageLoanModule)
  }, {
    path: 'dashboard',
    component: DashboardComponent
  }, {
    path: 'calendar',
    component: CalendarComponent
  }, {
    path: 'not-found',
    component: PageNotFoundComponent
  }, {
    path: '**',
    redirectTo: 'not-found'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageLayoutRoutingModule { }
