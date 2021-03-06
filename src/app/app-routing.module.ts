import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarComponentComponent } from './component/car-component/car-component.component';
import { ShoppingCartComponent } from './component/shopping-cart/shopping-cart.component';
import { SignInComponent } from './component/sign-in/sign-in.component';

const routes: Routes = [
      {
        path:'cart',
        component: ShoppingCartComponent
      },
      {
        path:":",
        component: SignInComponent
      }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
