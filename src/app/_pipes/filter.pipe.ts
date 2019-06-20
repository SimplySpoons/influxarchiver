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
  name: 'searchResults',
  pure: false
})

@Injectable()
export class SearchResultsPipe implements PipeTransform {
  transform(accounts: any, search: any): any {
    if (search === undefined || accounts.length === 0 || search.length === 0) {
      return accounts;
    }
    return accounts.sort((a: any, b: any) => {
      if (a.sum < b.sum) {
        return 1;
      } else if (a.sum > b.sum) {
        return -1;
      } else {
        return 0;
      }
    });
  }
}

@Pipe({
  name: 'invCounts',
  pure: false
})

@Injectable()
export class InventoryCounts implements PipeTransform {
  transform(counts: any): any {
    if(counts === undefined || counts.length === 0) return counts;
    let tmp = [];
    counts.forEach(count=>{
      let i = counts.indexOf(count);
      const d = {name: 'all', data: []}; 
      if(i === 0){
        d.name = 'Used';
      }
      else {
        d.name = 'New';
      }
      d.data = count;
      tmp.push(count);
    })
    return tmp;
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
    if (!config || !counts || config.length === 0) {
      return 0;
    }
    let total = 0;
    const type = config.type - 1;
    const c = config.classification;
    if (!counts[type] || !counts[type][c]) {
      return 0;
    }
    const test = counts[type][c];
    total += Number(test);
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
      const tmp = { name: config.provider, types: config.inventory_types };
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
  name: 'dateFilter',
  pure: false
})
export class DuplicatePipe implements PipeTransform {
  transform(value: string): any {
    if(value.length === 0 || !value){
      return new Date();
    }
    else {
      const d = value.split('_')[0];
      const timestamp = Number(d) * 1000;
      const newDate = new Date(timestamp);
      return newDate;
    }
  }

}
