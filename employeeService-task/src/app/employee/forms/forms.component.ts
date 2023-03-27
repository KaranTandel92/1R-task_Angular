import { Component, OnInit } from '@angular/core';
import { EmployeedetailsService } from '../service/employeedetails.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  viewProviders: [EmployeedetailsService]
})
export class FormsComponent implements OnInit {

  myArrayString: any = localStorage.getItem('employeeData');
  data = JSON.parse(this.myArrayString);

  length = this.data.length + 1;
  constructor(private service: EmployeedetailsService) { }

  saveNewData(name: any, email: any, password: any, address: any, technology: any) {
    let newObj = { 'id': length, 'name': name, 'email': email, 'password': password, 'Technology': technology, 'address': address, 'Action': "" }
    this.service.addNewData(newObj);

    console.log(this.length);
    console.log(newObj);

  }

  ngOnInit(): void {
  }

}
