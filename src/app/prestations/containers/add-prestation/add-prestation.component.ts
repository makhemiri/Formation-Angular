import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss'],
})
export class AddPrestationComponent implements OnInit {

  constructor(private prestationsService: PrestationsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onSubmit(obj) {
    this.prestationsService.add(obj.item);
    // this.router.navigate(['/prestations']);
    this.router.navigate(['../'], {relativeTo :  this.route});

  }
}
