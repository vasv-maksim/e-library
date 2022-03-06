import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details.component';
import { BooksDetailsRouterModule } from './books-details.router';

@NgModule({
  declarations: [
    BookDetailsComponent,
  ],
  imports: [
    CommonModule,
    BooksDetailsRouterModule,
  ],
  exports: [
    BookDetailsComponent,
  ],
})
export class BooksDetailsModule { }
