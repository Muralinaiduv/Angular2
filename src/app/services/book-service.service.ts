import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as express from 'express'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  books: Book[];

  private serviceEndPoint = 'http://localhost:3000/book';

  constructor(private http: HttpClient) { }


  getAll() : Observable<Book[]> {
    return this.http
        .get<Book[]>(this.serviceEndPoint);
}

getBook(id: number):
  Observable<Book[]> {
    return this.http
        .get<Book[]>(`${this.serviceEndPoint}/${id}`);
  }

  remove(id: number): Observable<Book[]>{
    return this.http
        .delete<Book[]>(this.serviceEndPoint + '/' +id);
}

addUser(book: Book): Observable<Book[]> {
    return this.http.post<Book[]>(this.serviceEndPoint + '/register/', book);
 }
}

