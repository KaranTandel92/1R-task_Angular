import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }
  public productArr = [
    { id: 1, name: "laptop", description: "A Good Product" },
    { id: 2, name: "Mobile", description: "A Good Product" },
    { id: 3, name: "Television", description: "A Good Product" },
  ]
  ngOnInit(): void {
  }

}
