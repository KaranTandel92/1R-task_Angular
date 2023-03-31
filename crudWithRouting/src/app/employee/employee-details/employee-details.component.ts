import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from 'src/app/service/employee.service';
import { Employee } from '../employee';


@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  reactiveForm!: FormGroup;
  public sendEmployeeData!: Employee;
  public id!: number | null;
  public res!: Employee;
  public editdata!: Employee;
  public updateData: boolean = false;


  constructor(private employeeService: EmployeeService, private route: Router, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      employeeName: new FormControl(""),
      gender: new FormControl(""),
      department: new FormControl("")
    });

    //  get the id from the url to form
    this.id = Number(this.router.snapshot.paramMap.get('id'));
    // console.log(this.id);

    if (this.id != null) {
      this.employeeService.getDataById(this.id).subscribe((res) => {
        // debugger
        this.editdata = res;

        this.reactiveForm.setValue({        // to set the details(value) in the form on edit click
          employeeName: this.editdata.employeeName,
          gender: this.editdata.gender,
          department: this.editdata.department
        })
        // console.log(res);
      });
      this.updateData = true;
    }
  }

  // send data on server
  sendData() {
    if (!this.updateData) {
      this.employeeService.postData(this.reactiveForm.value).subscribe((res: Employee) => {
        this.sendEmployeeData = res;
      })
    }
    else {
      this.employeeService.editData(this.id, this.reactiveForm.value).subscribe(res => res);
    }
    this.route.navigate(['/emplopyeeList'])    // switch the page from the form to list
  }

}

