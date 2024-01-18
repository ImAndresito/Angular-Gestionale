import { Component } from '@angular/core';
import { Dipendente } from 'src/app/interface/dipendente';
import { DipendenteService } from 'src/app/service/dipendente.service';

@Component({
  selector: 'app-aggiungi-dipendente',
  templateUrl: './aggiungi-dipendente.component.html',
  styleUrls: ['./aggiungi-dipendente.component.css'],
})
export class AggiungiDipendenteComponent {
  newDipendente: Partial<Dipendente> = {};

  businessUnits: { id: number; nome: string }[] = [
    { id: 1, nome: 'ICT' },
    { id: 2, nome: 'SIEE' },
    { id: 3, nome: 'DESIGN' },
    { id: 4, nome: 'INGEGNERIA' },
    { id: 5, nome: 'STAFF' },
  ];

  constructor(private dipendenteService: DipendenteService) {}

  aggiungiDipendente() {
    this.dipendenteService
      .addDipendente(this.newDipendente as Dipendente)
      .subscribe((response) => {
        console.log('Dipendente aggiunto con successo:', response);
      });
  }
}
