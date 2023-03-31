import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  public url = "http://localhost:3000/employeeList";


  // get data
  getData(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.url);
  }

  // post data
  postData(body: Employee): Observable<Employee> {
    return this.http.post<Employee>(this.url, body);
  }

  // delete data
  deleteData(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  // get data from the id
  getDataById(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.url}/${id}`);
  }

  editData(id: number | null, body: Employee) {
    return this.http.put(`${this.url}/${id}`, body);
  }

}
