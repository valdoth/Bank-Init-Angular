import { Injectable, Input } from '@angular/core';
import { Menu } from "../models/menu.model"

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  @Input() menus:Menu[] = [
    {content:"dashboard", path:'dashboard'},
    {content:"liste des prets", path:'loan/list'},
    {content:"Enregistrer un nouveau pret", path:'loan/create'},
    {content:"calendrier de remboursement", path:'calendar'},
  ]
  constructor() { }
  getAllMenu(): Menu[]{
    // console.log(this.menus);
    return this.menus;
  }
  getMenu(index: number): Menu{
    // console.log(this.menus[index]);
    return this.menus[index];
  }
}
