import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRouting } from './app-routing.enum';

const routes: Routes = [
  { path: '', redirectTo: AppRouting.Books, pathMatch: 'full' },
  { path: AppRouting.Books, loadChildren: () => import('../pages/books/books.module').then(m => m.BooksModule) },
  { path: AppRouting.Authors, loadChildren: () => import('../pages/authors/authors.module').then(m => m.AuthorsModule) },
  { path: AppRouting.About, loadChildren: () => import('../pages/about/about.module').then(m => m.AboutModule) },
  { path: '**', loadChildren: () => import('../pages/not-found-404/not-found-404.module').then(m => m.NotFound404Module) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
