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

  constructor() { }

  ngOnInit() {
  }
  greet() {
    this.name = prompt('Name', '');
    this.surname = prompt('Surname', '');
    this.fullname = this.name + ' ' + this.surname;
    if (this.fullname != null) {
      this.title = 'welcome ' + this.fullname + ' to big cheeze restaurant';
    }
  }

}
