import { Component, OnInit } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.model';
import { ClientsService } from '../../services/clients.service';

@Component({
  selector: 'app-list-clients',
  templateUrl: './list-clients.component.html',
  styleUrls: ['./list-clients.component.scss']
})
export class ListClientsComponent implements OnInit {
  public collection: Client[];
  public tableHeader: string[] ;
  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.collection = this.clientsService.collection;
    this.tableHeader = ['Client', 'Email', 'State'];
  }

  changeState(obj: {'item': Client , 'state': StateClient}) {
    // console.log('event', obj);
    this.clientsService.update(obj.item, obj.state);

  }
}
