import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  employees = [];
  errorMsg;
  constructor(private _employeedetails: EmployeeService) { }

  ngOnInit() {
    this._employeedetails.getEmployees().subscribe(data => this.employees = data,
                                                    error => this.errorMsg = error);
  }

}
