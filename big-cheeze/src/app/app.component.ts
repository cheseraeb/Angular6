import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public greetname = 'Cheeze101';
  // below variable will recieve event properties from home
  public message: string;
  // public DateTime = setInterval(this.showDate, 1000);
  public dateid;
  public date;

  call() {
    alert(this.message);
  }
  showDate() {
    this.dateid = document.getElementById('datetime');
    this.date = new Date();
    this.dateid.innerHTML = this.date;
  }
}
