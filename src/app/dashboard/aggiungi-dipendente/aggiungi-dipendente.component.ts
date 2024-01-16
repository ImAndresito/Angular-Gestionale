import { Component } from '@angular/core';
import { Dipendente } from 'src/app/interface/dipendente';
import { DipendenteService } from 'src/app/service/dipendente.service';

@Component({
  selector: 'app-aggiungi-dipendente',
  templateUrl: './aggiungi-dipendente.component.html',
  styleUrls: ['./aggiungi-dipendente.component.css'],
})
export class AggiungiDipendenteComponent {
  newDipendente: Dipendente = {
    id: 0,
    nome: '',
    cognome: '',
    dataAssunzione: '',
    businessUnit: { id: 0, nome: '' },
    email: '',
    codiceFiscale: '',
    dataNascita: '',
  };
  businessUnits: { id: number; nome: string }[] = [
    { id: 1, nome: 'DESIGN' },
    { id: 2, nome: 'ICT' },
    { id: 3, nome: 'INGEGNERIA' },
    { id: 4, nome: 'SIEE' },
  ];

  constructor(private dipendenteService: DipendenteService) {}

  aggiungiDipendente() {
    this.dipendenteService
      .addDipendente(this.newDipendente)
      .subscribe((response) => {
        console.log('Dipendente aggiunto con successo:', response);
      });
  }
}
