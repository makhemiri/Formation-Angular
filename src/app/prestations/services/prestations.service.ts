import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { HttpClient } from '@angular/common/http';
import { fakePrestations } from './fake-prestatations';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  public version$ = new BehaviorSubject(1);
  private itemsCollection: AngularFirestoreCollection<Prestation>;
  // propriete private collection
  private pCollection: Observable<Prestation[]>;
  private urlApi = environment.urlApi;

  constructor(private afs: AngularFirestore , private http: HttpClient) {
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection = this.itemsCollection.valueChanges().pipe(
     // map(tab => tab.map(obj => new Prestation(obj));  ====>  lambda  expression  ES6
      map( (tab) => {
        return tab.map((obj) => {
          return new Prestation(obj);
        });
      })
    );
    // return this.http.get(`${this.urlApi}collection`);  << appel http
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
  /*
  // add item in collection

  public add(item: Prestation) {
   // this.collection.push(new Prestation(item));
    console.log(this.collection);
  }
  // update item in collection
  public update(item: Prestation, state: State) {
    item.state = state;
  }

  // set item bu id from collection*/

  add(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection.doc(id).set(prestation).catch((e) => {
      console.log(e);
    });
    // return this.http.post(`${this.urlApi}collection` , item);
  }

  update(item: Prestation, state?: State): Promise<any> {
    const presta  = {...item};
    if (state) {
      presta.state = state;
    }
    return this.itemsCollection.doc(item.id).update(presta).catch((e) => {
      console.log(e);
    });
    // return this.http.patch(`${this.urlApi}collection`, presta);
  }

  public delete(item: Prestation): Promise<any> {
    return this.itemsCollection.doc(item.id).delete().catch((e) => {
      console.log(e);
    });
    // return this.http.delete(`${this.urlApi}collection/${item.id}`);
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`${this.urlApi}collection/${id});
  }

}
