import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'moneyFormat'
})
export class MoneyFormatPipe implements PipeTransform {

  transform(value: number, ...args: any[]): string {
    return parseFloat(value as any).toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1 ').split('.').join(',');
  }
}
