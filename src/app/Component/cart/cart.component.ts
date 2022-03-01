import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


public product : any = [];
public grandTotal : any

  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
      this.product = res;
      this.grandTotal = this.cartService.getTotalPrice
    })
  }
  removeItem(item:any){
    this.cartService.removeCardItem(item)
  }
  emptyCart(){
    this.cartService.removeAllCart()
  }
}
