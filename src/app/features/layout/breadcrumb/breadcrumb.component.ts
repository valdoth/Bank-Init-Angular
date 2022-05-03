
  
import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breadcrumb } from 'src/app/@shared/models/breadcrumb.model';
import { Menu } from 'src/app/@shared/models/menu.model';
import { BreadcrumbService } from 'src/app/@shared/services/breadcrumb.service';
import { ServiceService } from 'src/app/@shared/services/service.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {
  @Input() breadCrumbs!:Breadcrumb[];
  @Input() menuIndex!:Menu;
  constructor(private service:ServiceService, public breadcrumb: BreadcrumbService) { }

  ngOnInit(): void {     
    this.breadCrumbs = this.breadcrumb.getBread();
  }
  onClick(index: number, event: any): void{
      event.stopPropagation();
      this.breadcrumb.delete(index);
  }

}