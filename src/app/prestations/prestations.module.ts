import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesPrestationsComponent } from './pages/pages-prestations/pages-prestations.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';



@NgModule({
  declarations: [PagesPrestationsComponent, PagePrestationsComponent],
  imports: [
    CommonModule
  ]
})
export class PrestationsModule { }
