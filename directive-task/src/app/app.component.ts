import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directive-task';

  public student = [
    { id: 1, name: 'Karan', email: 'karan@gmail.com', num: 99985, text: true },
    { id: 2, name: 'Micheljackson', email: 'Micheljackson@gmail.com', num: 88985, text: false },
    { id: 3, name: 'Terense', email: 'Terense@gmail.com', num: 77985, text: true },
    { id: 4, name: 'Dharmesh', email: 'Dharmesh@gmail.com', num: 77985, text: true },
    { id: 5, name: 'Shakti', email: 'Shakti@gmail.com', num: 77985, text: false },
    { id: 6, name: 'Raghav', email: 'Raghav@gmail.com', num: 77985, text: true }
  ]

  public key: any = Object.keys(this.student[0]);

  // public value: any = Object.values(this.student);

  public day = ['sunday', 'monday', 'tuesday', 'wednesday', 'thirsday', 'friday', 'saturday'];

  dayOnly: string = "";

  weekOff =
    { 'background-color': 'red', 'padding': '10px', 'text-align': 'center', 'color': 'white', 'border-radius': '8px' }

}
