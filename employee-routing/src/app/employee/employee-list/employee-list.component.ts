import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public employee = [
    { id: 1, name: "Karan" },
    { id: 2, name: "Michel" },
    { id: 3, name: "Dharmesh" },
    { id: 4, name: "Remo" },
    { id: 5, name: "Shakti" }
  ]

}
