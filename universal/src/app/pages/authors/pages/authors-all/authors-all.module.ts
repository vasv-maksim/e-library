import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsAllComponent } from './authors-all.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: AuthorsAllComponent },
];

@NgModule({
  declarations: [
    AuthorsAllComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    AuthorsAllComponent,
  ],
})
export class AuthorsAllModule { }
