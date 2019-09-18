import { Injectable } from '@angular/core';
import { Client } from 'src/app/shared/models/client.model';
import { fakeClients } from './fake-clients';
import { StateClient } from 'src/app/shared/enums/state-client.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private pCollection: Client[] ;
  constructor() {
    this.collection = fakeClients;
    }

  // get collection
get collection(): Client[] {
  return this.pCollection ;
}
  // set collection
set collection(col: Client[]) {
  this.pCollection = col;
}
public update(item: Client , state: StateClient) {
  item.state = state;
}
}
