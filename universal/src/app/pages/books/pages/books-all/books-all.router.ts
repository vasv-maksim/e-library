import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksAllComponent } from './books-all.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: BooksAllComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class BooksAllRouterModule { }
