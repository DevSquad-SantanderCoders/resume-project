import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone',
})
export class TelefonePipe implements PipeTransform {
  transform(value: string): string {
    if (!value) {
      return '';
    }

    const phoneNumber = value.replace(/\D/g, '');

    if (phoneNumber.length === 11) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
        2,
        7
      )}-${phoneNumber.slice(7)}`;
    } else if (phoneNumber.length === 10) {
      return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
        2,
        6
      )}-${phoneNumber.slice(6)}`;
    } else {
      return value;
    }
  }
}
