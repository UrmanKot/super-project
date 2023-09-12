import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lpad',
  standalone: true,
})
export class LeftPadPipe implements PipeTransform {

  transform(value: any, ...args: any[]): string {
    value = value.toString();
    const size = Math.max(parseInt(args[1]) - value.length, 0);
    for (let i = 0; i < size; i++) {
        value = `${args[0]}${value}`;
    }
    return value;
  }

}
