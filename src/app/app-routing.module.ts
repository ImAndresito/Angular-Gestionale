import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DipendentiComponent } from './dashboard/business-unit/dipendenti/dipendenti.component';
import { BusinessUnitComponent } from './dashboard/business-unit/business-unit.component';
import { AggiungiDipendenteComponent } from './dashboard/aggiungi-dipendente/aggiungi-dipendente.component';
import { InfoDipendenteComponent } from './dashboard/business-unit/dipendenti/info-dipendente/info-dipendente.component';
import { StatoAttualeComponent } from './dashboard/business-unit/dipendenti/info-dipendente/stato-attuale/stato-attuale.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: BusinessUnitComponent,
  },
  {
    path: 'dip',
    component: DipendentiComponent,
  },
  {
    path: 'dip/info/:id',
    component: InfoDipendenteComponent,
  },
  {
    path: 'dip/info/:id/stato-attuale',
    component: StatoAttualeComponent,
  },
  {
    path: 'aggiungiDip',
    component: AggiungiDipendenteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
