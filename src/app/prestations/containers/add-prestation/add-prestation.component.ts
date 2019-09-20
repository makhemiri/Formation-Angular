import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PrestationsService } from '../../services/prestations.service';

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
    this.prestationsService.add(obj.item).then(() => {
      // this.router.navigate(['/prestations']);
      this.router.navigate(['../'], { relativeTo: this.route });
    });

    // this.prestationsService.add(obj.item).subscribe((data) => { // >> pour l'appel http
    //   console.log(data) ;
    //   this.router.navigate(['../'], {relativeTo :  this.route});
    // });

  }
}
