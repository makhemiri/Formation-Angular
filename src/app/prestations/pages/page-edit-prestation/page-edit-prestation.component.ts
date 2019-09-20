import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Prestation } from 'src/app/shared/models/prestation.model';
import { PrestationsService } from '../../services/prestations.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-page-edit-prestation',
  templateUrl: './page-edit-prestation.component.html',
  styleUrls: ['./page-edit-prestation.component.scss']
})
export class PageEditPrestationComponent implements OnInit {
  public item$: Observable<Prestation>;
  public title = 'Prestations';
  public txt = 'Modifier une prestation';
  constructor(private route: ActivatedRoute, private prestationsService: PrestationsService) { }

  ngOnInit() {
    // tslint:disable-next-line: no-string-literal
    // this.route.paramMap.subscribe((data) => {
    //   const id = data.get('id');
    //   this.item$ = this.prestationsService.getPrestation(id);
    // });
    this.item$ = this.route.paramMap.pipe(
      switchMap((params) => {
        return this.prestationsService.getPrestation(params.get('id'));
      })
    );
  }
}
