import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFromComponent implements OnInit {
  public employeeFormGroup!: FormGroup;
  public isFormCancel: boolean = false;
  @Output() cancelEvent = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
    this.buildForm();
  }

  public buildForm() {
    // this.employeeFormGroup.
  }
  onSubmit() {
    console.log(this.employeeFormGroup.value);
  }

  cancelForm() {
    this.cancelEvent.emit(this.isFormCancel);
  }

}
