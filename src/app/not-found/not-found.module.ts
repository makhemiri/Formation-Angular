import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesNotFoundComponent } from './pages/pages-not-found/pages-not-found.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';



@NgModule({
  declarations: [PagesNotFoundComponent, PageNotFoundComponent],
  imports: [
    CommonModule
  ]
})
export class NotFoundModule { }
