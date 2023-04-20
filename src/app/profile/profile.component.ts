import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { UpdateProfileComponent } from '../update-profile/update-profile.component';
import { LoginService } from '../service/login.service';
import { UserService } from '../service/user.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  displayedColumns: string[] = ['userName','userFirstName', 'userLastName', 'userMail', 'role', 'action'];
  dataSource !: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator !: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  constructor( private matDialog: MatDialog, private loginService:LoginService,
    private userService:UserService, private router:Router) { }

  id:any;
  role:any;

  userList:any


  ngOnInit(): void {
    this.id = this.loginService.getId();
    this.role = this.loginService.getRole();
    
    this.getUser(this.id);
    console.log(this.loginService.getId());

    if(!this.id){
      this.router.navigate(['/book-list']);
    }
    
  }

  getUser(id:any){
    this.userService.getUser(id).subscribe(data=>{
      this.dataSource = new MatTableDataSource([data]);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    
  }


  openDialog(){
    this.matDialog.open(UpdateProfileComponent,{
      width:'350px',
    })
  }

  onEdit(row:any){
    this.matDialog.open(UpdateProfileComponent,{
      width:"30%",
      data:row
    }).afterClosed().subscribe(res=>{
      this.getUser(this.id);
    })
  }

  onDelete(){

   
    this.loginService.setId("");
    this.loginService.setComment("");
    this.loginService.setRole("");
    localStorage.setItem('access_token', "");
    localStorage.setItem('refresh_token', "");
    alert("You Have Logged Out");
    window.location.reload();
    
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
