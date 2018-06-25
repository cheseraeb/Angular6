import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

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
  public greetme: string;
  // Input fram parent
  // @Input('parentData') public Cheezename;
  @Input() public parentData;
  // For output you need Eventemitters
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.greetme = 'Hello ' + this.parentData;
  }
  fireEvent() {
    this.childEvent.emit('Heya Chheeeeeeezzzzzee');
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
