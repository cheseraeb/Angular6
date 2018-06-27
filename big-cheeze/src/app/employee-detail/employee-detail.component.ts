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
  // employee;
  // errorMsg;
  employees = [];
  errorMsg;
  employee: any;
  constructor(private route: ActivatedRoute,
              private _employeeSrv: EmployeeService,
              private routerlink: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) =>
      // tslint:disable-next-line:radix
    this.clientID = parseInt(params.get('id')));
  }
  goPrevious() {
    const previousid = this.clientID - 1;
    this.routerlink.navigate(['/employeeDetail', previousid]);
  }
  goNext() {
    const nextid = this.clientID + 1;
    this.routerlink.navigate(['/employeeDetail', nextid]);
  }

}
