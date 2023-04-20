import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { Injectable} from '@angular/core';
import { LoginService } from "./login.service";
import { MatDialog } from "@angular/material/dialog";
import { LoginComponent } from "../login/login.component";

@Injectable()
export class AuthRouteGaurd implements CanActivate{

    constructor(private authService:LoginService,
                private router:Router, private matDialog:MatDialog){}

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): 
       | boolean 
       | UrlTree 
       | Observable<boolean | UrlTree> 
       | Promise<boolean | UrlTree>
    {
        
        const userData = this.authService.userInfo.getValue();
        if(userData && userData.user_id){
            if(state.url.indexOf("login") > -1){
                this.router.navigate(['/profile']);
                return false;
            }
        }else{
            if(state.url.indexOf("profile") > -1){
                this.router.navigate(['/book-list']);
                this.matDialog.open(LoginComponent,{
                    width:"30%",
                })
            }
        }
        return true;
    }
}