import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url = '/assets/data/employee.json';
  constructor(private http: HttpClient) {}


  getEmployees(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this._url).catch(this.errorHandler);
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || 'Server error');
  }
  getEmployeeDetail(id): Observable<IEmployee[]> {
    let params = new HttpParams();
    params = params.append('id', id);
    return this.http
      .get<IEmployee[]>(this._url, {
        params: params
      })

      .catch(this.errorHandler);
  }
}
