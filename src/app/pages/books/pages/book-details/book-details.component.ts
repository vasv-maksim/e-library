import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorsEntityStore } from 'src/app/pages/authors/state/author.store';
import { Book } from '../../state/book.interface';
import { BooksEntityStore } from '../../state/books.store';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {
  book$: Observable<Book | undefined> = this.booksEntityStore.selectById(
    this.activateRoute.snapshot.params['id']
  );

  constructor(
    private booksEntityStore: BooksEntityStore,
    public authorsEntityStore: AuthorsEntityStore,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }

}
