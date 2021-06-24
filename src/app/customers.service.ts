import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = "http://localhost:8090/api/customers";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(apiUrl);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${apiUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(apiUrl, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${apiUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${apiUrl}/${id}`);
  }

}
