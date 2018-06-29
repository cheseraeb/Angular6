import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-personal',
  templateUrl: './employee-personal.component.html',
  styleUrls: ['./employee-personal.component.css']
})
export class EmployeePersonalComponent implements OnInit {
  private clientID: any;
  private displayId: any;
  private employees: any;
  public found: any;
  public emppersonal: any;

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
        this.emppersonal = this.employees[this.displayId];
        if (this.emppersonal.postal_code == null) {
          this.emppersonal.postal_code = 'Postal code not provided';
          this.found = 'red';
        } else {
          this.found = 'inherit';
        }
      });
    }
}
