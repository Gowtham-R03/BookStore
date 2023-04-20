import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  id:String ="";
  role:String ="";
  status:String ="";

  constructor(private http:HttpClient) { this.loadUserInfo() }


  setId(data:any){
    localStorage.setItem('id',data);
  }

  getId(){
    return localStorage.getItem('id')
  }

  setRole(r:any){
    localStorage.setItem('role',r);
  }

  getRole(){
    return localStorage.getItem('role')
  }

  setComment(data:any){
    localStorage.setItem('data',data);
  }

  getComment(){
    return localStorage.getItem('data')
  }

  userInfo:BehaviorSubject<any> = new BehaviorSubject(null);
  jwtHelper = new JwtHelperService();

  userLogin(userPayload: any):Observable<boolean>{

   return this.http.post("http://localhost:3000/auth/login",userPayload)
    .pipe(
      map((value:any)=>{
        if(value){
          localStorage.setItem("access_token", value.access_token);
          localStorage.setItem("refresh_token", value.refresh_token);
          const decryptedUser = this.jwtHelper.decodeToken(value.access_token);
          console.log(decryptedUser);

          const data = {
              access_token : value.access_token,
              refresh_token: value.refresh_token,
              user_name: decryptedUser.username,
              user_id: decryptedUser.sub,
              token_expiry: decryptedUser.exp
          }

          this.userInfo.next(data);
          return true;
        }
        return false;
        
      })
    )
  }

  loadUserInfo(){
    const userData = this.userInfo.getValue();
    if(!userData){
      const accessToken = localStorage.getItem('access_token');
      if(accessToken){
        const decryptedUser = this.jwtHelper.decodeToken(accessToken);
        const data = {
          access_token : accessToken,
          refresh_token: localStorage.getItem("refresh_token"),
          user_name: decryptedUser.username,
          user_id: decryptedUser.sub,
          token_expiry: decryptedUser.exp
        };
        this.userInfo.next(data);
      }
    }
  }


  
}
