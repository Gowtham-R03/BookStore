import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BookService } from '../service/book.service';
import { error } from 'console';
import { LoginService } from '../service/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  freshnessList = ["Brand New", "Second Hand", "Refurbished"];

  bookForm !: FormGroup;

  actionBtn:String = "Save"

  url="";

  book:any;

  id:any;
  role:any;

  constructor(private formBuilder:FormBuilder, private dialogRef:MatDialogRef<AddBookComponent>,
    @Inject(MAT_DIALOG_DATA) public editData: any, private bookService:BookService, private loginService:LoginService, private router:Router) { }

  ngOnInit(): void {
    this.bookForm = this.formBuilder.group(
      {
        bookName: ['', Validators.required],
        authorName: ['', Validators.required],
        bookPrice: ['', Validators.required],
        description: ['', Validators.required],
        bookImage: ['', Validators.required],
        toCart: [''],
        adminProducts: [''],
        userId: [''],
        id: [''],
        orderBy: ['']
        
      }
    );

    this.id = this.loginService.getId();
    this.role = this.loginService.getRole();

    if(!this.id || this.role == "user"){
      this.router.navigate(['/book-list']);
    }

    if(this.editData){
      this.actionBtn = "Update";
      this.bookForm.controls['bookName'].setValue(this.editData.bookName);
      this.bookForm.controls['authorName'].setValue(this.editData.authorName);
      this.bookForm.controls['bookPrice'].setValue(this.editData.bookPrice);
      this.bookForm.controls['description'].setValue(this.editData.description);
      this.bookForm.controls['bookImage'].setValue(this.editData.bookImage);
    }

  }

  getAdminProductList(){
    this.bookService.getAdminProduct(this.id).subscribe(res=>{this.book=res})
  }

  public onFileChanged(event:any) {
    //Select File
    // this.selectedFile = event.target.files[0];
    // console.log(this.selectedFile);
    var reader =new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(event:any)=>{
      this.url=event.target.result;}
   
  }
  addProduct(){
    if(!this.editData){
    this.bookForm.value.bookImage = this.url;
    this.bookForm.value.toCart = "";
    this.bookForm.value.orderBy = "";
    this.bookForm.value.adminProducts = this.id;
    this.bookForm.value.userId= this.id;
    const dateStr = Date.now().toString(36);
    this.bookForm.value.id= dateStr;
    this.bookService.addBook(this.bookForm.value).subscribe({next:(res)=>{alert("Book Added Sucessfully");
  this.bookForm.reset(); this.dialogRef.close()},
  error:()=>{alert("Error while adding book")}})
    }else{
      this.updateProduct();
    }

  }

  updateProduct(){
    this.bookForm.value.bookImage = this.url;
    this.bookForm.value.toCart = "";
    this.bookForm.value.orderBy = "";
    this.bookForm.value.adminProducts = this.id;
    this.bookForm.value.userId= this.id;
    this.bookForm.value.id = this.editData.id;
    this.bookService.updateBook(this.bookForm.value).subscribe({next:(res)=>{alert("Book Updated Sucessfully");
    this.bookForm.reset(); this.dialogRef.close()},
    error:()=>{alert("Error while updating book")}})
  }

}
