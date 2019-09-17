import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { NotFoundRoutingModule } from './not-found-routing.module';



@NgModule({
  declarations: [PageNotFoundComponent],
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }
