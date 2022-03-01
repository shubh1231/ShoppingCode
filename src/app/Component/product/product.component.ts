import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/Service/api.service';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
public productList:any
public searchKey:string =""
public filterCategory: any 
  constructor( private api:ApiService,private cartService:CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList = res;
      this.filterCategory = res;
      this.productList.forEach((a:any) => {
        if(a.category === "women's clothing" || a.category === "men's clothing"  ){
          a.category ='fashion'
          console.log("category")
        }
        Object.assign(a,{quantity:1,total:a.price})
      });
    })
    this.cartService.search.subscribe((val:any)=>{
this.searchKey=val
    })
  }
addToCart(item:any){
this.cartService.addToCart(item)

}
filter(category:any){
this.filterCategory=this.productList.filter((a:any)=>{
  if(a.category==category || category ==''){
    return a;
  }
})
}
}
