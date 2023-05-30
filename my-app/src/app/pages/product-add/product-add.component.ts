import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss'],
})
export class ProductAddComponent {
  productForm = this.formBuilder.group({
    name: [''],
    price: [0],
  });
  constructor(
    private ProductSevice: ProductService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  onHandleAdd() {
    if (this.productForm.valid) {
      const product: IProduct = {
        name: this.productForm.value.name || '',
        price: this.productForm.value.price || 0,
      };
      this.ProductSevice.addProduct(product).subscribe((data) => {
        console.log('them thanh cong', data);
        this.router.navigate(['/admin/products']);
      });
    }
  }
}
