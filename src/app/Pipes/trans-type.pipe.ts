import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transType'
})
export class TransTypePipe implements PipeTransform {

  transform(value: number): string {
    let transType;
    switch (value)
    {
      case 1:transType="AUTH";break;
      case 2:transType="COMMIT";break;
      default:transType="REFUND";break;
    }
    return transType;
  }

}
