import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public url = 'http://localhost:3000/productDetails'


  // get data from the server
  getData() {
    return this.http.get(this.url);
  }

  // post data on server
  postData(body: any) {
    return this.http.post(this.url, body);
  }

  // delete data
  deleteData(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }

  // select row data
  getDataById(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  // edit data
  editData(id: number, body: any) {
    return this.http.put(`${this.url}/${id}`, body);
  }



}
