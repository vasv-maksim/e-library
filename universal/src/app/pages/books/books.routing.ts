import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './books.component';

enum BooksRouting {
  All = 'all',
  Detailed = 'detailed',
}

export const routes: Routes = [{ 
  path: '', 
  component: BooksComponent,
  children: [
    { 
      path: BooksRouting.All, loadChildren: () => import('./pages/books-all/books-all.module')
        .then(m => m.BooksAllModule) 
    },
    { 
      path: BooksRouting.Detailed, loadChildren: () => import('./pages/book-details/books-details.module')
        .then(m => m.BooksDetailsModule) 
    },
    { 
      path: '', redirectTo: BooksRouting.All, pathMatch: 'full',
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class BooksRoutingModule { }
