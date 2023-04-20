import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { LoginService } from './service/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'BookStore';
  status: String = "true";
  role:String = "admin";
  userRole: String = "user";
  Login: String = "Login";
  isDisabled = "false"
  adminStatus: String = "true";

  constructor(private router:Router, private matDialog:MatDialog, private loginService:LoginService){}

  ngOnInit(): void {
      this.getLogin();
      
  }

  getLogin(){
    const name: string = this.loginService.getComment() as string; 
    this.status = name;
     console.log(name);
     console.log(this.status)
     if(this.status == "true"){
      this.Login = "";
      this.isDisabled = "true";
     }
     else{
      this.Login="Login"
     }
  }  

  onLogin(){
    this.matDialog.open(LoginComponent),{
      width:"20%"
    }
  }

  onBook(){
    this.router.navigate(['/book-list']);
  }

  onShow(){
    if(this.status == this.loginService.getComment() && this.role == this.loginService.getRole()){
    this.router.navigate(['/show-books']);
    }
    else{
      alert("You need to Login As Admin")
    }
  }

  onAccount(){
    if(this.adminStatus == this.loginService.getComment()){
      this.router.navigate(['/profile']);
    }else{
      alert("You need to Login")
    }
  }

  onCart(){
    if(this.status == this.loginService.getComment() && this.userRole == this.loginService.getRole()){
      this.router.navigate(['/cart']);
      }
      else{
        alert("You need to Login As User")
      }
  }

  onOrder(){
    if(this.status == this.loginService.getComment() && this.userRole == this.loginService.getRole()){
      this.router.navigate(['/order']);
      }
      else{
        alert("You need to Login As User")
      }

  }
}
