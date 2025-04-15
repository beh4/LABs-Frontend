import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priceFormat'
})
export class PriceFormatPipe implements PipeTransform {
  transform(value: number, currency: string = '₽', decimalPlaces: number = 2): string {
    return `${currency}${value.toFixed(decimalPlaces)}`;
  }
}