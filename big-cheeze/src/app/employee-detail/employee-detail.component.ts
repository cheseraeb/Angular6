// import { IEmployee } from '../employee';
// import { Http } from '@angular/http';
// import { Observable } from 'rxjs';
import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';


@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  clientID;
  displayId;
  initialId;
  public employees = [];
  public employee: any;
  errorMsg;
  // public employee: any;
  constructor(private route: ActivatedRoute,
    private _employeeSrv: EmployeeService,
    private routerlink: Router) {
    this.employees = [];
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>
      // tslint:disable-next-line:radix
      this.clientID = parseInt(params.get('id')));
    // this._employeeSrv.getEmployeeDetail().subscribe(response => {this.employees =
    //   response as IEmployee[];
    //   console.log(response);
    //   }, error => this.errorMsg = <any> error);
    // console.log(this.employees);
    // this.employee = this.employees[1];
    // console.log(this.employee);
    // this._employeeSrv.getEmployeeDetail().subscribe(
    //   response => {
    //     this.employees = response as IEmployee[];
    //     console.log(this.employees);

    //     const employee = this.employees[0];
    //     console.log(employee);
    //   }, error => this.errorMsg = <any> error
    // );
    this.initialId = this.clientID;
    this.displayEmployeeDetails(this.initialId);
  }
  goPrevious() {
    const previousid = this.clientID - 1;
    this.displayEmployeeDetails(previousid);
    this.routerlink.navigate(['/employeeDetail', previousid]);
  }
  goNext() {
    const nextid = this.clientID + 1;
    this.displayEmployeeDetails(nextid);
    this.routerlink.navigate(['/employeeDetail', nextid]);
  }
  gotoEmployeelist() {
    const selectedID = this.clientID ? this.clientID : null;
    this.routerlink.navigate(['/employeelist', { id: selectedID }]);
  }
  displayEmployeeDetails(employeeID) {
    this._employeeSrv.getEmployeeDetail().subscribe(
      response => {
        this.displayId = employeeID - 1;
        this.employees = response;
        this.employee = this.employees[this.displayId];
        console.log(this.employee);
      });
  }

}
