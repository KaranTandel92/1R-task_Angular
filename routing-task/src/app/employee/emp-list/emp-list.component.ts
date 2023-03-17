import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public employeeList = [
    { id: 101, name: 'Karan', description: 'He is very bad boy' },
    { id: 102, name: 'Viren', description: 'He is very clever boy' },
    { id: 103, name: 'Raj', description: 'He is good boy' },
    { id: 104, name: 'Ashish', description: 'He is good men' },
    { id: 105, name: 'Kanaiya', description: 'He is extra ordinery' }
  ]

}
