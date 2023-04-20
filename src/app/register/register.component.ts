import { Component, OnInit, Optional } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private userService:UserService,  private matDialogRef:MatDialogRef<RegisterComponent>) { }

  ngOnInit(): void {
    
  }

  mainRole: any;

  userModel: any;

  roles: string[] = ['user', 'admin'];


  registerForm = new FormGroup({
    userId: new FormControl(''),
    userName: new FormControl('', [Validators.required]),
    userFirstName: new FormControl('', [Validators.required]),
    userLastName: new FormControl('', [Validators.required]),
    userMail: new FormControl('', [Validators.required]),
    userPassword: new FormControl('', [Validators.required]),
    role: new FormControl('')
  }) 


  onChange(event:any){

    this.mainRole = event.value;
    
  }

  onRegister(){
    
      this.userModel = this.registerForm
      const dateStr = Date.now().toString(36);
      this.userModel.value.userId= dateStr;
      this.userModel.value.role = this.mainRole
      this.userService.addUser(this.userModel.value).subscribe(response=>{alert('The user details is saved');}) 
      this.matDialogRef.close('save');
  }

  }

