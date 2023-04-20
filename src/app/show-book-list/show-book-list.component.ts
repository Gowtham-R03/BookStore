import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddBookComponent } from '../add-book/add-book.component';
import { BookService } from '../service/book.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-book-list',
  templateUrl: './show-book-list.component.html',
  styleUrls: ['./show-book-list.component.css']
})
export class ShowBookListComponent implements OnInit {

  displayedColumns: string[] = ['bookName','authorName', 'description', 'bookPrice', 'bookImage', 'action'];
  dataSource !: MatTableDataSource<any>;

  id:any;
  role:any;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog:MatDialog, private bookService:BookService, private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {

    this.id=this.loginService.getId();
    this.getAdminProducts(this.id);
    this.role = this.loginService.getRole();

    if(!this.id || this.role == "user"){
      this.router.navigate(['/book-list']);
    }
  }

  openDialog(){
    this.dialog.open(AddBookComponent,{
      width:"30%"
    }).afterClosed().subscribe(res=>{this.getAdminProducts(this.id)})
  }

  getAdminProducts(id:any){
      this.bookService.getAdminProduct(id).subscribe(data=>{
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      })
  }

  onEdit(row:any){
    this.dialog.open(AddBookComponent,{
      width: "30%",
      data: row
    }).afterClosed().subscribe(res=>{
      this.getAdminProducts(this.id);
    })
  }

  onDelete(id:any){
    this.bookService.deleteBook(id).subscribe({
      next:(res)=>{
        alert("Book Deleted Sucessfully");
        this.getAdminProducts(this.id);
      }, error:()=>{alert("Error")}
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
