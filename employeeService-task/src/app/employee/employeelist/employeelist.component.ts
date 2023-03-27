import { Component, OnInit } from '@angular/core';
import { EmployeedetailsService } from '../service/employeedetails.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
  viewProviders: [EmployeedetailsService]
})
export class EmployeelistComponent implements OnInit {

  public data: any;


  constructor(private service: EmployeedetailsService) { }



  onClick(id: any): void {
    this.service.deleteRow(id);
    this.data = this.service.getData();
    // localStorage.removeItem(this.data);
    // console.log();
  }


  ngOnInit(): void {
    this.service.getData();   //data get from the localstorage
    let myArrayString: any = localStorage.getItem('employeeData')
    this.data = JSON.parse(myArrayString);
  }
}



