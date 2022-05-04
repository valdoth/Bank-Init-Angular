import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-loan-create',
  templateUrl: './loan-create.component.html',
  styleUrls: ['./loan-create.component.scss']
})
export class LoanCreateComponent implements OnInit {
  public date: Date = new Date();
  formulaire: FormGroup;

  constructor(private forms: FormBuilder) {
    this.formulaire = this.forms.group({
      "agent": [null, Validators.required],
      "montant": [5000, Validators.required],
      "pourcentage":[0, Validators.required],
      "date_prêt": [this.date.toLocaleDateString(), Validators.required],
      "date_remboursement": [null, Validators.required],
      "mode_remboursement": [null, Validators.required],
      "mode_paiement_capitale": [null, Validators.required],
      "mode_paiement_intérêt": [null, Validators.required],
      "comment": [null, Validators.required]
    })
   }

   get formControl():any {
     return this.formulaire.controls;
   }

  ngOnInit(): void {
  }

  onSubmit(formulaire:FormGroup) {
    console.log(formulaire)
  }

}
