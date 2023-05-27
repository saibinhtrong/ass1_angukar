import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {

  productForm  = this.formBuilder.group({
      name: ["",[ Validators.required, Validators.minLength(4)]],
      price: [0],
  })

  constructor(private productService: ProductService,
    private formBuilder: FormBuilder){

    }

    onHandleSubmit(){
      if(this.productForm.valid){
        const product :IProduct ={
          name: this.productForm.value.name || "",
          price: this.productForm.value.price || 0,
        }
        this.productService.addProduct(product).subscribe(item =>{
          console.log(' thanh cong ', item)
        })
      }
    }
}
