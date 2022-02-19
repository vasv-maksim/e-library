import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFound404Component } from './not-found-404.component';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [{ 
  path: '', 
  component: NotFound404Component,
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
})
export class NotFound404RouterModule { }
