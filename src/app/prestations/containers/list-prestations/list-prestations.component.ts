import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/shared/enums/state.enum';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-list-prestations',
  templateUrl: './list-prestations.component.html',
  styleUrls: ['./list-prestations.component.scss']
})
export class ListPrestationsComponent implements OnInit {
  public collection: Prestation[];
  public tableHeader: string[] ;
  constructor(private prestationsService: PrestationsService) { }

  ngOnInit() {
    this.collection = this.prestationsService.collection;
    this.tableHeader = ['Type', 'Client', 'NbJour', 'Tjm Ht', 'Total HT', 'Total TTC', 'State'];
  }
  changeState(obj: {'item': Prestation , 'state': State}) {
    // console.log('event', obj);
    this.prestationsService.update(obj.item, obj.state);

  }
}
