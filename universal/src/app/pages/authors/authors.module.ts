import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorRoutingModule } from './routing/author-routing.module';
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
