import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  myReactiveForm!: FormGroup;


  ngOnInit(): void {
    this.myReactiveForm = new FormGroup({
      'userDetails': new FormGroup({
        'username': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
        'email': new FormControl(null, [Validators.required, Validators.pattern(/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/)]),
      }),
      'password': new FormControl(null, Validators.required),
      'confirmPassword': new FormControl(null, Validators.required),
      'address': new FormControl(null),
      // 'skills': new FormArray([
      //   new FormControl(null, Validators.required),
      //   new FormControl(null),
      //   new FormControl(null),
      // ])
    })

  }
  onSubmit() {
    console.log(this.myReactiveForm);
  }

  title = 'reactiveForms';
}
