import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public productList = [
    { id: 'Product-1', name: 'Chocolate' },
    { id: 'Product-2', name: 'Buiscuit' },
    { id: 'Product-3', name: 'Wafer' },
    { id: 'Product-4', name: 'Sweets' },
    { id: 'Product-5', name: 'ice-Cream' }
  ]

}
