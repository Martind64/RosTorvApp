import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the Formatstore pipe.
 *
 * See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
 * Angular Pipes.
 */
@Pipe({
  name: 'formatstore',
})
export class Formatstore implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string) {
  	let result = value.replace(/[_]/g, ' ');
  	return result;
  }
}
