import { Pipe, PipeTransform } from '@angular/core';
import { Prestation } from '../models/prestation.model';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: Prestation, arg: number): any {
    if (value) {
      if (arg) {
        return value.totalTtc(arg);
      }
      return value.totalHt();
    }
    return null ;
  }
}
