import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Response } from '@angular/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
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
  // getEmployeeDetail(): Observable<IEmployee[]> {
  //   return this.http
  //     .get(this._url).map((response: Response) => {
  //       return <IEmployee[]> response.json();
  //     })

  //     .catch(this.errorJsonHandler);
  // }
  // getEmployeeDetail(): Observable<any> {
  //   return this.http
  //     .get(this._url).map(response => response);
  // }
  getEmployeeDetail(): Observable<any> {
    return this.http
      .get(this._url).map(response => response).
      catch(this.errorJsonHandler);
  }
  private errorJsonHandler(errorResponse: Response) {
    console.log(errorResponse.statusText);
    return Observable.throw(errorResponse.json().error || 'Server error');
}

}
