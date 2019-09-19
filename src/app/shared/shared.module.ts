import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './components/button/button.component';
import { TableauComponent } from './components/tableau/tableau.component';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TotalPipe, StateDirective, TableauComponent, ButtonComponent],
  exports: [TotalPipe, StateDirective, TableauComponent, ButtonComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
