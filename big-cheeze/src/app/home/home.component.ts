import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title = 'welcome to big cheeze restaurant';
  public name: string;
  public surname: string;
  public fullname: string;
  public username = '' ;
  public password = '' ;
  public showPassword: boolean;
  public color = '';
  public colors = ['green', 'blue', 'yellow', 'purple'];

  constructor() { }

  ngOnInit() {
  }
  greet(event) {
    console.log(event);
    this.name = prompt('Name', '');
    this.surname = prompt('Surname', '');
    this.fullname = this.name + ' ' + this.surname;
    if (this.fullname != null) {
      this.title = 'welcome ' + this.fullname + ' to big cheeze restaurant';
    }
  }
  logDetails(value) {
    console.log(value);
  }
  showPwd(value) {
    this.showPassword = value;
  }
  assignColor(colorvalue) {
    this.color = colorvalue;
  }
}
