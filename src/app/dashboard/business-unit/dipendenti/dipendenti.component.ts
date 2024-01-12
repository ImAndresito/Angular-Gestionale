import { HttpClient } from '@angular/common/http';
import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Dipendente } from 'src/app/interface/dipendente';

@Component({
  selector: 'app-dipendenti',
  templateUrl: './dipendenti.component.html',
  styleUrls: ['./dipendenti.component.css'],
})
export class DipendentiComponent {
  newDipendente: Dipendente[] = [];
  // dipendenti: Dipendente[] = [
  //   new Dipendente('Andres', 'Villa', '20-02-2024'),
  //   new Dipendente('Manuel', 'Villa', '20-02-2025'),
  //   new Dipendente('Mattia', 'Bosco', '20-02-2026'),
  //   new Dipendente('Antony', 'Rosello', '20-02-2027'),
  // ];

  constructor(private http: HttpClient, private router: Router) {}

  getURL = 'http://localhost:8080/api/dipendenti';

  getDipendenti(): Observable<Dipendente[]> {
    return this.http.get<Dipendente[]>(this.getURL);
  }

  private getDips() {
    this.getDipendenti().subscribe((data) => {
      this.newDipendente = data;
      console.log(this.newDipendente);
    });
  }

  ngOnInit() {
    this.getDips();
  }
}
