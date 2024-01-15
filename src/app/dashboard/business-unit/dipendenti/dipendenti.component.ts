import { ActivatedRoute } from '@angular/router';
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
    private route: ActivatedRoute
  ) {}

  private getDipendenteByBuId() {
    this.route.queryParams.subscribe((params) => {
      this.selectedBusinessUnitId = params['buId'];
      this.dipendenteService
        .getDipendentiByBusinessUnit(this.selectedBusinessUnitId)
        .subscribe((data) => {
          this.dipendenti = data;
        });
    });
  }

  ngOnInit() {
    this.getDipendenteByBuId();
  }
}
