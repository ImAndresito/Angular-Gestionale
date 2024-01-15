import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DipendenteService {
  private baseURL = 'http://localhost:8080/dip';

  constructor(private http: HttpClient) {}

  getDipendentiByBusinessUnit(businessUnitId?: number): Observable<any[]> {
    const url = `${this.baseURL}/${businessUnitId}`;
    return this.http.get<any[]>(url);
  }
}
