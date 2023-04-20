import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../model/book';
import { LoginService } from '../service/login.service';
import { BookService } from '../service/book.service';
import { error } from 'console';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {

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

  onCart(){
    this.book = this.editData;
    const name: string = this.loginService.getId() as string; 
    this.book.orderBy = name;
    this.bookService.updateBook(this.book).subscribe({next:(res)=>{alert("The Item Added To cart")}, error:()=>{alert("Error while adding item to cart")}})
   }

}
