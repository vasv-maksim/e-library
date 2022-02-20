import { Component, OnInit } from '@angular/core';
import { AuthorsEntityStore } from '../../state/author.store'

@Component({
  selector: 'app-authors-all',
  templateUrl: './authors-all.component.html',
  styleUrls: ['./authors-all.component.scss']
})
export class AuthorsAllComponent implements OnInit {

  constructor(private authorsEntityStore: AuthorsEntityStore) { }

  ngOnInit(): void {}
  
  authors$  = this.authorsEntityStore.selectAll();

}
