import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessUnit } from 'src/app/interface/business-unit';
import { DipendenteService } from 'src/app/service/dipendente.service';

@Component({
  selector: 'app-business-unit',
  templateUrl: './business-unit.component.html',
  styleUrls: ['./business-unit.component.css'],
})
export class BusinessUnitComponent implements OnInit {
  selectedBusinessUnit: number | undefined;
  dipendenti!: any[];
  businessUnits: BusinessUnit[] = [
    {
      id: 1,
      name: 'DESIGN',
      image: '/assets/img/design.png',
      alt: 'design',
      utileMensile: '',
      margine: '',
    },
    {
      id: 2,
      name: 'ICT',
      image: '/assets/img/ict.png',
      alt: 'ict',
      utileMensile: '',
      margine: '',
    },
    {
      id: 3,
      name: 'INGEGNERIA',
      image: '/assets/img/ingegneria.png',
      alt: 'ingegneria',
      utileMensile: '',
      margine: '',
    },
    {
      id: 4,
      name: 'SIEE',
      image: '/assets/img/siee.png',
      alt: 'ict',
      utileMensile: '',
      margine: '',
    },
  ];

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
        .getDipByBuIdService(this.selectedBusinessUnit)
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
