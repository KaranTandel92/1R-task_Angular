import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, searchName: any): any {

    if (value) {
      return value
    }

    return value.filter(function (search: any) {
      return search.employeeName.toLowerCase().indexOf(searchName.toLowerCase()) > -1
    });
  }

}
