import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  constructor() { }



  public employeeData: any;
  public newdata: any;

  employeData = [
    { id: 1, name: 'Karan', email: 'karan@gmail.com', password: 'xxxxxxxxx', address: 'Dungri', Action: "" },
    { id: 2, name: 'Viren', email: 'viren@gmail.com', password: 'xxxxxxxxx', address: 'Malvan' },
    { id: 3, name: 'Raj', email: 'raj@gmail.com', password: 'xxxxxxxxx', address: 'Valsad' },
    { id: 4, name: 'Kanniya', email: 'kanniya@gmail.com', password: 'xxxxxxxxx', address: 'Vapi' },
    { id: 5, name: 'Ashish', email: 'ashish@gmail.com', password: 'xxxxxxxxx', address: 'Pune' },
    { id: 6, name: 'sagar', email: 'sagar@gmail.com', password: 'xxxxxxxxx', address: 'Bilimora' },
    { id: 7, name: 'Deep', email: 'deep@gmail.com', password: 'xxxxxxxxx', address: 'Bigri' },
  ]

  ngOnInit(): void {
    this.newdata = Object.keys(this.employeData[0]);
  }


}
