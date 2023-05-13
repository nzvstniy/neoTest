import { Injectable } from '@angular/core';
import { ProductInterface, Headphones, Phones } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getHeadphones(): ProductInterface[] {
    return Headphones
  }
  getPhones(): ProductInterface[] {
    return Phones
  }
}
