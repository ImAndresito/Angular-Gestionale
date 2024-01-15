import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BusinessUnitComponent } from './dashboard/business-unit/business-unit.component';
import { DipendentiComponent } from './dashboard/business-unit/dipendenti/dipendenti.component';
import { HttpClientModule } from '@angular/common/http';
import { FormAggiungiDipendenteComponent } from './dashboard/form-aggiungi-dipendente/form-aggiungi-dipendente.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BusinessUnitComponent,
    DipendentiComponent,
    FormAggiungiDipendenteComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
