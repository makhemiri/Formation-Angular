import { Pipe, PipeTransform } from '@angular/core';
import { Prestation } from '../models/prestation.model';
import { of } from 'rxjs';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Prestation, ...args: any[]): any {
    console.log('value =>', value );
    if (value) {
      return value.totalHt();
    }
    return null ;
  }
}
