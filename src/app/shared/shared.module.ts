import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StateDirective } from './directives/state.directive';
import { TotalPipe } from './pipes/total.pipe';



@NgModule({
  declarations: [TotalPipe, StateDirective],
  exports: [TotalPipe, StateDirective],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
