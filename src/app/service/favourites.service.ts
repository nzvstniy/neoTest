import { Injectable } from '@angular/core';
import { ProductInterface } from '../interface/product';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FavouritesService {
  placeholder: any = []
  favItems = new BehaviorSubject<ProductInterface[]>([]);

  constructor() {
    const ls = this.getfavData()
    if (ls) this.favItems.next(ls);
  }

  addItem(products: ProductInterface) {
    const ls = this.getfavData();
    let exist!: any;

    if (ls)
      exist = ls.find((item: any) => {
        return item.id === products.id;

      });

    if (exist) {
      this.setfavData(ls)
    }
    else {
      if (ls) {
        const newData = [...ls, products];
        this.setfavData(newData)
      }
      if (exist !== undefined) {
        exist.count++
        this.placeholder.push(products);
        this.setfavData(this.placeholder)
        console.log(this.placeholder)
      }


    }
  }


  setfavData(data: any) {
    localStorage.setItem('fav', JSON.stringify(data));
    this.favItems.next(this.getfavData())

  }
  getfavData() {
    return JSON.parse(localStorage.getItem('fav') || '[]')
  }
}