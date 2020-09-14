import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { BookDetailsComponent } from './list-book/book-details/book-details.component';
import { ListBookComponent } from './list-book/list-book.component';


const routes: Routes = [
      
  {path: '', pathMatch:'full', component: CreateBookComponent},
  {path: 'book', component: ListBookComponent },
  {path: 'book/:id', component: BookDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
