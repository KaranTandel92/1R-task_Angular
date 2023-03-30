import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PassengerServiceService } from 'src/app/service/passenger-service.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnChanges {
  myReactiveForm!: FormGroup;
  newData: any;
  toggle: any = true
  @Input() id: any;
  @Input() username: any;
  @Input() breath: any;
  @Input() age: any;

  constructor(private passengerService: PassengerServiceService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.id != undefined) {
      this.myReactiveForm.setValue({
        'username': this.username,
        'breath': this.breath,
        'age': this.age
      })
      this.toggle = false
    }
  }

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

  updateData() {
    this.passengerService.editData(this.id, this.myReactiveForm.value).subscribe(res => res);
  }
}
