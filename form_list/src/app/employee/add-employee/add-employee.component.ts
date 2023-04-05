import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmployeeService } from 'src/app/service/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit, OnChanges {

  reactiveForm!: FormGroup;
  public dataSubmit: boolean = true;

  constructor(private employeeService: EmployeeService) { }

  @Input() id: any;
  @Input() name: any;
  @Input() age: any;
  @Input() department: any;
  @Input() description: any;

  ngOnChanges(): void {

    if (this.id != undefined) {
      this.reactiveForm.setValue({
        name: this.name,
        age: this.age,
        department: this.department,
        description: this.description
      });
    }

    this.dataSubmit = false;
    console.log(this.name);
  }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
      age: new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      department: new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
      description: new FormControl(null, [Validators.required, Validators.pattern(/^(?=.*[A-Za-z0-9])[A-Za-z0-9 _]*$/)])
    })
  }

  submitEmployeeData() {
    this.employeeService.addEmployeeData(this.reactiveForm.value).subscribe(res => res)
  }

  updateData() {
    this.employeeService.editEmployeeData(this.id, this.reactiveForm.value).subscribe(res => res)
  }

}
