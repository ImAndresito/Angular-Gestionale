import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DipendentiComponent } from './dashboard/business-unit/dipendenti/dipendenti.component';
import { BusinessUnitComponent } from './dashboard/business-unit/business-unit.component';

const routes: Routes = [
  {
    path: '',
    component: BusinessUnitComponent,
  },
  {
    path: 'dipendenti',
    component: DipendentiComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
