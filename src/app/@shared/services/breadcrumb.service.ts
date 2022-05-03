import { Injectable } from '@angular/core';
import { Breadcrumb } from '../models/breadcrumb.model';
import { Menu } from '../models/menu.model';

@Injectable({
  providedIn: 'root'
})
export class BreadcrumbService {
  myBreadCrumbs:Breadcrumb[] =[
    {content: 'acceuil', path:''}
  ];
  getBread(): any[]{
    return this.myBreadCrumbs;
  }

  modify(menu: Menu, i: number): void{
    i===1? this.myBreadCrumbs.push(menu) : this.myBreadCrumbs.splice(1,1,menu);   
  }
  delete(index: number): void{
    this.myBreadCrumbs.splice(index+1);
  }  

  constructor() { }

}
