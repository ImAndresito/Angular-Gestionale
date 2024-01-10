import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BusinessUnitComponent } from './dashboard/business-unit/business-unit.component';
import { DipendentiComponent } from './dashboard/business-unit/dipendenti/dipendenti.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BusinessUnitComponent,
    DipendentiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
