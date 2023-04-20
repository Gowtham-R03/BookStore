import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
import { BookService } from '../service/book.service';
import { MatDialog } from '@angular/material/dialog';
import { BuyComponent } from '../buy/buy.component';
import { error } from 'console';
import { CartBuyComponent } from '../cart-buy/cart-buy.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  books:any;

  totalLength:any;
  page:number=1;

  id:any;
  role: String = "user";
  status: String = "true"

  constructor(private loginService:LoginService, private bookService:BookService, private matDialog:MatDialog, private router:Router) { }

  ngOnInit(): void {

    this.getBookList();

    this.role = this.loginService.getRole() as string;

    if(!this.id || this.role == "admin"){
      this.router.navigate(['/book-list']);
    }
  }

  getBookList(){

    this.id = this.loginService.getId();

    this.bookService.getToCart(this.id).subscribe(res=>{this.books=res ;console.log(this.books)})
  }

  onBuy(row:any){
    if(this.role==this.loginService.getRole() && this.status == this.loginService.getComment()){
    this.matDialog.open(CartBuyComponent,{
      width:"30%",
      data:row
    })}
    else{
      alert("Please Login As User to Buy")
    }
  }

  onDeleteCart(book:any){
    book.toCart="";
    this.bookService.updateBook(book).subscribe({next:(res)=>{alert("The Item Removed To cart"); this.getBookList();}, 
    error:()=>{alert("Error while adding item to cart")}})
  }

}
