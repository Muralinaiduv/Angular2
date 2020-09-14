import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book-service.service';
import { ListBookComponent } from '../list-book.component';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book: Book[];

  constructor(private activatedRoute: ActivatedRoute,
              private bookService: BookService) { }

  ngOnInit() {
    let bookId = this.activatedRoute.snapshot.params['id'];
    console.log(this.activatedRoute)
    this.bookService.getBook(bookId).subscribe(book => {
      this.book = book;
      console.log("book", book)
    });
  }


}
