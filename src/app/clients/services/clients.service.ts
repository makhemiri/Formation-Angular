import { Injectable } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.model';
import { fakeClients } from './fake-clients';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {
  private pCollection: Observable<Client[]>;
  private itemsCollection: AngularFirestoreCollection<Client>;




  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Client>('clients');
    this.collection = this.itemsCollection.valueChanges().pipe(
      // map(tab => tab.map(obj => new Prestation(obj));  ====>  lambda  expression  ES6
      map((tab) => {
        return tab.map((obj) => {
          return new Client(obj);
        });
      })
    );
    //this.collection = fakeClients;
  }


  // get collection
  get collection(): Observable<Client[]> {
    return this.pCollection;
  }
  // set collection
  set collection(col: Observable<Client[]>) {
    this.pCollection = col;
  }
  public update(item: Client, state?: StateClient): Promise<any> {
    const client  = {...item};
    if (state) {
      client.state = state;
    }
    return this.itemsCollection.doc(item.id).update(client).catch((e) => {
      console.log(e);
    });
  }
}
