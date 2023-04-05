import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public url = " http://localhost:3000/employeeList";


  getEmployeeData() {
    return this.http.get(this.url);
  }

  addEmployeeData(body: Employee) {
    return this.http.post(this.url, body)
  }

  deleteEmployeeData(id: number) {
    return this.http.delete(`${this.url}/${id}`)
  }

  getNewEmployeeData(id: number) {
    return this.http.get(`${this.url}/${id}`)
  }

  editEmployeeData(id: number, body: any) {
    return this.http.put(`${this.url}/${id}`, body)
  }


}
