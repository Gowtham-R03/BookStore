import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient:HttpClient) { }

  private baseUrl = "http://localhost:8080/bookHome/getBooks";
  private getUrl = "http://localhost:8080/bookHome/getBook";
  private addUrl = "http://localhost:8080/bookHome/addBook";
  private updateUrl = "http://localhost:8080/bookHome/updateBook";
  private deleteUrl = "http://localhost:8080/bookHome/deleteBook";
  private adminUrl = "http://localhost:8080/bookHome/get";
  private cartUrl = "http://localhost:8080/bookHome/getCart";
  private orderUrl = "http://localhost:8080/bookHome/getOrder";

  getBookList(): Observable<Book[]>{
    return this.httpClient.get<Book[]>(`${this.baseUrl}`);
  }

  addBook(book:Book){
    return this.httpClient.post<any>(`${this.addUrl}`,book);
  }

  getBook(id:any){
    return this.httpClient.get<Book>(`${this.getUrl}/${id}`);
  }

  updateBook(user:Book){
    return this.httpClient.put<Book>(`${this.updateUrl}`,user);
  }

  deleteBook(id:number){
    return this.httpClient.delete<any>(`${this.deleteUrl}/${id}`);
  }

  getAdminProduct(id:any){
    return this.httpClient.get<any>(`${this.adminUrl}/${id}`);
  }

  getToCart(id:any){
    return this.httpClient.get<any>(`${this.cartUrl}/${id}`);
  }

  getOrderBy(id:any){
    return this.httpClient.get<any>(`${this.orderUrl}/${id}`);
  }

}
