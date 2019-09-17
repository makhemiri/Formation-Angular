import { NgModule } from '@angular/core';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  { path: 'login', component: PageLoginComponent },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(
    appRoutes,
  )
  ]
})
export class LoginRoutingModule { }
