import { Injectable } from "@angular/core";
import { createEntityQuery, createEntityStore, EntityState } from "@datorama/akita";
import { Book } from "./book.interface";
import { books } from './books.initial';

export interface BooksState extends EntityState<Book> {}

@Injectable({ providedIn: 'root' })
export class BooksEntityStore  {

  private store = createEntityStore<BooksState>({}, {
    name: 'books',
    idKey: 'id',
  });
  private query = createEntityQuery<BooksState>(this.store);

  constructor() {
    this.setInitialState()
  }

  setInitialState = () =>  this.store.set(books);

  selectBooks = () => this.query.select('books');
}
