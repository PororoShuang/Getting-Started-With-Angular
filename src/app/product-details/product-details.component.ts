import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent {
  //‘undefined’ value is sometimes used when defining optional properties in a component or directive. The ‘undefined’ value is used as a way to signal that the property is optional and hasn’t been assigned to a value.
  //If a property is defined explicitly with the value of ‘undefined’, it means that the property is present but has no value. It is different from not defining the property at all, which means that the property is not present.

  product: Product | undefined;
  constructor(private route: ActivatedRoute) {}
}
