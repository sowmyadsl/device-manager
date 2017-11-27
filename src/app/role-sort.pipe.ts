import { Pipe, PipeTransform } from '@angular/core';
import { Device } from './device.model';

@Pipe({
  name: 'roleSort'
})

export class RoleSortPipe implements PipeTransform {
  transform(input: Device[], condition: string) {
   var output: Device[] = [];
   if (condition === "allRoles" || !condition) {
     return input;
   }
   else {
     for (var i = 0; i < input.length; i++) {
       if (input[i].role === condition) {
         output.push(input[i]);
       }
     }
     return output;
   }
  }
}
