import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book-list/book-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ShowBookListComponent } from './show-book-list/show-book-list.component';
import { AddBookComponent } from './add-book/add-book.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';
import {NgxPaginationModule} from 'ngx-pagination';
import { BuyComponent } from './buy/buy.component';
import { CartComponent } from './cart/cart.component';
import { OrderComponent } from './order/order.component';
import { CartBuyComponent } from './cart-buy/cart-buy.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthRouteGaurd } from './service/auth.route.guard';



@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    UpdateProfileComponent,
    ShowBookListComponent,
    AddBookComponent,
    BuyComponent,
    CartComponent,
    OrderComponent,
    CartBuyComponent,
    PageNotFoundComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    NgxPaginationModule
  ],
  providers: [AuthRouteGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
