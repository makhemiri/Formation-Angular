import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';

import { fakePrestations } from './fake-prestatations';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  public version$ = new BehaviorSubject(1);
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  // propriete private collection
  private pCollection: Observable<Prestation[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection = this.itemsCollection.valueChanges().pipe(
     // map(tab => tab.map(obj => new Prestation(obj));  ====>  lambda  expression  ES6
      map( (tab) => {
        return tab.map((obj) => {
          return new Prestation(obj);
        });
      })
    );
    // this.collection = fakePrestations ;
  }

  // get collection
  get collection(): Observable<Prestation[]> {
    return this.pCollection;
  }
  // set collection
  set collection(col: Observable<Prestation[]>) {
    this.pCollection = col;
  }
  // add item in collection

  public add(item: Prestation) {
   // this.collection.push(new Prestation(item));
    console.log(this.collection);
  }
  // update item in collection
  public update(item: Prestation, state: State) {
    item.state = state;
  }

  // set item bu id from collection
}
