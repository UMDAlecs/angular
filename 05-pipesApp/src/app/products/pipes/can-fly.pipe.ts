import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class CanFLyPipe implements PipeTransform {
  transform(value: boolean): 'can fly'|"can't fly" {
    return value ? 'can fly' : "can't fly";
  }
}
