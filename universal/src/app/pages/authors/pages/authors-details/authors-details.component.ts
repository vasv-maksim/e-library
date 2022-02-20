import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { BooksEntityStore } from 'src/app/pages/books/state/books.store';
import { Author } from '../../state/author.interface';
import { AuthorsEntityStore } from '../../state/author.store';

@Component({
  selector: 'app-authors-details',
  templateUrl: './authors-details.component.html',
  styleUrls: ['./authors-details.component.scss']
})
export class AuthorsDetailsComponent implements OnInit {

  author$: Observable<Author | undefined> = this.authorsEntityStore.selectById(
    this.activateRoute.snapshot.params['id']
  );

  books$ =  this.booksEntityStore.authorBooks(
    this.activateRoute.snapshot.params['id']
  );
  constructor(
    private authorsEntityStore: AuthorsEntityStore,
    private booksEntityStore: BooksEntityStore,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit(): void {
  }
}
