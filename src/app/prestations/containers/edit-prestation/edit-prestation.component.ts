import { Component, Input, OnInit } from '@angular/core';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationsService } from '../../services/prestations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-prestation',
  templateUrl: './edit-prestation.component.html',
  styleUrls: ['./edit-prestation.component.scss']
})
export class EditPrestationComponent implements OnInit {
  @Input() item: Prestation;
  constructor(private prestationsService: PrestationsService, private router: Router) {}

  ngOnInit() {
  }

  onSubmit(item: Prestation) {
    // tslint:disable-next-line: no-string-literal
    item['item'].id = this.item.id;
    // tslint:disable-next-line: no-string-literal
    this.prestationsService.update(item['item']).then(() => {
      this.router.navigate(['prestations']);
    });
  }
}
