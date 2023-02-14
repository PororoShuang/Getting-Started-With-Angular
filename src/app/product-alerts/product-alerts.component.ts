import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../products';
@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css'],
})
export class ProductAlertsComponent {
  //In this case, the product property is declared as an input using the @Input decorator. It is of type Product, which presumably is a model class that represents a product in the e-commerce application. The ! symbol after product indicates that the property is non-null, which means that it must be set before the component can be used.
  //By declaring product as an input property, you can pass a product object into the ProductAlertsComponent from its parent component. This allows the ProductAlertsComponent to display information or perform actions based on the product data.
  @Input() product!: Product;
  @Output() notify = new EventEmitter();
}
