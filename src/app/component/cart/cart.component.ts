import { AfterContentInit, Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductInterface } from 'src/app/interface/product';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: ProductInterface[] = [];
  total: number = 0;
  constructor(private cartService: CartService) {

  }

  ngOnInit() {
    this.cartService.cartItems.subscribe(data => {
      this.items = data
      if (this.items) this.getTotal(this.items)
    })
  }



  onDelete(i: number) {
    this.items.splice(i, 1);
    this.cartService.setCartData(this.items)
  }



  minus(i: number) {
    if (this.items[i].count > 1) {
      this.items[i].count--;
      this.cartService.setCartData(this.items)

    }
    else
      this.onDelete(i)
  }

  plus(i: number) {
    this.items[i].count++;
    this.cartService.setCartData(this.items)

  }

  getTotal(data: any) {
    let sum = 0;
    for (const item of data)
      sum += item.price * item.count;
    this.total = sum
  }
}
