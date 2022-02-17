import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter1'
})
export class Filter1Pipe implements PipeTransform {

  transform(value: any, searchTerm: string): string {
    if(value.length === 0){
      return value;
    }
    return value.filter(function(search:any){
      return search.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }

}
