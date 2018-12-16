import { Pipe, PipeTransform } from '@angular/core';
import timeago from 'timeago.js';

@Pipe({
  name: 'time'
})
export class TimePipe implements PipeTransform {

  transform(value: any) {
    return timeago().format(value)
  }
 

}
