import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'color'
})
export class ColorPipe implements PipeTransform {

  transform(cars: any, args?: any): any {
    return cars.filter(car => car.color ==='blue');
  }

}