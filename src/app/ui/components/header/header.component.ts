import { Component, OnInit } from '@angular/core';
import { PrestationsService } from 'src/app/prestations/services/prestations.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public titre: string ;
  public version: number ;
  constructor(private prestationService: PrestationsService) { }

  ngOnInit() {
    this.titre = 'My App';
    this.prestationService.version$.subscribe((data) => {
      this.version = data;
    });
  }
  incrementeVersion() {
    this.prestationService.version$.next(this.version + 1);
  }
}
