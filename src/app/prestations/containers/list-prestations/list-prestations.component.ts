import { Component, OnInit, OnDestroy } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationsService } from '../../services/prestations.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit, OnDestroy {
  public collection$: Observable<Prestation[]>;
  public tableHeader: string[];
  // private sub: Subscription;
  constructor(private prestationsService: PrestationsService) { }

  ngOnInit() {
    this.collection$ = this.prestationsService.collection;
    // this.sub = this.prestationsService.collection.subscribe((data) => {
    //   this.collection = data ;
    // });
    this.tableHeader = ['Type', 'Client', 'NbJour', 'Tjm Ht', 'Total HT', 'Total TTC', 'State'];
  }
  changeState(obj: { 'item': Prestation, 'state': State }) {
    this.prestationsService.update(obj.item, obj.state).then(() => {
      obj.item.state = obj.state ;
    });
    // this.prestationsService.update(obj.item, obj.state).subscribe((res) => {
    //   // res = reponse de l'api
    //   obj.item.state = obj.state ;
    // });
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
