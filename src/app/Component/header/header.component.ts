import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/Service/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

public searchTerm :any = "";
  public totalItem : number = 0
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.cartService.getProduct().subscribe(res=>{
this.totalItem = res.length;
    })
   

    

    
  }
search(event:any){
this.searchTerm =(event.target as HTMLInputElement).value
console.log(this.searchTerm)
this.cartService.search.next(this.searchTerm);
}
}
