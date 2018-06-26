import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url = '/assets/data/employee.json';

  constructor(private http: HttpClient) { }

  getEmployees(): Observable<IEmployee[]> {
     return this.http.get<IEmployee[]>(this._url);
  }
}
