import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interface/product';
import { CartService } from 'src/app/service/cart.service';
import { FavouritesService } from 'src/app/service/favourites.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  headphones: ProductInterface[] = []
  phones: ProductInterface[] = []
  products: ProductInterface[] = []
  constructor(private productService: ProductService, private cartService: CartService, private favService: FavouritesService) { }


  ngOnInit() {
    this.getHeadphoneList()
    this.getPhoneList()
    this.getProduct()
  }

  public getHeadphoneList() {
    this.headphones = this.productService.getHeadphones()
  }

  public getPhoneList() {
    this.phones = this.productService.getPhones()
  }

  public getProduct() {
    this.products = this.headphones.concat(this.phones)
  }

  public addToCard(products: ProductInterface) {
    this.cartService.addItem(products);
  }

  public addToFav(products: ProductInterface) {
    this.favService.addItem(products)
  }
}
