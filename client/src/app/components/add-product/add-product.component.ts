import { Component } from '@angular/core';

import { Product } from 'src/app/models/product.model';

import { ProductService } from 'src/app/services/product.service';

 

@Component({

  selector: 'app-add-product',

  templateUrl: './add-product.component.html',

  styleUrls: ['./add-product.component.css']

})

export class AddProductComponent {

  product: Product = new Product();

  submitted = false;

 

  constructor(private productService: ProductService) { }

 

  ngOnInit(): void {

  }

 

  saveProduct(): void {

    this.productService.create(this.product).then(() => {

      console.log('Created new item successfully!');

      this.submitted = true;

    });

  }

 

  newProduct(): void {

    this.submitted = false;

    this.product = new Product();

  }

}