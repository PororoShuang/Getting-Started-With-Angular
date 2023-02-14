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
  //Inject an instance of the ActivatedRoute service as a dependency
  //constructer will automatically be called when an instance of the class is created
  //the constructor is used to initialize the 'route' property of the class with an instance of the 'ActivatedRoute' serivce
  //The 'private' keyword before the 'route' parameter is a TypeScript shorthand for defining the 'route' property on the class and initializing it with the 'route' parameter in the constructor

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    // Find the product that correspond with the id provided in route.
    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }
  //In Angular, as in JavaScript, the "===" operator is a strict equality operator, while the "==" operator is a loose equality operator.

  //The main difference between them is in how they compare values:

  //"===" checks if two values are of the same type and have the same value. If they are not, it returns false.
  //"==" checks if two values are equal, even if they are of different types. It performs type coercion if necessary to compare the values. For example, "1" == 1 would return true.
  //In general, it is recommended to use the "===" operator in Angular (and in JavaScript) to avoid unexpected type coercion and ensure that you are comparing values of the same type. However, there may be some cases where using "==" is appropriate, such as when you want to check if a value is null or undefined, since they are considered equal when using "==" but not when using "===".
}
