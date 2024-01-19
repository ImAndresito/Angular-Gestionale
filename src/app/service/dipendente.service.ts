import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap } from 'rxjs';
import { Dipendente } from '../interface/dipendente';

@Injectable({
  providedIn: 'root',
})
export class DipendenteService {
  private baseURL = 'http://localhost:8080/api/dipendenti';
  private cessatoURL = 'http://localhost:8080/api/dipendenti';
  constructor(private http: HttpClient) {}

  getDipByBuId(businessUnitId?: number): Observable<any[]> {
    const url = `${this.baseURL}/byBuId/${businessUnitId}`;
    return this.http.get<any[]>(url);
  }

  getDipById(id: number): Observable<Dipendente> {
    const url = `${this.baseURL}/${id}`;
    return this.http.get<Dipendente>(url);
  }

  addDipendente(dipendente: Dipendente): Observable<Dipendente> {
    return this.http.post<Dipendente>(`${this.baseURL}/aggiungi`, dipendente);
  }

  cessaDipendente(
    dipendenteId: number,
    isCessato: boolean
  ): Observable<Dipendente> {
    const url = `${this.cessatoURL}/${dipendenteId}`;
    return this.getDipById(dipendenteId).pipe(
      switchMap((dipendente: Dipendente) => {
        const updatedDipendente: Dipendente = {
          ...dipendente,
          cessato: isCessato,
        };
        return this.http.put<Dipendente>(url, updatedDipendente);
      })
    );
  }
}
