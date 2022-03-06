import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorsDetailsComponent } from './authors-details.component';
import { AuthorsDetailsRouterModule } from './authors-details.router';

@NgModule({
  declarations: [
    AuthorsDetailsComponent,
  ],
  imports: [
    CommonModule,
    AuthorsDetailsRouterModule,
  ],
  exports: [
    AuthorsDetailsComponent,
  ],
})
export class AuthorsDetailsModule { }
