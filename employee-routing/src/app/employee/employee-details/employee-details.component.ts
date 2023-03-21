import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public employeeData: any;
  ngOnInit() {
    this.employeeData = this.route.snapshot.paramMap.get('id');
    // console.log(this.employeeData);

  }

}
