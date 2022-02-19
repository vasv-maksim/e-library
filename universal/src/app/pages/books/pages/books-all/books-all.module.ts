import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksAllComponent } from './books-all.component';
import { BooksAllRouterModule } from './books-all.router';

@NgModule({
  declarations: [
    BooksAllComponent,
  ],
  imports: [
    CommonModule,
    BooksAllRouterModule,
  ],
  exports: [
    BooksAllComponent,
  ],
})
export class BooksAllModule { }
