import { Injectable, OnInit } from '@angular/core';
import { elementAt } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EmployeedetailsService implements OnInit {

  public employeeData: any;
  public localData: any;
  public deleteData: any;
  public data: any;
  dataObject: any;
  newData: any;

  constructor() {
    this.employeeData = [
      { 'id': 1, 'name': 'Karan', 'email': 'karan@gmail.com', 'password': 'xxxxxxxxx', 'Technology': "Frontend", 'address': 'Dungri', 'Action': "" },
      { 'id': 2, 'name': 'Viren', 'email': 'viren@gmail.com', 'password': 'xxxxxxxxxxx', 'Technology': "Frontend", 'address': 'Malvan' },
      { 'id': 3, 'name': 'Raj', 'email': 'raj@gmail.com', 'password': 'xxxxxxxxxx', 'Technology': "ui", 'address': 'Valsad' },
      { 'id': 4, 'name': 'Kanaiya', 'email': 'kanniya@gmail.com', 'password': 'xxxxxxxxxxxxxx', 'Technology': "javascript", 'address': 'Vapi' },
      { 'id': 5, 'name': 'Ashish', 'email': 'ashish@gmail.com', 'password': 'xxxxxxxxx', 'Technology': "ui", 'address': 'Pune' },
      { 'id': 6, 'name': 'sagar', 'email': 'sagar@gmail.com', 'password': 'xxxxxxxxxxxxxx', 'Technology': "backend", 'address': 'Bilimora' },
      { 'id': 7, 'name': 'Deep', 'email': 'deep@gmail.com', 'password': 'xxxxxxxxxxx', 'Technology': "java", 'address': 'Bigri' },
    ];
  }

  ngOnInit(): void {
  }

  // getEmployeeData() {

  //   localStorage.setItem('employeeData', myArrayString);  // data store in localstorage (using setItem)
  // }

  getData() {
    if (localStorage.length == 0) {
      const myArrayString = JSON.stringify(this.employeeData);
      localStorage.setItem('employeeData', myArrayString);             // data store in localstorage (using setItem)
      return this.employeeData;
    }
    else {
      let myArrayString: any = localStorage.getItem('employeeData');
      this.data = JSON.parse(myArrayString);                          // data convert from string to array
      return this.data;
    }
  }

  deleteRow(id: any) {
    // console.log(id);
    let myArrayString: any = localStorage.getItem('employeeData');   // get the key of object from the localstorage
    // console.log(myArrayString);
    this.dataObject = JSON.parse(myArrayString);
    // console.log(this.dataObject);
    this.newData = this.dataObject.find((element: any) => element.id == id);
    // console.log(this.newData);
    this.dataObject.splice(this.dataObject.indexOf(this.newData), 1);
    // console.log(this.deleteData);
    localStorage.setItem('employeeData', JSON.stringify(this.dataObject));
  }

  addNewData(newObj: any) {
    let myArrayString: any = localStorage.getItem('employeeData');
    this.data = JSON.parse(myArrayString);
    this.data.push(newObj);
    localStorage.setItem('employeeData', JSON.stringify(this.data));

  }


}
