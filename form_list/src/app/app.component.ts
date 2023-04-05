import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form_list';

  id: any;
  name: any;
  age: any;
  department: any;
  description: any;


  getNewEmployeeData(employeeDetails: any) {
    this.id = employeeDetails.id;
    this.name = employeeDetails.name;
    this.age = employeeDetails.age;
    this.department = employeeDetails.department;
    this.description = employeeDetails.description
    console.log(this.id);

  }

}
