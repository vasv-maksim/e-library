import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsAllComponent } from './authors-all.component';
import { AuthorsAllRouterModule } from './authors-all.router';

@NgModule({
  declarations: [
    AuthorsAllComponent,
  ],
  imports: [
    CommonModule,
    AuthorsAllRouterModule,
  ],
  exports: [
    AuthorsAllComponent,
  ],
})
export class AuthorsAllModule { }
