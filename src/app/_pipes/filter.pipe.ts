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
    if (value === undefined || accounts === undefined || accounts.length === 0) {
      return accounts;
    }
    return accounts.filter(function (account) {
      return account;
    });
  }
}
@Pipe({
  name: 'search',
  pure: false
})

@Injectable()
export class SearchPipe implements PipeTransform {
  transform(items: any, value: any): any {
    if (value === undefined || items === undefined || items.length === 0) {
      return items;
    }
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
      const keys = Object.keys(item);
      let keyString = " ";
      keys.forEach((key) => {
        keyString += item[key] + " ";
      });
      const bool = keyString.toLowerCase().includes(value.toLowerCase());
      return bool;
    });
  }
}

@Pipe({
  name: 'countFilter',
  pure: false
})

@Injectable()
export class countFilter implements PipeTransform {
  transform(counts: number, config: any): any {
    if (config === undefined || counts === undefined || counts === 0) {
      return 0;
    }
    let total = 0;
    if (config.type == 1) {
      const vals = counts[0].data;
      vals.forEach(val => {
        if (config.classification == val.classification) {
          total += Number(val.count);
        }
      });
    } else {
      const vals = counts[1].data;
      vals.forEach(val => {
        if (config.classification == val.classification) {
          total += Number(val.count);
        }
      });
    }
    return total;
  }
}

@Pipe({
  name: 'feed',
  pure: false
})

@Injectable()
export class FeedPipe implements PipeTransform {
  transform(configs: any): any {
    if (configs === undefined) {
      return false;
    }
    const arr = [];
    configs.forEach(config => {
      const tmp = {name: config.provider, types: config.inventory_types};
      arr.push(tmp);
    });
    return arr;
  }
}

@Pipe({
  name: 'format',
  pure: false
})

@Injectable()
export class FormatPipe implements PipeTransform {
  vehicles: any;
  transform(items: any, headers: any): any {
    if (items.length === 0 || items === undefined) return items;
    if (headers === undefined || headers.length === 0) return items;
    const vehices = [];
    items.forEach(item => {
      let tmp = {};
      for (let i = 0; i < headers.length; i++) {
        const col = headers[i];
        const val = item[i];
        tmp[col] = val;
      }
      vehices.push(tmp);
    });
    return vehices;
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
      }
      i++;
    }
    return resultArray;
  }

}
