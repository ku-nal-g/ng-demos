import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter1'
})
export class Filter1Pipe implements PipeTransform {

  transform(value: any, searchTerm: any): any {
    if(value.length === 0){
      return value;
    }
    return value.filter(function(search:any){
      return search.class_5.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
