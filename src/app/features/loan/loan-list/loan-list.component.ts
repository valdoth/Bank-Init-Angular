import { Component, OnInit } from '@angular/core';
import { IClientList } from './client-list';

@Component({
  selector: 'app-loan-list',
  templateUrl: './loan-list.component.html',
  styleUrls: ['./loan-list.component.scss']
})
export class LoanListComponent implements OnInit {
  constructor() { }

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
  
  public clients: IClientList[] = [
    {
      client: 'RAHENJANA TOAVINA Toky',
      montant_pret: 500000,
      date_du_pret: '12 Janvier 2022',
      fin_du_contract: '15 Décembre 2023',
      montant_interne: 4000000,
      pourcentage: 3,
      mode_de_paiement: 'Liquide'
    },
    {
      client: 'ROKOTOMALALA Rotsy',
      montant_pret: 400000,
      date_du_pret: '24 Mars 2021',
      fin_du_contract: '30 Avril 2022',
      montant_interne: 5000000,
      pourcentage: 5,
      mode_de_paiement: 'Chèque'
    },
    {
      client: 'RANDRIANARIVONY Malala Nirina',
      montant_pret: 3000000,
      date_du_pret: '23 Décembre 2020',
      fin_du_contract: '4 Mai 2022',
      montant_interne: 50000000,
      pourcentage: 6,
      mode_de_paiement: 'Liquide'
    },
    {
      client: 'RANOROMAVO TIAVINA Ornella',
      montant_pret: 4500000,
      date_du_pret: '20 Février 2021',
      fin_du_contract: '20 Mars 2022',
      montant_interne: 5650000,
      pourcentage: 3,
      mode_de_paiement: 'Liquide'
    },
    {
      client: 'RAZOKY MAONTINA Be',
      montant_pret: 4050000,
      date_du_pret: '1 Juillet 2021',
      fin_du_contract: '26 Juin 2022',
      montant_interne: 5400500,
      pourcentage: 4,
      mode_de_paiement: 'Liquide'
    },
    {
      client: 'ANDONIRINA Manitra',
      montant_pret: 9450000,
      date_du_pret: '20 Août 2021',
      fin_du_contract: '20 Août 2022',
      montant_interne: 8970000,
      pourcentage: 8,
      mode_de_paiement: 'Chèque'
    },
    {
      client: 'RAMAROHEVITRA HENINTSOA Zo Mampionina',
      montant_pret: 4950000,
      date_du_pret: '12 Septembre 2021',
      fin_du_contract: '21 Décembre 2022',
      montant_interne: 6000000,
      pourcentage: 5,
      mode_de_paiement: 'Chèque'
    },
    {
      client: 'NOMENA FITIAVANA Iantsa',
      montant_pret: 7800000,
      date_du_pret: '14 Octobre 2021',
      fin_du_contract: '14 Janvier 2022',
      montant_interne: 3210000,
      pourcentage: 2,
      mode_de_paiement: 'Liquide'
    },
    {
      client: 'RAJAONINA Herizo Lova',
      montant_pret: 3433000,
      date_du_pret: '31 Novembre 2020',
      fin_du_contract: '2 Mai 2022',
      montant_interne: 6754000,
      pourcentage: 1,
      mode_de_paiement: 'Liquide'
    },
    {
      client: 'RAHELISOA Hendry',
      montant_pret: 8000000,
      date_du_pret: '13 Mai 2021',
      fin_du_contract: '14 Mars 2022',
      montant_interne: 9765000,
      pourcentage: 10,
      mode_de_paiement: 'Liquide'
    },
    {
      client: 'RAMAHALEO Gravy',
      montant_pret: 1500000,
      date_du_pret: '8 Mars 2019',
      fin_du_contract: '4 Juin 2020',
      montant_interne: 2311000,
      pourcentage: 0.6,
      mode_de_paiement: 'Chèque'
    }
  ];
}
