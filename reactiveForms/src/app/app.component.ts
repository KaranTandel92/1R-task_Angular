import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myReactiveForm!: FormGroup;

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'username': new FormControl(null, Validators.required),
      'email': new FormControl(null, Validators.required),
      'password': new FormControl(null, Validators.required),
      'confirmPassword': new FormControl(null, Validators.required),
      'address': new FormControl(null)
    })

  }
  onSubmit() {
    console.log(this.myReactiveForm);

  }

  title = 'reactiveForms';
}
