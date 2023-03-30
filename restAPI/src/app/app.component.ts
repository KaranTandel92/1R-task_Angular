import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restAPI';

  id: any;
  username: any;
  breath: any;
  age: any;

  getData(data: any) {
    this.id = data.id;
    this.username = data.username;
    this.breath = data.breath;
    this.age = data.age
  }
}
