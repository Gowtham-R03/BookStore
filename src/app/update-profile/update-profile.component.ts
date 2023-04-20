import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';
import { FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-profile',
  templateUrl: './update-profile.component.html',
  styleUrls: ['./update-profile.component.css']
})
export class UpdateProfileComponent implements OnInit {


  id:any;
  role:any;

  userList:any

  formValue !: FormGroup;
  actionBtn:String = "Save"

  constructor(private loginService:LoginService, private userService:UserService, 
    private formBuilder:FormBuilder, private matDialogRef:MatDialogRef<UpdateProfileComponent>, @Inject(MAT_DIALOG_DATA) public editData: any) { }

  ngOnInit(): void {

    this.formValue = this.formBuilder.group({
      userId: [''],
      userName: ['',Validators.required],
      userFirstName : ['',Validators.required],
      userLastName : ['',Validators.required],
      userMail : ['',Validators.required],
      userPassword : ['',Validators.required],
      role: ['']
    });

    this.id = this.loginService.getId();
    this.role = this.loginService.getRole();

    if(this.editData){
      this.actionBtn = "Update";
      this.formValue.controls['userName'].setValue(this.editData.userName);
      this.formValue.controls['userFirstName'].setValue(this.editData.userFirstName);
      this.formValue.controls['userLastName'].setValue(this.editData.userLastName);
      this.formValue.controls['userMail'].setValue(this.editData.userMail);
      this.formValue.controls['userPassword'].setValue(this.editData.userPassword);
    }
   
  
  }


  getUser(id:any){
    this.userService.getUser(id).subscribe(data=>{this.userList=data})
  }

  onUpdate(){
    this.formValue.value.userId = this.id;
    this.formValue.value.role = this.role;
    this.userService.updateUser(this.formValue.value).subscribe({next:(res)=>{alert("Form Update Sucessfully"); this.formValue.reset();
  this.matDialogRef.close('update'); this.getUser(this.id)},
  error:()=>{alert("Error")}})
  }


    

}
