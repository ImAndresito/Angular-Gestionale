import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DipendenteService } from 'src/app/service/dipendente.service';

@Component({
  selector: 'app-business-unit',
  templateUrl: './business-unit.component.html',
  styleUrls: ['./business-unit.component.css'],
})
export class BusinessUnitComponent {
  selectedBusinessUnit: number | undefined;
  dipendenti!: any[];

  constructor(
    private dipendenteService: DipendenteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.selectedBusinessUnit = 1;
    this.loadDipendenti();
  }

  loadDipendenti(): void {
    if (this.selectedBusinessUnit !== undefined) {
      this.dipendenteService
        .getDipendentiByBusinessUnit(this.selectedBusinessUnit)
        .subscribe((data) => {
          this.dipendenti = data;
        });
    }
  }

  onBusinessClicked(newBusinessClicked: number): void {
    this.selectedBusinessUnit = newBusinessClicked;
    this.loadDipendenti();
    this.router.navigate(['/dip'], {
      queryParams: { buId: newBusinessClicked },
    });
  }
}
