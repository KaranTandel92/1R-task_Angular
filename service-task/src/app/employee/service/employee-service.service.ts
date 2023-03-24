import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService implements OnInit {

  public employeeData: any;

  constructor() { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');

    this.employeeData = [
      { 'id': 1, 'name': 'Karan', 'email': 'karan@gmail.com', 'password': 'xxxxxxxxx', 'Technology': "Frontend", 'address': 'Dungri', 'Action': "" },
      { 'id': 2, 'name': 'Viren', 'email': 'viren@gmail.com', 'password': 'xxxxxxxxxxx', 'Technology': "Frontend", 'address': 'Malvan' },
      { 'id': 3, 'name': 'Raj', 'email': 'raj@gmail.com', 'password': 'xxxxxxxxxx', 'Technology': "ui", 'address': 'Valsad' },
      { 'id': 4, 'name': 'Kanaiya', 'email': 'kanniya@gmail.com', 'password': 'xxxxxxxxxxxxxx', 'Technology': "javascript", 'address': 'Vapi' },
      { 'id': 5, 'name': 'Ashish', 'email': 'ashish@gmail.com', 'password': 'xxxxxxxxx', 'Technology': "ui", 'address': 'Pune' },
      { 'id': 6, 'name': 'sagar', 'email': 'sagar@gmail.com', 'password': 'xxxxxxxxxxxxxx', 'Technology': "backend", 'address': 'Bilimora' },
      { 'id': 7, 'name': 'Deep', 'email': 'deep@gmail.com', 'password': 'xxxxxxxxxxx', 'Technology': "java", 'address': 'Bigri' },
    ];
    console.log(this.employeeData);
  }



  // public employeeDetails: any;


  // getData() {
  //   if (localStorage.length == 0) {
  //     this.employeeDetails.setItem('employee', JSON.stringify(this.employeeData))
  //   }
  // }

}
