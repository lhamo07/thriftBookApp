import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItemList:any=[];
productList=new BehaviorSubject<any>([])
search=new BehaviorSubject<string>('');

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.productList.asObservable();
  }
  setProducts(product:any){
    this.cartItemList.push(...product);
      // emit data 
    this.productList.next(product);
  }
  addToCart(product:any){
    this.cartItemList.push(product);
    this.productList.next(this.cartItemList);
  

    this.getTotalPrice();
    console.log(this.cartItemList)
  
  }
  getTotalPrice(): number{
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal=grandTotal+a.total;
    })
    return grandTotal;
  }
  removeCartItem(product:any){
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id){
        this.cartItemList.splice(index,1)
      }
    })
    this.productList.next(this.cartItemList)
  }

  removeAllCart(){
    this.cartItemList=[]
    this.productList.next(this.cartItemList);
  }
  // deleteData(id:number){
  //   return this.http.delete('https://fakestoreapi.com/products/`${id}`')
  // }
}
