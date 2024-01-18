import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BusinessUnitService {
  baseUrl: string = 'http://localhost:8080/api/business-units';
  url!: string;

  constructor(private http: HttpClient) {}

  getBusinessUnit(): Observable<any> {
    this.url = `${this.baseUrl}`;
    return this.http.get<any>(this.url);
  }

  getBusinessUnitExceptStaff(): Observable<any> {
    this.url = `${this.baseUrl}/all-except-staff`;
    return this.http.get<any>(this.url);
  }
}
