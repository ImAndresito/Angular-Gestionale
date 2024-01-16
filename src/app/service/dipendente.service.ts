import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dipendente } from '../interface/dipendente';

@Injectable({
  providedIn: 'root',
})
export class DipendenteService {
  private baseURL = 'http://localhost:8080/dip';
  private deleteURL = 'http://localhost:8080/delete/dip';
  private getByIdURL = 'http://localhost:8080/dipendente';

  constructor(private http: HttpClient) {}

  getDipendentiByBusinessUnit(businessUnitId?: number): Observable<any[]> {
    const url = `${this.baseURL}/${businessUnitId}`;
    return this.http.get<any[]>(url);
  }

  deleteDipendente(dipendenteId: number): Observable<void> {
    const url = `${this.deleteURL}/${dipendenteId}`;
    return this.http.delete<void>(url);
  }

  getDipById(id: number): Observable<Dipendente> {
    const url = `${this.getByIdURL}/${id}`;
    return this.http.get<Dipendente>(url);
  }
}
