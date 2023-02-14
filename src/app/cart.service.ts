import { Injectable } from '@angular/core';
import { Product } from './products';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];
  //items is defined as an array type of "Product"
  //It's initialized to an empty array using square bracket

  //The addToCart() method appends a product to an array of items
  //push product into an array of items
  addToCart(product: Product) {
    this.items.push(product);
  }

  //The getItems() method collects the items users add to the cart and returns each item with its associated quantity
  getItems() {
    return this.items;
  }

  //The clearCart() method returns an empty array of items, which empties the cart
  clearCart() {
    this.items = [];
    return this.items;
  }
}
