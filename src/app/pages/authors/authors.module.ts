import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorRoutingModule } from './author.routing';
import { AuthorsComponent } from './authors.component';

@NgModule({
  imports: [
    CommonModule,
    AuthorRoutingModule,
  ],
  declarations: [
    AuthorsComponent,
  ],
})
export class AuthorsModule { }
