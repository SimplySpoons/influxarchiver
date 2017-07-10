import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})

@Injectable()
export class FilterPipe implements PipeTransform {
  results: any; 
  returnNewAccountArray(startsWith: any, contains: any) {
    let results = [];
    for(var i = 0; i < startsWith.length; i ++){
      results.push(startsWith[i]);
    }
    for(var j = 0; j < contains.length; j ++){
      results.push(contains[j]);
    }
    return results; 
  }
  transform(accounts: any, value: any): any {
    if (value === undefined) return accounts;
    let resultStart = accounts.filter(function (account) {
      if(account.accountId.toLowerCase().startsWith(value.toLowerCase())){
          return account.accountId.toLowerCase().startsWith(value.toLowerCase()) || account.accountId == 'no results found';
      }
      else if(account.name.toLowerCase().startsWith(value.toLowerCase()) &&
      !account.accountId.toLowerCase().startsWith(value.toLowerCase())){
        return account.name.toLowerCase().startsWith(value.toLowerCase()) || account.accountId == 'no results found';
      }
    });
    let resultEnd = accounts.filter(function (account) {
      if(!account.name.toLowerCase().startsWith(value.toLowerCase()) &&
      !account.accountId.toLowerCase().startsWith(value.toLowerCase())){
        return account.name.toLowerCase().includes( value.toLowerCase() ) || account.accountId == 'no results found';
      }
    });
    let results = this.returnNewAccountArray(resultStart,resultEnd); 
    return results; 
  }
}
@Pipe({
  name: 'search',
  pure: false
})

@Injectable()
export class SearchPipe implements PipeTransform {
  transform(items: any, value: any): any {
    if (value === undefined) return items;
    return items.filter(function (item) {
      return item.title.toLowerCase().includes(value.toLowerCase()) || value.includes(item.uuid);
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