import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-employment-details',
  templateUrl: './employee-employment-details.component.html',
  styleUrls: ['./employee-employment-details.component.css']
})
export class EmployeeEmploymentDetailsComponent implements OnInit {
  private clientID: any;
  private displayId: any;
  private employees: any;
  public empemployment: any;

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
        this.empemployment = this.employees[this.displayId];
      });
    }

}
