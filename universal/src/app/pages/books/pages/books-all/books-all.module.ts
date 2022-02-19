import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksAllComponent } from './books-all.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BooksAllComponent },
];

@NgModule({
  declarations: [
    BooksAllComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    BooksAllComponent,
  ],
})
export class BooksAllModule { }
