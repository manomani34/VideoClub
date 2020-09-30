import { IBuyBasket } from './../interface/ibuy-basket';
import { BasketService } from './basket.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {
totalPrice:number=0;
  IBuyBasket:IBuyBasket[];
  constructor(private BasketService:BasketService) { }

  ngOnInit() {
  this.TotalPrice();
  }

  btnDelete(index:number){
    this.BasketService.DeleteItem(index);
    this.TotalPrice();
    
  }

  TotalPrice(){
    this.totalPrice=0;
    this.IBuyBasket=this.BasketService.getAllForUser();
    this.IBuyBasket.forEach(element => {
      this.totalPrice+= element.price;
    });
  }
 
}
