import { Component } from '@angular/core';
import {OnInit} from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: IProduct[] = [];
  constructor(private productService: ProductService){

  }
  ngOnInit() {
    this.productService.getProduct().subscribe(data => this.products = data)
  }
  onHandleDelete(id: any){
      this.productService.deleteProduct(id).subscribe((data) =>{
        this.products = this.products.filter(item => item.id !== id)
      })
  }
}

