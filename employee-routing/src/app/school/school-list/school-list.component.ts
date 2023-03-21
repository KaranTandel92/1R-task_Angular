import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-school-list',
  templateUrl: './school-list.component.html',
  styleUrls: ['./school-list.component.css']
})
export class SchoolListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public school = [
    { id: 101, name: "Valsad-school" },
    { id: 102, name: "Navsari-school" },
    { id: 103, name: "Surat-school" },
    { id: 104, name: "Bilimora-school" },
    { id: 105, name: "Dungri-school" }
  ]

}
