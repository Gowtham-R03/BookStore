import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { MatDialog } from '@angular/material/dialog';
import { BuyComponent } from '../buy/buy.component';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  books:any;

  id:any;
  role: String = "user";
  status: String = "true";
  admin: String = "admin";
  sample: any = false;
  buy: String= "BUY";

  totalLength:any;
  page:number=1;

  isDiabled: any

  constructor(private bookService:BookService, private matDialog:MatDialog,
    private loginService:LoginService) { }

  ngOnInit(): void {
    this.getBookList();

  
    if(this.admin == this.loginService.getRole()){
      this.isDiabled = "true"
      this.buy = ""
    }else{
      this.isDiabled = "false"
      this.buy = "BUY"
    }
    
    
  }

  getBookList(){

    this.bookService.getBookList().subscribe(res=>{this.books=res ;console.log(this.books)})
    
  }

  onBuy(row:any){
    if(this.role==this.loginService.getRole() && this.status == this.loginService.getComment()){
    this.matDialog.open(BuyComponent,{
      width:"30%",
      data:row
    })}
    else{
      alert("Please Login As User to Buy")
    }
  }

}
