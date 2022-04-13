import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PageLayoutRoutingModule } from './page-layout-routing.module';
import { PageLayoutComponent } from './page-layout.component';
import { HeaderComponent } from 'src/app/features/layout/header/header.component';
import { LoanModule } from '../../features/loan/loan.module';
import { BreadcrumbComponent } from '../../features/layout/breadcrumb/breadcrumb.component';
import { SidemenuComponent } from 'src/app/features/layout/sidemenu/sidemenu.component';


@NgModule({
  declarations: [
    PageLayoutComponent,
    HeaderComponent,
    BreadcrumbComponent,
    SidemenuComponent
  ],
  imports: [
    CommonModule,
    PageLayoutRoutingModule,
    LoanModule,
  ]
})
export class PageLayoutModule { }
