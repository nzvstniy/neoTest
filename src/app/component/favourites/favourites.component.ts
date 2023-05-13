import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interface/product';
import { CartService } from 'src/app/service/cart.service';
import { FavouritesService } from 'src/app/service/favourites.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.css']
})
export class FavouritesComponent implements OnInit {
  items: ProductInterface[] = [];
  total: number = 0;
  constructor(private favService: FavouritesService, private cartService: CartService) {

  }

  ngOnInit() {
    this.favService.favItems.subscribe(data => {
      this.items = data

    })
  }



  deleteFromFav(i: number) {
    this.items.splice(i, 1);
    this.favService.setfavData(this.items)
  }

  public addToCard(products: ProductInterface) {
    this.cartService.addItem(products);
  }
}
