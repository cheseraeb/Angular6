import { EmployeeService } from './../employee.service';
import {
  Component,
  OnInit
} from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees = [];
  errorMsg;
  selectedID;
  constructor(private _employeeservice: EmployeeService,
              private router: Router,
              private route: ActivatedRoute) {}

  ngOnInit() {
    this._employeeservice.getEmployees().subscribe((data) => this.employees = data,
                                                  error => this.errorMsg = error);
    this.route.paramMap.subscribe((params: ParamMap) =>
     // tslint:disable-next-line:radix
    this.selectedID = parseInt(params.get('id')));
  }
  onSelect(employee) {
    this.router.navigate(['/employeeDetail', employee.employee_id]);
  }
  isSelected(employee) {
    return employee.employee_id === this.selectedID;
  }

}
