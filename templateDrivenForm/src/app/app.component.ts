import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'templateDrivenForm';

  public myForm: any;
  constructor() { }
  ngOnInit(): void {

  }

  onSubmit(form: NgForm) {
    // console.log(form);\

  }
}
