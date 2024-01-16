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
          this.dipendenti = data;
        });
    });
  }

  deleteDipendente(dipendenteId: number): void {
    this.dipendenteService.deleteDipendente(dipendenteId).subscribe(
      () => this.getDipendenteByBuId(),
      (error) => console.error('Error: ', error)
    );
  }

  getDipById(id: number): void {
    this.dipendenteService.getDipById(id).subscribe(
      (dipendente) => {
        this.router.navigate(['/dip/info', dipendente.id], {
          state: { dipendente },
        });
      },
      (error) => {
        console.error('Error: ', error);
      }
    );
  }
}
