import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router, ParamMap, Route } from '@angular/router';

@Component({
  selector: 'app-employee-contact',
  templateUrl: './employee-contact.component.html',
  styleUrls: ['./employee-contact.component.css']
})
export class EmployeeContactComponent implements OnInit {
  private clientID: any;
  private displayId: any;
  private employees: any;
  public clientcontact: any;

  constructor(
    private emp_service: EmployeeService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>
      // tslint:disable-next-line:radix
      this.clientID = parseInt(params.get('id')));
      this.displayEmployeeDetails(this.clientID);
  }
  displayEmployeeDetails(employeeID) {
    this.emp_service.getEmployeeDetail().subscribe(
      response => {
        this.displayId = employeeID - 1;
        this.employees = response;
        this.clientcontact = this.employees[this.displayId];
      });
    }
}
