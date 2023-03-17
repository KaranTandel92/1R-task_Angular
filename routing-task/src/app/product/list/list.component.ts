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
    { id: 1, name: 'Chocolate' },
    { id: 2, name: 'Buiscuit' },
    { id: 3, name: 'Wafer' },
    { id: 4, name: 'Sweets' },
    { id: 5, name: 'ice-Cream' }
  ]



}
