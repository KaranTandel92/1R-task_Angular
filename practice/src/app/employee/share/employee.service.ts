import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  url = "http://localhost:3000/employeeData";

  getEmployeeData() {
    return this.http.get(this.url);
  }

  sendNewEmployeeData(body: any) {
    return this.http.post(this.url, body);
  }

}
