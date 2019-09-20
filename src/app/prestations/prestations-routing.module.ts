import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddPrestationComponent } from './pages/page-add-prestation/page-add-prestation.component';
import { PageEditPrestationComponent } from './pages/page-edit-prestation/page-edit-prestation.component';
import { PagePrestationsComponent } from './pages/page-prestations/page-prestations.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PagePrestationsComponent,
    data: { title: 'Prestations', txt: 'Toutes les prestations', intitule: 'Add Prestation' }
  },
  { path: 'add', component: PageAddPrestationComponent },
  { path: 'edit/:id', component: PageEditPrestationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(
    appRoutes,
  )
  ],
  exports: [RouterModule]
})
export class PrestationsRoutingModule { }
