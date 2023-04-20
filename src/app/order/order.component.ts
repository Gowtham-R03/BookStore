import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookService } from '../service/book.service';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

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

    this.bookService.getOrderBy(this.id).subscribe(res=>{this.books=res ;console.log(this.books)})
  }

  onCancelOrder(book:any){

    book.orderBy ="";
    this.bookService.updateBook(book).subscribe({next:(res)=>{alert("Order Canceled"); this.getBookList();}, 
    error:()=>{alert("Error while adding item to cart")}})

  }

}
