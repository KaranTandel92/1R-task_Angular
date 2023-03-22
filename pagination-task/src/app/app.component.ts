import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'pagination-task';
  public firstIndex: any;
  public lastIndex: any;
  public newData: any;
  public target: number = 10;
  public index: any;
  public button: number[] = [];
  public totalBtn: any;

  public product = [
    { column1: "one", column2: "two", column3: "three", column4: "four", column5: "five" },
    { column1: "six", column2: "seven", column3: "eight", column4: "nine", column5: "ten" },
    { column1: "one", column2: "two", column3: "three", column4: "four", column5: "five" },
    { column1: "one", column2: "two", column3: "three", column4: "four", column5: "five" },
    { column1: "one", column2: "two", column3: "three", column4: "four", column5: "five" },
    { column1: "one", column2: "two", column3: "three", column4: "four", column5: "five" },
    { column1: "six", column2: "seven", column3: "eight", column4: "nine", column5: "ten" },
    { column1: "one", column2: "two", column3: "three", column4: "four", column5: "five" },
    { column1: "one", column2: "two", column3: "three", column4: "four", column5: "five" },
    { column1: "one", column2: "two", column3: "three", column4: "four", column5: "five" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "Cookies", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "perfume" },
    { column1: "Cookies", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "perfume" },
    { column1: "Cookies", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "perfume" },
    { column1: "Cookies", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "perfume" },
    { column1: "Cookies", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "perfume" },
    { column1: "Cookies", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "perfume" },
    { column1: "Cookies", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "perfume" },
    { column1: "Cookies", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "perfume" },
    { column1: "Cookies", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "perfume" },
    { column1: "Cookies", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "perfume" },
    { column1: "wafer", column2: "jeans", column3: "shoes", column4: "perfume", column5: "gloves" },
    { column1: "wafer", column2: "jeans", column3: "shoes", column4: "perfume", column5: "gloves" },
    { column1: "wafer", column2: "jeans", column3: "shoes", column4: "perfume", column5: "gloves" },
    { column1: "wafer", column2: "jeans", column3: "shoes", column4: "perfume", column5: "gloves" },
    { column1: "wafer", column2: "jeans", column3: "shoes", column4: "perfume", column5: "gloves" },
    { column1: "wafer", column2: "jeans", column3: "shoes", column4: "perfume", column5: "gloves" },
    { column1: "wafer", column2: "jeans", column3: "shoes", column4: "perfume", column5: "gloves" },
    { column1: "wafer", column2: "jeans", column3: "shoes", column4: "perfume", column5: "gloves" },
    { column1: "wafer", column2: "jeans", column3: "shoes", column4: "perfume", column5: "gloves" },
    { column1: "wafer", column2: "jeans", column3: "shoes", column4: "perfume", column5: "gloves" },
    { column1: "Pent", column2: "t-Shirt", column3: "shoes", column4: "muflar", column5: "wafer" },
    { column1: "Pent", column2: "t-Shirt", column3: "shoes", column4: "muflar", column5: "wafer" },
    { column1: "Pent", column2: "t-Shirt", column3: "shoes", column4: "muflar", column5: "wafer" },
    { column1: "Pent", column2: "t-Shirt", column3: "shoes", column4: "muflar", column5: "wafer" },
    { column1: "Pent", column2: "t-Shirt", column3: "shoes", column4: "muflar", column5: "wafer" },
    { column1: "Pent", column2: "t-Shirt", column3: "shoes", column4: "muflar", column5: "wafer" },
    { column1: "Pent", column2: "t-Shirt", column3: "shoes", column4: "muflar", column5: "wafer" },
    { column1: "Pent", column2: "t-Shirt", column3: "shoes", column4: "muflar", column5: "wafer" },
    { column1: "Pent", column2: "t-Shirt", column3: "shoes", column4: "muflar", column5: "wafer" },
    { column1: "Pent", column2: "t-Shirt", column3: "shoes", column4: "muflar", column5: "wafer" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "Shirt", column2: "Pent", column3: "t-Shirt", column4: "sort", column5: "shoes" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "cap", column2: "muflar", column3: "gloves", column4: "gogals", column5: "spray" },
    { column1: "wafer", column2: "jeans", column3: "shoes", column4: "perfume", column5: "gloves" },
    { column1: "wafer", column2: "jeans", column3: "shoes", column4: "perfume", column5: "gloves" },
    { column1: "Pent", column2: "t-Shirt", column3: "shoes", column4: "muflar", column5: "wafer" },
    { column1: "Pent", column2: "t-Shirt", column3: "shoes", column4: "muflar", column5: "wafer" },
    { column1: "Pent", column2: "t-Shirt", column3: "shoes", column4: "muflar", column5: "wafer" },
    { column1: "Pent", column2: "t-Shirt", column3: "shoes", column4: "muflar", column5: "wafer" },
    { column1: "Pent", column2: "t-Shirt", column3: "shoes", column4: "muflar", column5: "wafer" }
  ]

  public allProduct = Object.keys(this.product[0]);

  getData(event: any) {
    // debugger
    this.firstIndex = ((event.target.value) - 1) * 10;
    console.log(event.target.value);
    this.lastIndex = this.firstIndex + (this.target - 1);
    this.newData = this.product.filter(item => {
      return this.product.indexOf(item) >= this.firstIndex && this.product.indexOf(item) <= this.lastIndex
    })
  }

  ngOnInit(): void {
    this.totalBtn = this.product.length / this.target;
    for (let index = 1; index <= Math.ceil(this.totalBtn); index++) {
      this.button.push(index)
      console.log(this.button);
      this.newData = this.product.filter(item => {
        return this.product.indexOf(item) >= 0 && this.product.indexOf(item) <= 9
      })
    }
  }
}
