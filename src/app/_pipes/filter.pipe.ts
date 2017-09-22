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
    for (var i = 0; i < startsWith.length; i++) {
      results.push(startsWith[i]);
    }
    for (var j = 0; j < contains.length; j++) {
      results.push(contains[j]);
    }
    return results;
  }
  transform(accounts: any, value: any): any {
    if (value === undefined) return accounts;
    let resultStart = accounts.filter(function (account) {
      if (account.accountId.toLowerCase().startsWith(value.toLowerCase())) {
        if (account.accountId == 'no results found') {
          account.name = "No results found"
          account.address1 = "No results found"
        }
        return account.accountId.toLowerCase().startsWith(value.toLowerCase()) || account.accountId == 'no results found';
      }
      else if (account.name.toLowerCase().startsWith(value.toLowerCase()) &&
        !account.accountId.toLowerCase().startsWith(value.toLowerCase())) {
        if (account.accountId == 'no results found') {
          account.name = "No results found"
          account.address1 = "No results found"
        }
        return account.name.toLowerCase().startsWith(value.toLowerCase()) || account.accountId == 'no results found';
      }
    });
    let resultEnd = accounts.filter(function (account) {
      if (!account.name.toLowerCase().startsWith(value.toLowerCase()) &&
        !account.accountId.toLowerCase().startsWith(value.toLowerCase())) {
        if (account.accountId == 'no results found') {
          account.name = "No results found"
          account.address1 = "No results found"
        }
        return account.name.toLowerCase().includes(value.toLowerCase()) || account.accountId == 'no results found';
      }
    });
    let results = this.returnNewAccountArray(resultStart, resultEnd);
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
  name: 'search_archived',
  pure: false
})

@Injectable()
export class SearchArchived implements PipeTransform {
  vehicles: any;
  transform(items: any, value: any): any {
    if (value === undefined) return items;
    let count = 0;
    let found: any = [];
    let val = value.trim();
    return items.filter(function (item) {
      let match = false;
      if (item.search.prop.toLowerCase().includes(val.toLowerCase())) {
        count = count + 1;
        match = true;
      }
      else {
        match = false;
      }
      if (match) {
        return item;
      }
    });
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