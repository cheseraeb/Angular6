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
  private isContact: boolean;
  private isPersonal: boolean;
  private isEmployment: boolean;

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
    this.initialId = this.clientID;
    this.displayEmployeeDetails(this.initialId);
    this.initializeBoolean();
  }
  goPrevious() {
    const previousid = this.clientID - 1;
    this.displayEmployeeDetails(previousid);
    this.routerlink.navigate(['/employeeDetail', previousid]);
    // this.routerlink.navigate([previousid], {relativeTo: this.route});
    this.initializeBoolean();
  }
  goNext() {
    const nextid = this.clientID + 1;
    this.displayEmployeeDetails(nextid);
    this.routerlink.navigate(['/employeeDetail', nextid]);
    this.initializeBoolean();
  }
  gotoEmployeelist() {
    const selectedID = this.clientID ? this.clientID : null;
    this.routerlink.navigate(['/employeelist', { id: selectedID }]);
    // this.routerlink.navigate(['../', { id: selectedID }], {relativeTo: this.route});
    this.initializeBoolean();
  }
  displayEmployeeDetails(employeeID) {
    this._employeeSrv.getEmployeeDetail().subscribe(
      response => {
        this.displayId = employeeID - 1;
        this.employees = response;
        this.employee = this.employees[this.displayId];
      });
  }
  showContact(route) {
    if (this.isContact) {
      this.openDetailpanelOrClose(false, '');
      this.isContact = false;
      return;
    }
    this.isEmployment = false;
    this.isPersonal = false;
    this.isContact = true;
    this.openDetailpanelOrClose(true, route);
  }
  showPersonal(route) {
    if (this.isPersonal) {
      this.openDetailpanelOrClose(false, '');
      this.isPersonal = false;
      return;
    }
    this.isEmployment = false;
    this.isPersonal = true;
    this.isContact = false;
    this.openDetailpanelOrClose(true, route);
  }
  showEmployment(route) {
    if (this.isEmployment) {
      this.openDetailpanelOrClose(false, '');
      this.isEmployment = false;
      return;
    }
    this.isEmployment = true;
    this.isPersonal = false;
    this.isContact = false;
    this.openDetailpanelOrClose(true, route);
  }
  openDetailpanelOrClose(open, directory) {
    if (open) {
      this.routerlink.navigate([directory, { id: this.clientID }], { relativeTo: this.route });
    } else {
      this.routerlink.navigate(['../', this.clientID], { relativeTo: this.route });
    }
  }
  initializeBoolean() {
    this.isContact = false;
    this.isPersonal = false;
    this.isEmployment = false;
  }
}
