import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorsComponent } from './authors.component';

export enum AuthorRouting {
  All = 'all',
  Detailed = 'detailed',
}

const routes: Routes = [{ 
  path: '', 
  component: AuthorsComponent,
  children: [
    { 
      path: AuthorRouting.All, loadChildren: () => import('./pages/authors-all/authors-all.module')
        .then(m => m.AuthorsAllModule) 
    },
    { 
      path: `${AuthorRouting.Detailed}/:id`, loadChildren: () => import('./pages/authors-details/authors-details.module')
        .then(m => m.AuthorsDetailsModule) 
    },
    { 
      path: '', redirectTo: AuthorRouting.All, pathMatch: 'full', 
    }
  ]
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule],
})
export class AuthorRoutingModule { }
