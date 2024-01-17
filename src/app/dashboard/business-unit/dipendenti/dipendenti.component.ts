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
  selectedBusinessUnitId: number | undefined;
  showCessatoOnly: boolean = true; // Flag to determine whether to display only 'Cessato' dipendenti
  isButtonDisabled: boolean = false;
  isButtonHidden: boolean = false;

  constructor(
    private dipendenteService: DipendenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.getDipendenteByBuId();
  }

  getDipendenteByBuId() {
    this.route.queryParams.subscribe((params) => {
      this.selectedBusinessUnitId = params['buId'];
      this.dipendenteService
        .getDipendentiByBusinessUnit(this.selectedBusinessUnitId)
        .subscribe((data) => {
          // Filter dipendenti based on isCessato property and the showCessatoOnly flag
          this.dipendenti = this.showCessatoOnly
            ? data.filter((dipendente) => dipendente.isCessato === true)
            : data.filter((dipendente) => dipendente.isCessato !== true);
        });
    });
  }

  // deleteDipendente(dipendenteId: number): void {
  //   this.dipendenteService
  //     .deleteDipendente(dipendenteId)
  //     .subscribe(() => this.getDipendenteByBuId());
  // }

  cestinaDipendente(dipendente: Dipendente): void {
    // Pass the dipendente.id as an argument to cestinaDipendente method
    this.dipendenteService
      .cestinaDipendente(dipendente.id)
      .subscribe(() => this.getDipendenteByBuId());
  }

  getDipById(id: number): void {
    this.dipendenteService.getDipById(id).subscribe((dipendente) => {
      this.router.navigate(['/dip/info', dipendente.id], {
        state: { dipendente },
      });
    });
  }

  toggleCessatoDisplay(): void {
    this.isButtonDisabled = true; // Disable the button while fetching data

    // Toggle the flag to switch between displaying only 'Cessato' and displaying all dipendenti
    this.showCessatoOnly = !this.showCessatoOnly;
    // Refresh dipendenti based on the new filter
    this.getDipendenteByBuId();
  }
}
