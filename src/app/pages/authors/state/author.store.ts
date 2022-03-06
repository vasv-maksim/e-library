import { Injectable } from "@angular/core";
import { createEntityQuery, createEntityStore, EntityState } from "@datorama/akita";
import { Author } from "./author.interface";
import { authors } from './author.initial';

export interface AuthorsState extends EntityState<Author> {}

@Injectable({ providedIn: 'root' })
export class AuthorsEntityStore  {

  private store = createEntityStore<AuthorsState>({}, {
    name: 'authors',
    idKey: 'id',
  });
  private query = createEntityQuery<AuthorsState>(this.store);

  constructor() {
    this.setInitialState()
  }

  setInitialState = () =>  this.store.set(authors);

  selectAll = () => this.query.selectAll();
  selectById = (id: string) => this.query.selectEntity(id);
  selectMany = (ids: string[]) => this.query.selectMany(ids);
}
