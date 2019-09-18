import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { StateClient } from 'src/app/shared/enums/state-client.enum';
import { Client } from 'src/app/shared/models/client.model';

@Component({
  selector: 'app-item-client',
  templateUrl: './item-client.component.html',
  styleUrls: ['./item-client.component.scss']
})
export class ItemClientComponent implements OnInit {
  @Input() item: Client;
  @Output() nItem: EventEmitter<{item: Client , 'state': StateClient}> = new EventEmitter();
  public states = StateClient;
  constructor() { }

  ngOnInit() {
  }

  changeState(event) {
    this.nItem.emit({ item: this.item , state: event.target.value });
  }
}
