import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { EmployeeService } from '../share/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  @Input() allEmployeeData: any

  constructor() { }

  ngOnInit(): void {

  }

}
