import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PassengerServiceService {

  public passengerDetails: any;

  constructor(private http: HttpClient) { }


  public url = 'http://localhost:3000/passenger';

  getData() {
    return this.http.get(this.url);
  }

  postData(body: any) {
    return this.http.post(this.url, body);
  }

  deleteData(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

}
