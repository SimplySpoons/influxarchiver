import { Injectable, Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'feedSearch'
})
export class feedSearch implements PipeTransform {
    transform(value: any, args: string[]): any {
        let filter = args[0];

        if (filter && Array.isArray(value)) {
            let filterKeys = Object.keys(filter);
            return value.filter(item => filterKeys.reduce((key, keyName) => key && item[keyName].toUpperCase() === filter[keyName].toUpperCase(), true));
        }
        // new case !
        else if (filter && typeof value === 'string') {
            return value.toUpperCase().indexOf(filter.toUpperCase()) >= 0 ? value : '';
        }
        else {
            return value;
        }
    }
}