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

  ngOnInit(): void {
    this.service.getEmployeeData();
    let myArrayString: any = localStorage.getItem('employeeData')
    this.data = JSON.parse(myArrayString);

  }

}
