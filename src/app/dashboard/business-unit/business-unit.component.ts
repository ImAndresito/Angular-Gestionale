import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusinessUnit } from 'src/app/interface/business-unit';
import { Dipendente } from 'src/app/interface/dipendente';
import { BusinessUnitService } from 'src/app/service/business-unit.service';
import { DipendenteService } from 'src/app/service/dipendente.service';

@Component({
  selector: 'app-business-unit',
  templateUrl: './business-unit.component.html',
  styleUrls: ['./business-unit.component.css'],
})
export class BusinessUnitComponent {
  selectedBusinessUnit: number | undefined;
  dipendenti!: Dipendente[];

  businessUnits!: BusinessUnit[];

  constructor(
    private dipendenteService: DipendenteService,
    private businessUnitService: BusinessUnitService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBusinessUnit();
  }

  getBusinessUnit() {
    this.businessUnitService
      .getBusinessUnitExceptStaff()
      .subscribe((response) => {
        this.businessUnits = response;
      });
  }

  loadDipendenti() {
    if (this.selectedBusinessUnit !== undefined) {
      this.dipendenteService
        .getDipByBuId(this.selectedBusinessUnit)
        .subscribe((data) => {
          this.dipendenti = data;
        });
    }
  }

  onBusinessClicked(newBusinessClicked: number): void {
    this.selectedBusinessUnit = newBusinessClicked;
    this.router.navigate(['/dip'], {
      queryParams: { buId: newBusinessClicked },
    });
  }
}
