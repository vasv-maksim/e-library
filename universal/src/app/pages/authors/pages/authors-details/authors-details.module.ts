import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsDetailsComponent } from './authors-details.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AuthorsDetailsComponent },
];

@NgModule({
  declarations: [
    AuthorsDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    AuthorsDetailsComponent,
  ],
})
export class AuthorsDetailsModule { }
