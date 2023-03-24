import { Component, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../service/employee-service.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css'],
  viewProviders: [EmployeeServiceService]
})
export class EmployeeListComponent implements OnInit {
  constructor(private service: EmployeeServiceService) { }

  public newdata: any;
  public employeeData: any;
  getData() {
    this.service.employeeData();
  }

  ngOnInit(): void {
    this.newdata = Object.keys(this.employeeData[0]);

  }


}


