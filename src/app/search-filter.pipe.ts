import { Pipe, PipeTransform } from '@angular/core';
import { Device } from './device.model';

@Pipe({
  name: 'searchFilter',
  pure: false
})

export class SearchFilterPipe implements PipeTransform {
  transform(input: Device[], subject){
    var output: Device[] = [];
    if(subject === "name") {
      for(var i = 0; i < input.length; i++){
        if(input[i].name === "Name"){
          output.push(input[i]);
        }
      }
      return output;
    }
  }
}
