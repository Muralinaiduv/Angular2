import { Component, OnInit } from '@angular/core';
import { BookService } from '../services/book-service.service';
import { Book } from '../models/book';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {

  book: Book[];
  bookId: number;
  //bookId: number;

  constructor(private bookService: BookService,
    private route: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    //console.log("bookid", bookId, this.activatedRoute);
    this.getBooks();
  }

  getBooks() {
    this.bookService.getAll().subscribe((book => {
      this.book = book;
      console.log("book", book)
    }))
  }


  onClickAuthor(id: number) {
    this.route.navigate(['/book', id]);
  }
  onRemoveClick(id: number) {
    this.bookService
      .remove(id)
      .subscribe(user => {
        this.book = this.book.filter(bug => bug.id !== id)
      })

  }

  onClickRegister() {
    this.route.navigate(['/'])
  }
}
