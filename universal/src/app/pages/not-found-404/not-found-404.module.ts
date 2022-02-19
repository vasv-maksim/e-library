import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFound404Component } from './not-found-404.component';
import { NotFound404RouterModule } from './not-found-404.router';

@NgModule({
  declarations: [
    NotFound404Component,
  ],
  imports: [
    CommonModule,
    NotFound404RouterModule,
  ],
})
export class NotFound404Module { }
