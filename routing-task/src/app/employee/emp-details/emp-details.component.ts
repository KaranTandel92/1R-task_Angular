import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.css']
})
export class EmpDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  public emplDescription: any;
  public employeeData: any;
  ngOnInit(): void {
    this.emplDescription = this.route.snapshot.paramMap.get('id');
    this.employeeData = JSON.parse(this.emplDescription);
  }

}
