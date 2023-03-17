import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public productid: any;
  public productDetails: any;
  constructor(private route: ActivatedRoute) { }




  ngOnInit(): void {
    // console.log(this.route.snapshot.paramMap.get("id"));
    this.productid = (this.route.snapshot.paramMap.get("id"));
    this.productDetails = JSON.parse(this.productid)
  }

}
