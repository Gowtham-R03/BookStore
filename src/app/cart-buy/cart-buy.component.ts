import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BuyComponent } from '../buy/buy.component';
import { BookService } from '../service/book.service';
import { Book } from '../model/book';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-buy',
  templateUrl: './cart-buy.component.html',
  styleUrls: ['./cart-buy.component.css']
})
export class CartBuyComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<BuyComponent>, @Inject(MAT_DIALOG_DATA) public editData: any, 
  private loginService:LoginService, private bookService:BookService, private router:Router) { }

  book !: Book
  id:any;
  role:any;

  ngOnInit(): void {

    this.id = this.loginService.getId();
    this.role = this.loginService.getRole();

    if(!this.id || this.role == "admin"){
      this.router.navigate(['/book-list']);
    }
  }

  onBuy(){

    this.book = this.editData;
    const name: string = this.loginService.getId() as string; 
    this.book.orderBy = name;
    this.bookService.updateBook(this.book).subscribe({next:(res)=>{alert("Order Placed")}, error:()=>{alert("Error while Order")}})
    
    
  }

}
