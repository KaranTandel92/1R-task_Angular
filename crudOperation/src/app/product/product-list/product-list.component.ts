import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productData: any;

  constructor(private productService: ProductService) { }

  // create function for data 
  dataGet() {
    this.productService.getData().subscribe((res: any) =>
      this.productData = res)
  }

  ngOnInit(): void {
    this.dataGet();   // get data from the server
    history.pushState(null, "", location.href);
  }

  // delete data from the list
  removeRow(id: number) {
    this.productService.deleteData(id).subscribe();
    this.dataGet();
  }


}
