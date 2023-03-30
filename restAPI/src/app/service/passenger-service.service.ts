import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassengerServiceService {

  public passengerDetails: any;

  constructor(private http: HttpClient) { }


  public url = 'http://localhost:3000/passenger';

  // get data from the server
  getData() {
    return this.http.get(this.url);
  }

  // data post on server
  postData(body: any) {
    return this.http.post(this.url, body);
  }

  deleteData(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  getNewData(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  editData(id: number, body: any) {
    return this.http.put(`${this.url}/${id}`, body)
  }


}
