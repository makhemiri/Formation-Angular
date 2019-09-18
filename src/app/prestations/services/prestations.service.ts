import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { fakePrestations } from './fake-prestatations';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  public version$ = new BehaviorSubject(1);

  // propriete private collection
  private pCollection: Prestation[] ;

  constructor() {
    this.collection = fakePrestations;
  }

  // get collection
get collection(): Prestation[] {
  return this.pCollection ;
}
  // set collection
set collection(col: Prestation[]) {
  this.pCollection = col;
}
  // add item in collection

  // update item in collection
  public update(item: Prestation , state: State) {
    console.log('avant =>', item);
    item.state = state;
    console.log('apres=>', item);
  }

  // set item bu id from collection
}
