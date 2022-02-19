import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookDetailsComponent } from './book-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BookDetailsComponent },
];

@NgModule({
  declarations: [
    BookDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    BookDetailsComponent,
  ],
})
export class BooksDetailsModule { }
