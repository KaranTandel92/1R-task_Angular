import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  reactiveForm!: FormGroup
  sendProduct: any;
  id: any;
  res: any;
  updateData: boolean = false;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.reactiveForm = new FormGroup(
      {
        // id: new FormControl(""),
        productName: new FormControl(""),
        productDescription: new FormControl(""),
        type: new FormControl("")
      }
    )
    this.id = this.route.snapshot.paramMap.get('id')
    // console.log(this.id);

    if (this.id != " ") {
      this.productService.getDataById(this.id).subscribe(res => {
        this.res = res;
        // console.log(this.res);
        this.reactiveForm.setValue({
          productName: this.res.productName,
          productDescription: this.res.productDescription,
          type: this.res.type,
        })
      });
      this.updateData = true;
    }

  }

  // Data post on server
  sendData() {
    if (!this.updateData) {
      this.productService.postData(this.reactiveForm.value).subscribe((res: any) => {
        this.sendProduct = res;
      })
    }
    else {
      this.productService.editData(this.id, this.reactiveForm.value).subscribe(res => res);
    }

    this.router.navigate(['/list']) // Go to the list page on submit (on click)

  }

}
