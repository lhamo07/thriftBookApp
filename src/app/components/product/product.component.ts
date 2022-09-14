import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  productList: any;
  searchKey: string = '';

  constructor(
    private apiservice: ApiService,
    private cartservice: CartService
  ) {}

  ngOnInit(): void {
    this.getApiData();
    this.searchItem();
  }
  getApiData() {
    // Property 'subscribe' does not exist on type 'void'
    this.apiservice.getProduct().subscribe((data: any) => {
      // console.log(data)
      this.productList = data;
      this.productList.forEach((element: any) => {
        Object.assign(element, { quantity: 1, total: element.price });
      });
    });
  }
  addtocart(item: any) {
    this.cartservice.addToCart(item);
  }
  searchItem() {
    this.cartservice.search.subscribe((val) => {
      this.searchKey = val;
    });
  }
}
