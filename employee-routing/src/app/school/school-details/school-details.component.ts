import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-school-details',
  templateUrl: './school-details.component.html',
  styleUrls: ['./school-details.component.css']
})
export class SchoolDetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }


  public schoolDetails: any;
  ngOnInit(): void {
    this.schoolDetails = this.route.snapshot.paramMap.get("id");
  }

}
