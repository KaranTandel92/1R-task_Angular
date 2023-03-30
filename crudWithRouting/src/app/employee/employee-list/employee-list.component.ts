import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  storeEmployeeData: any;

  constructor(private employeeService: EmployeeService) { }

  // create function for get data
  createFunction() {
    this.employeeService.getData().subscribe((res: any) => {
      this.storeEmployeeData = res
    });
  }

  ngOnInit(): void {
    this.createFunction();  // get data in list from the server
    // console.log(res);
  }

  removeDataRow(id: number) {
    this.employeeService.deleteData(id).subscribe();
    this.createFunction();
    console.log(id);
  }

}
