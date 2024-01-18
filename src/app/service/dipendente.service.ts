import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dipendente } from '../interface/dipendente';

@Injectable({
  providedIn: 'root',
})
export class DipendenteService {
  private baseURL = 'http://localhost:8080/api/dipendenti';
  private getByIdURL = 'http://localhost:8080/dipendente';
  private addDip = 'http://localhost:8080/add/dipendente';
  // private deleteURL = 'http://localhost:8080/delete/dip';

  constructor(private http: HttpClient) {}

  getDipByBuId(businessUnitId?: number): Observable<any[]> {
    const url = `${this.baseURL}/byBuId/${businessUnitId}`;
    return this.http.get<any[]>(url);
  }

  getDipById(id: number): Observable<Dipendente> {
    const url = `${this.getByIdURL}/${id}`;
    return this.http.get<Dipendente>(url);
  }

  addDipendente(dipendente: Dipendente): Observable<Dipendente> {
    // Convert the single dipendente object into an array
    const dipendenteArray: Dipendente[] = [dipendente];

    const url = this.addDip;
    return this.http.post<Dipendente>(url, dipendenteArray);
  }

  cessaDipendente(dipendenteId: number): Observable<Dipendente> {
    const url = `${this.baseURL}/${dipendenteId}`;
    return this.http.put<Dipendente>(url, null);
  }

  // deleteDipendente(dipendenteId: number): Observable<void> {
  //   const url = `${this.deleteURL}/${dipendenteId}`;
  //   return this.http.delete<void>(url);
  // }
}
