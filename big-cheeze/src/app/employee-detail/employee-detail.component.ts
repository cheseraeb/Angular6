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
  private buttonShow: boolean;
  errorMsg;
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
    this.buttonShow = false;
  }
  goPrevious() {
    const previousid = this.clientID - 1;
    this.displayEmployeeDetails(previousid);
    this.routerlink.navigate(['/employeeDetail', previousid]);
    // this.routerlink.navigate([previousid], {relativeTo: this.route});
    this.buttonShow = false;
  }
  goNext() {
    const nextid = this.clientID + 1;
    this.displayEmployeeDetails(nextid);
    this.routerlink.navigate(['/employeeDetail' , nextid]);
    this.buttonShow = false;
  }
  gotoEmployeelist() {
    const selectedID = this.clientID ? this.clientID : null;
    this.routerlink.navigate(['/employeelist', { id: selectedID }]);
    // this.routerlink.navigate(['../', { id: selectedID }], {relativeTo: this.route});
  }
  displayEmployeeDetails(employeeID) {
    this._employeeSrv.getEmployeeDetail().subscribe(
      response => {
        this.displayId = employeeID - 1;
        this.employees = response;
        this.employee = this.employees[this.displayId];
      });
  }
  showDetails(directory_route) {
    if (!this.buttonShow) {
      this.routerlink.navigate([directory_route, {id: this.clientID}], {relativeTo: this.route});
      this.buttonShow = true;
    } else {
      this.routerlink.navigate(['../', this.clientID], {relativeTo: this.route});
      this.buttonShow = false;
    }
  }
}
