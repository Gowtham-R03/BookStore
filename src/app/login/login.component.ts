import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { UserService } from '../service/user.service';
import { LoginService } from '../service/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide = true;

  mainRole: any;
  formValue !: FormGroup;

  roles: string[] = ['user', 'admin'];
  local:any;

  constructor(private router:Router, private matDialog:MatDialog, private userService:UserService,
     private loginService:LoginService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.formValue = this.formBuilder.group({
      username: ['',Validators.required],     
      password : ['',Validators.required],
    });
  }

  registerForm = new FormGroup({
    userName: new FormControl('', [Validators.required]),
    userPassword: new FormControl('', [Validators.required])
  })

  

  onChange(event:any){

    this.mainRole = event.value;
    
  }

  newUser(){
    this.matDialog.open(RegisterComponent),{
      width: "350px"
    }
  }

  authLogin(){
    this.formValue.value.username = this.registerForm.value.userName;
    this.formValue.value.password = this.registerForm.value.userPassword;
    this.loginService.userLogin(this.formValue.value).subscribe((value:
      boolean)=>{
        if(value){
          console.log("Logged In");
        }
        else{
          console.log("Error");
        }
      }, error => {
        console.log("Error");
      })
    
  }

  onLogin(){

    this.userService.getUserList()
    .subscribe(res=>{
      const user = res.find((a:any)=>{ 
        return a.userName == this.registerForm.value.userName && a.userPassword == this.registerForm.value.userPassword
      });
      if(user){
        res.find((a:any)=>{ 
          if (a.userName == this.registerForm.value.userName && a.userPassword == this.registerForm.value.userPassword){
            if(this.mainRole == a.role){
              this.loginService.setRole(this.mainRole);
              this.loginService.setComment("true");
              this.loginService.setId(a.userId);
              console.log(this.loginService.getId());
              this.matDialog.closeAll();
              alert("Login success");
              this.authLogin();
              window.location.reload()
          this.router.navigate(['/book-list']);
          }else{alert("Please select correct role")}}
        });
      }else{
        alert("User Not Found");
      }
    }, err=>{
      alert("Something Went Wrong");
    }
    )

}
}
