import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClientsRoutingModule } from './clients-routing.module';
import { PageClientsComponent } from './pages/page-clients/page-clients.component';
import { SharedModule } from '../shared/shared.module';
import { ItemClientComponent } from './components/item-client/item-client.component';
import { ListClientsComponent } from './containers/list-clients/list-clients.component';



@NgModule({
  declarations: [PageClientsComponent, ItemClientComponent, ListClientsComponent],
  imports: [
    CommonModule,
    ClientsRoutingModule,
    SharedModule
  ]
})
export class ClientsModule { }
