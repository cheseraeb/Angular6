import { EmployeeService } from './../employee.service';
import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees = [];
  errorMsg;
  constructor(private _employeeservice: EmployeeService) {}

  ngOnInit() {
    this._employeeservice.getEmployees().subscribe(data => this.employees = data,
                                                  error => this.errorMsg = error);
  }

}
