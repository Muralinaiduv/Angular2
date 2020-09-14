import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateBookComponent } from './create-book/create-book.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ListBookComponent } from './list-book/list-book.component';
import { HttpClientModule } from '@angular/common/http';
import { BookDetailsComponent } from './list-book/book-details/book-details.component';
import { BookDirective } from './book.directive';

@NgModule({
  declarations: [
    AppComponent,
    CreateBookComponent,
    ListBookComponent,
    BookDetailsComponent,
    BookDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
