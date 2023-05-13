import { Injectable } from '@angular/core';
import { ProductInterface } from '../interface/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  placeholder: any = []
  cartItems = new BehaviorSubject<ProductInterface[]>([]);

  constructor() {
    const ls = this.getCardData()
    if (ls) this.cartItems.next(ls);
  }


  addItem(products: ProductInterface) {
    const ls = this.getCardData();
    let exist!: any;

    if (ls)
      exist = ls.find((item: any) => {
        return item.id === products.id;

      });

    if (exist) {
      exist.count++;
      this.setCartData(ls)
    }
    else {
      if (ls) {
        const newData = [...ls, products];
        this.setCartData(newData)
        //console.log(newData)
      }
      if (exist !== undefined) {
        exist.count++
        //console.log(exist)
        this.placeholder.push(products);
        this.setCartData(this.placeholder)
        console.log(this.placeholder)
      }


    }



  }


  setCartData(data: any) {
    localStorage.setItem('cart', JSON.stringify(data));
    this.cartItems.next(this.getCardData())

  }
  getCardData() {
    return JSON.parse(localStorage.getItem('cart') || '[]')
  }
}
