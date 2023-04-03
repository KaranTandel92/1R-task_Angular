import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  print(value: string, listContainer: string) {
    let list = document.createElement("li");
    list.innerText = value;
    document.getElementById(listContainer)?.appendChild(list)
  }
}
