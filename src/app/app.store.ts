import { Injectable } from '@angular/core';
import { createQuery, createStore } from '@datorama/akita';

export interface TitleState {
  title : string;
}

const initialState = (): TitleState  => ({
  title: 'Библиотека',
});

@Injectable({ providedIn: 'root' })
export class TitleStore {
  private store = createStore(initialState(), {
    name: 'title'
  });
  private query = createQuery(this.store);

  selectTitle = () =>  this.query.select('title');
  constructor() {}
}