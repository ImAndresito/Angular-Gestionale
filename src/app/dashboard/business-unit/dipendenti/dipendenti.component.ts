import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Dipendente } from 'src/app/interface/dipendente';
import { DipendenteService } from 'src/app/service/dipendente.service';

@Component({
  selector: 'app-dipendenti',
  templateUrl: './dipendenti.component.html',
  styleUrls: ['./dipendenti.component.css'],
})
export class DipendentiComponent implements OnInit {
  dipendenti: Dipendente[] = [];
  selectedBusinessUnitId!: number;
  showOnlyCessati: boolean = true;
  isButtonHidden: boolean = false;

  // Importo le cose necessarie.
  constructor(
    private dipendenteService: DipendenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  // Avvio la funzione appena il componente viene caricato.
  ngOnInit() {
    this.getDipByBu();
  }

  // Mando in display i dipendenti basandomi sulla loro businessUnit ID.
  getDipByBu() {
    //   this.route.queryParams.subscribe((params) : Questa parte si sottoscrive a modifiche nei parametri di query della route corrente. Quando i parametri di query cambiano (ad esempio, quando si naviga verso questa route o quando i parametri cambiano dinamicamente), la funzione di callback fornita viene eseguita.
    this.route.queryParams.subscribe((params) => {
      // this.selectedBusinessUnitId = params['buId']: Estrae il valore del parametro di query 'buId' dall'oggetto params e lo assegna alla proprietà selectedBusinessUnitId.
      this.selectedBusinessUnitId = params['buId'];

      // this.dipendenteService.getDipByBuIdService(this.selectedBusinessUnitId).subscribe((data): Chiama un metodo del servizio, in questo caso "getDipByBuIdService" per recuperare l'elenco dei dipendenti in base a "selectedBusinessUnitId" fornito. Il risultato viene ottenuto nella variabile data.
      this.dipendenteService
        .getDipByBuIdService(this.selectedBusinessUnitId)

        // Il blocco subscribe all'interno di questa parte gestisce il risultato (data). Filtra i dipendenti in base alla proprietà isCessato e alla variabile showOnlyCessati.
        // Se showOnlyCessati è true, filtra solo quei dipendenti in cui isCessato è true. In caso contrario, filtra i dipendenti in cui isCessato non è true (essenzialmente, dove isCessato è false o undefined).
        .subscribe((data) => {
          // Filtro i dipendenti basandomi sulla loro propietà isCessato e sulla variabile showOnlyCessati
          this.dipendenti = this.showOnlyCessati
            ? data.filter((dipendente) => dipendente.isCessato === true)
            : data.filter((dipendente) => dipendente.isCessato !== true);
        });
    });
  }
  // Questa funzione sembra far parte di un componente o servizio in un'applicazione Angular, dove viene utilizzata per recuperare e visualizzare un elenco filtrato di dipendenti in base all'ID dell'unità aziendale e al flag showOnlyCessati.

  cestinaDipendente(dipendente: Dipendente): void {
    // Pass the dipendente.id as an argument to cestinaDipendente method
    this.dipendenteService
      .cessaDipendente(dipendente.id)
      .subscribe(() => this.getDipByBu());
  }

  getDipById(id: number): void {
    this.dipendenteService.getDipById(id).subscribe((dipendente) => {
      this.router.navigate(['/dip/info', dipendente.id], {
        state: { dipendente },
      });
    });
  }

  toggleCessatoDisplay(): void {
    // Toggle the flag to switch between displaying only 'Cessato' and displaying all dipendenti
    this.showOnlyCessati = !this.showOnlyCessati;
    // Refresh dipendenti based on the new filter
    this.getDipByBu();
  }

  // deleteDipendente(dipendenteId: number): void {
  //   this.dipendenteService
  //     .deleteDipendente(dipendenteId)
  //     .subscribe(() => this.getDipByBu());
  // }
}
