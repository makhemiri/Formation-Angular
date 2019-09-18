import { Component, OnInit } from '@angular/core';
import { PrestationsService } from 'src/app/prestations/services/prestations.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public titre: string ;
  public version: number ;
  constructor(private prestationService: PrestationsService) { }

  ngOnInit() {
    this.titre = 'My App';
    this.prestationService.version$.subscribe((data) => {
      this.version = data;
    });
  }

}
