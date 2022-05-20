import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { of, Observable, map, observable } from 'rxjs';

@Component({
  selector: 'app-loan-create',
  templateUrl: './loan-create.component.html',
  styleUrls: ['./loan-create.component.scss']
})
export class LoanCreateComponent implements OnInit {

  public date: Date = new Date();
  
  formulaire: FormGroup;

  submitted = false;

  usersFormulaire$:any;

  constructor(private forms: FormBuilder) {
    this.formulaire = this.forms.group({
      "responsable": [null, Validators.required],
      "client": [null, Validators.required],
      "montant": [null, Validators.required],
      "pourcentage":[null, Validators.required],
      "frequence": [null, Validators.required],
      "date_pret": [this.date.toLocaleDateString(), Validators.required],
      "date_remboursement": [null, Validators.required],
      "mode_remboursement": [null, Validators.required],
      "mode_paiement": [null, Validators.required],
      "comment": [null, Validators.required]
    })
   }

   get formControl():any {
     return this.formulaire.controls;
   }

  ngOnInit(): void {
  }

  onSubmit(formulaire:FormGroup) {
    this.submitted = true,

    console.log(JSON.stringify(this.formulaire.value, null))
  }
  
}
