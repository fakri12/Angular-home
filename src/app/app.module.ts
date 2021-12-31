import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpNavBarComponent } from './component/up-nav-bar/up-nav-bar.component';
import { DownNavBarComponent } from './component/down-nav-bar/down-nav-bar.component';
import { SearchHomeComponent } from './component/search-home/search-home.component';
import { FormsModule } from '@angular/forms';
import { WelcomeHomeComponent } from './component/welcome-home/welcome-home.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { HttpClientModule } from '@angular/common/http';
import { CarComponentComponent } from './component/car-component/car-component.component';

@NgModule({
  declarations: [
    AppComponent,
    UpNavBarComponent,
    DownNavBarComponent,
    SearchHomeComponent,
    WelcomeHomeComponent,
    ShoppingCartComponent,
    CarComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
