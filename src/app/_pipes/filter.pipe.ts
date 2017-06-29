import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})

@Injectable()
export class FilterPipe implements PipeTransform {
  transform(analysts: any, value: any): any {
    if (value === undefined) return analysts;
    return analysts.filter(function (analyst) {
      return analyst.fullName.toLowerCase().includes(value.toLowerCase());
    })
  }
}

@Pipe({
  name: 'dupfilter',
  pure: false
})
export class DuplicatePipe implements PipeTransform {
  transform(value: any, args?: any): any {

    if (value.length === null) {
      return value;
    }

    // Remove the duplicate elements
    let uniqueArray = value.filter(function (el, index, array) {
      return array.indexOf(el) == index;
    });

    // Loop the array with uniq elements
    let resultArray = [];
    let i = 0;
    for (let item of uniqueArray) {
      // Validate only these elements that starts with the passed string
      if (i == 0) {
        resultArray.push(item);
      }
      else if (item.fullName != uniqueArray[i - 1].fullName) {
        resultArray.push(item);
      }
      else {
        //console.log('item was not pushed',item); 
      }
      i++;
    }
    return resultArray;
  }
}