import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
      //maps the URL to ProductDetailsComponent
      //path is a string property that specifies the URL path that the route should match
      //The :productId is a route parameter that allows the ProductDetailsComponent to receive a product ID as input
      //When user navigates to the products/:productId URL, the router will match the URL to this route and load the ProductDetailsComponent
      //The productId parameter value will be extracted from the URL and passed to ProductDetailsComponent as an input
      //Then ProductDetailsComponent use the productId input to fetch the corresponding product data and display it to the user

      //For example, if the user navigates to the URL products/123, the router will match the URL to this route and load the ProductDetailsComponent with the productId parameter set to 123. The ProductDetailsComponent can then use the 123 ID to fetch the product data for product ID 123 and display it to the user.

      { path: 'products/:productId', component: ProductDetailsComponent },
    ]),
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
