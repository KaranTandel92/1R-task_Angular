import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  constructor() { }

  // @Input()
  // name!: string;
  private _name!: string

  private _dob!: string

  // @Input()
  // dob!: string;

  age!: number;

  uname!: string;

  message!: string;

  // name section
  @Input()
  public get name(): string {
    return this._name
  }
  public set name(value: string) {
    this._name = value;
    this.uname = this._name.charAt(0).toUpperCase() + this._name.substring(1);
  }


  // age section
  @Input()
  public get dob(): string {
    return this._dob
  }
  public set dob(dobValue: string) {
    this._dob = dobValue;
    this.age = this.getAge(this.dob);
    if (this.age > 0 && this.age < 12) {
      this.message = "You are a Kid now"
    }
    else if (this.age >= 12 && this.age < 18) {
      this.message = "You are teenager"
    }
    else if (this.age >= 18 && this.age < 40) {
      this.message = "You are a Mature"
    }
    else {
      this.message = "You are younger or old"
    }
  }

  // ngOnChanges(changes: SimpleChanges): void {
  //   //   // console.log("running");

  //   //   if (changes['dob']) {

  //   //   }

  // }


  // date section
  private getAge(dateOfBirth: string) {
    let DOB = new Date(dateOfBirth).getTime();
    let currentDate = new Date().getTime();

    return Math.floor((currentDate - DOB) / (1000 * 60 * 60 * 24 * 365));
  }

}
