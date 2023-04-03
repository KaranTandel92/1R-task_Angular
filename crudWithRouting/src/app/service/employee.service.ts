import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public url = "http://localhost:3000/employeeList";


  // get data
  getData() {
    return this.http.get(this.url);
  }

  // post data
  postData(body: Employee) {
    return this.http.post(this.url, body);
  }

  // delete data
  deleteData(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  // get data from the id
  getDataById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  editData(id: number | null, body: Employee) {
    return this.http.put(`${this.url}/${id}`, body);
  }

}
