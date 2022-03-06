import { Injectable } from "@angular/core";
import { createEntityQuery, createEntityStore, EntityState } from "@datorama/akita";
import { filter, map } from "rxjs";
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

  selectAll = () => this.query.selectAll();
  selectById = (id: string) => this.query.selectEntity(id);
  authorBooks = (authorId: string) => this.query.selectAll()
  .pipe(
    map(x => x.filter(
          y => y.authorId === authorId
        )
      )
    )
}
