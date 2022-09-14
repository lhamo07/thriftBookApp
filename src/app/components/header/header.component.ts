import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
totalItem:number=0;
searchTerm:string=''
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.clearSearch();
    this.getTotalItem();
    
  
    
  }
  clearSearch() {
    this.searchTerm ='';
  }
 
  getTotalItem(){
    this.cartservice.getProducts().subscribe(res=>{
      // this.totalItem+=1
      this.totalItem=res.length;
      
      
    })

  }
  search(event:any){
    this.searchTerm=(event.target as HTMLInputElement).value
    // console.log("search",this.searchTerm)
    this.cartservice.search.next(this.searchTerm);//emit searchTerm using behaviourSubject


  
  }
 

}
