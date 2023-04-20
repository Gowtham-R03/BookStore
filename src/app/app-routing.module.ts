import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListComponent } from './book-list/book-list.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegisterComponent } from './register/register.component';
import { ShowBookListComponent } from './show-book-list/show-book-list.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { CartBuyComponent } from './cart-buy/cart-buy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthRouteGaurd } from './service/auth.route.guard';

const routes: Routes = [
  {path:"", redirectTo:"/book-list", pathMatch:"full"},
  {path:"book-list", component:BookListComponent},
  {path:"login", component:LoginComponent, canActivate: [AuthRouteGaurd]},
  {path:"profile", component:ProfileComponent},
  {path:"register", component:RegisterComponent},
  {path:"show-books", component:ShowBookListComponent},
  {path:"cart", component:CartComponent},
  {path: "order", component:OrderComponent},
  {path:"cartBuy", component:CartBuyComponent},
  {path:"404", component:PageNotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
