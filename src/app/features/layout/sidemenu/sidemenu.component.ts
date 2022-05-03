import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Menu } from 'src/app/@shared/models/menu.model';
import { BreadcrumbService } from 'src/app/@shared/services/breadcrumb.service';
import { ServiceService } from 'src/app/@shared/services/service.service';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

  i!:number;
  @Input() sideMenus!: Menu[];
  @Input() menuByIndex!:Menu;
  constructor(private router:Router, private service:ServiceService, private breadcrumb: BreadcrumbService) { }

  ngOnInit(): void {
    this.i=0;
    this.sideMenus = this.service.getAllMenu();
  }
  onClick(index: number): void{
    this.i++;
    this.router.navigate([this.sideMenus[index].path]);
    this.menuByIndex = this.service.getMenu(index);
    this.breadcrumb.modify(this.menuByIndex, this.i);
  }

}
