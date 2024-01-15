import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DipendentiComponent } from './dashboard/business-unit/dipendenti/dipendenti.component';
import { BusinessUnitComponent } from './dashboard/business-unit/business-unit.component';
import { FormAggiungiDipendenteComponent } from './dashboard/form-aggiungi-dipendente/form-aggiungi-dipendente.component';

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
    path: 'aggiungiDip',
    component: FormAggiungiDipendenteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
