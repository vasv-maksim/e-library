import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Book } from '../../state/book.interface';
import { BooksEntityStore } from '../../state/books.store';


@Component({
  selector: 'app-books-all',
  templateUrl: './books-all.component.html',
  styleUrls: ['./books-all.component.scss']
})
export class BooksAllComponent implements OnInit {

  books$: Observable<Book> = this.booksEntityStore.selectBooks();
  
  constructor(private booksEntityStore: BooksEntityStore) { }

  ngOnInit(): void {
    this.books$.subscribe()
  }

}
