import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  allEmployeeData: any;

  constructor(private employeeService: EmployeeService) { }

  @Output() getDataEvent = new EventEmitter;

  // create function for get data 
  getData() {
    this.employeeService.getEmployeeData().subscribe((response: any) => {
      this.allEmployeeData = response;
    })
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployeeData(id).subscribe(res => res)
  }

  ngOnInit(): void {
    this.getData();
  }

}
