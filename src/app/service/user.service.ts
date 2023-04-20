import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl="http://localhost:8080/user/getUsers"
  private addUrl="http://localhost:8080/user/addUser"
  private getUrl= "http://localhost:8080/user/getUser"
  private updateUrl = "http://localhost:8080/user/updateUser"
  private deleteUrl = "http://localhost:8080/user/deleteUser"

  constructor(private httpClient: HttpClient) { }

  getUserList(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${this.baseUrl}`);
  }

  addUser(user:User){
    return this.httpClient.post<any>(`${this.addUrl}`,user);
  }

  getUser(id:any){
    return this.httpClient.get<User>(`${this.getUrl}/${id}`);
  }

  updateUser(user:User){
    return this.httpClient.put<User>(`${this.updateUrl}`,user);
  }

  deleteUser(id:number){
    return this.httpClient.delete<any>(`${this.deleteUrl}/${id}`);
  }

}
