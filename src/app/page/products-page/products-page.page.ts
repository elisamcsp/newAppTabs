import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.page.html',
  styleUrls: ['./products-page.page.scss'],
})
export class ProductsPagePage implements OnInit {

  products: any[] = [
    {"id": "1", "productId": "D11-8", "description": "Product 1", "price": "1,20"},
    {"id": "2", "productId": "D11-9", "description": "Product 2", "price": "11,99"},
    {"id": "3", "productId": "D11-5", "description": "Product 3", "price": "5,20"},
    {"id": "4", "productId": "D11-2", "description": "Product 4", "price": "0,90"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
