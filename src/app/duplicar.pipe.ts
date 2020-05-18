import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duplicar'
})
export class DuplicarPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value*2;
  }

}
