import { Component, Input, OnInit } from '@angular/core';

import data from 'src/app/@shared/data/list';
import { IClientList } from 'src/app/@shared/models/list.model';

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

  public indexClient: number = 0;
  public _researchedClient: string = '';
  public searchedClients: IClientList[] = [];

  ngOnInit(): void {
    this.searchedClients = this.clients;
  }

  public get researchedClient(): string {
    return this._researchedClient;
  }

  public set researchedClient(client: string) {
    this._researchedClient = client;

    this.searchedClients = this.researchedClient ? this.foundClients(this.researchedClient) : this.clients;
  }

  private foundClients(clientFounded: string): IClientList[] {
    clientFounded = clientFounded.toLocaleLowerCase();

    const founded = this.clients.filter(
      (client: IClientList) => client.client.toLocaleLowerCase().indexOf(clientFounded) != -1
    );

    return founded;
  }
  
  public clients: IClientList[] = data;
}
