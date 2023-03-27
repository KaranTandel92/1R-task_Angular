import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'changeDetection';

  public customerName: string = 'Karan';
  public newObject = {
    id: 101, email: 'karan@gmail.com'
  }


  changeName() {
    this.customerName = 'Hiren';
  }

  changeObject() {
    this.newObject.email = 'hiren@yahoo.in';
  }

}
