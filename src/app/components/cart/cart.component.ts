import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products:any=[]
  grandTotal!: number;

  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.displayData()
    // this.emptyCart()
  }
  displayData(){
    this.cartservice.getProducts().subscribe(data=>{
      this.products=data;
      this.grandTotal=this.cartservice.getTotalPrice();
      console.log(this.grandTotal)
    })
  }
  removeItem(item:any){
 
      this.cartservice.removeCartItem(item);
      
   
  }
  emptyCart(){
this.cartservice.removeAllCart();
  }

// deletePost(id:number){
//   let del=this.cartservice.deleteData(id).subscribe();
//   console.log('deleted item',del)
//   this.products=this.products.filter((value:any)=>{
//     if(id!==value.id)
//     {
//       return value;
//     }
//     return false;
//   })
// }


}

