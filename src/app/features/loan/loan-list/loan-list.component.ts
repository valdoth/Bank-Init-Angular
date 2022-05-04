import { Component, Input, OnInit } from '@angular/core';

import data from 'src/app/@shared/data/list';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss']
})
export class LoanListComponent implements OnInit {

  public list;
  // Pagination parameters.
  p: Number = 1;
  count: Number = 5;

  constructor() {
    console.log(data);
    this.list = data;
  }

  ngOnInit(): void {
  }

}
