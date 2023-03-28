import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PassengerServiceService } from 'src/app/service/passenger-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  myReactiveForm!: FormGroup;
  newData: any;

  constructor(private passengerService: PassengerServiceService) { }

  ngOnInit(): void {
    this.myReactiveForm = new FormGroup(
      {
        'username': new FormControl(null, [Validators.required, Validators.pattern(/^[A-Za-z]+$/)]),
        'breath': new FormControl(null, [Validators.required, Validators.pattern(/^[a-z0-9](\.?[a-z0-9]){5,}@g(oogle)?mail\.com$/)]),
        'age': new FormControl(null, [Validators.required, Validators.pattern(/^[0-9]+$/)])
      }
    )

  }

  submitData() {
    this.passengerService.postData(this.myReactiveForm.value).subscribe((res: any) =>
      this.newData = res);
    // console.log(this.myReactiveForm.value);
  }
}
