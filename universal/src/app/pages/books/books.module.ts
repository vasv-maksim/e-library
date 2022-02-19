import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksRoutingModule } from './books.routing';
import { BooksComponent } from './books.component';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
  ],
  declarations: [
    BooksComponent,
  ],
})
export class BooksModule { }
