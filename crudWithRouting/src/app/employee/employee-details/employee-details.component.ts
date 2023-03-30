import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from '../employee';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  reactiveForm!: FormGroup;
  sendEmployeeData!: Employee;

  constructor(private employeeService: EmployeeService, private route: Router) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      employeeName: new FormControl(""),
      gender: new FormControl(""),
      department: new FormControl("")
    })
  }

  // send data on server
  sendData() {
    this.employeeService.postData(this.reactiveForm.value).subscribe((res: any) => {
      this.sendEmployeeData = res;
      console.log(res);
    })
    this.route.navigate(['/emplopyeeList'])    // switch the page from the form to list
  }

}

