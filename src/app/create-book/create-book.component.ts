import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BookService } from '../services/book-service.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {


  registerForm: FormGroup;
  submitted = false;
  book: any;

  constructor( private formBuilder: FormBuilder,
              private route : Router,
              private bookService: BookService) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      id: ['', Validators.required],
      title: ['', Validators.required],
      author: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      release: ['', Validators.required]
  });
}

get f() {
  return this.registerForm.controls; }


onSubmit() {
  if (this.registerForm.valid) {
  this.bookService.addUser(this.registerForm.value).subscribe(data => {
    this.submitted = true;
    this.registerForm.reset();

  });
  this.route.navigateByUrl("/book")
 }
}
}
