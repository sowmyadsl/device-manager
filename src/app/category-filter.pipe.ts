import { Pipe, PipeTransform } from '@angular/core';
import { Device } from './device.model';

@Pipe({
  name: 'categoryFilter'
})
export class CategoryFilterPipe implements PipeTransform {

  transform(input: Device[], content) {
      var output: Device[] = [];
      if(content === "allCategories") {
        return input;
      }
      else {
        for(var i = 0; i < input.length; i++){
          if(input[i].status.toLowerCase() === content.toLowerCase()){
          output.push(input[i]);
        }
      }
      return output;
      }
    }
  }
