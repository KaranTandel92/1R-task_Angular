import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public storeEmployeeData!: Employee;
  public searchByName!: Employee;

  constructor(private employeeService: EmployeeService, private route: Router) { }

  // create function for get data
  createFunction() {
    this.employeeService.getData().subscribe((res) => res
      // this.storeEmployeeData = res
    );
  }

  ngOnInit(): void {
    this.createFunction();  // get data in list from the server
    // console.log(res);
  }

  removeDataRow(id: number) {
    this.employeeService.deleteData(id).subscribe();
    this.createFunction();
    // console.log(id);
  }

  editEmployeeDetails(id: number) {
    this.route.navigate(['/addEmployee', id]);
    // console.log(id);
  }

}
