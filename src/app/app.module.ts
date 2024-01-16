import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BusinessUnitComponent } from './dashboard/business-unit/business-unit.component';
import { DipendentiComponent } from './dashboard/business-unit/dipendenti/dipendenti.component';
import { HttpClientModule } from '@angular/common/http';
import { AggiungiDipendenteComponent } from './dashboard/aggiungi-dipendente/aggiungi-dipendente.component';
import { InfoDipendenteComponent } from './dashboard/business-unit/dipendenti/info-dipendente/info-dipendente.component';
import { StatoAttualeComponent } from './dashboard/business-unit/dipendenti/info-dipendente/stato-attuale/stato-attuale.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BusinessUnitComponent,
    DipendentiComponent,
    AggiungiDipendenteComponent,
    InfoDipendenteComponent,
    StatoAttualeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
