import { EmployeeService } from './../employee.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {
  clientID;
  employee;
  errorMsg;
  constructor(private route: ActivatedRoute,
              private _employeeSrv: EmployeeService) { }

  ngOnInit() {
    // tslint:disable-next-line:radix
    this.clientID = parseInt(this.route.snapshot.paramMap.get('id'));
    // this.clientID = id;
    // this._employeeSrv.getEmployeeDetail(this.clientID).subscribe(
    //   data => this.employee = data,
    //   error => this.errorMsg = error
    // );
    // console.log(this.employee);

  }

}
