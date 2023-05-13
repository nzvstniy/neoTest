import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { FavouritesService } from 'src/app/service/favourites.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartCount!: number
  favCount!: number

  constructor(private cartService: CartService, private favService: FavouritesService) { }

  ngOnInit() {
    this.cartService.cartItems.subscribe(items => {
      //this.cartCount = items.length
      this.cartCount = 0
      for (let i = 0; i < items.length; i++) {
        this.cartCount += items[i].count

      }
    })
    this.favService.favItems.subscribe(items => {
      this.favCount = items.length

    })

  }
}
