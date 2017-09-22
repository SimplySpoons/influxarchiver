import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { AppConfig } from '../app.config';
import { Account } from '../_models/account';
@Injectable()
export class AccountService {
    API_URL: string;
    account: Account;
    sendAccountChange = new EventEmitter<any>();
    constructor(private conf: AppConfig, private http: Http) {
        this.API_URL = this.conf.API_CONFIG();
        //this.API_URL = 'http://localhost:6969/hotdog/php/';
    }
    getAccountData(accountId: string) {
        return this.http.post(this.API_URL + 'account.php', { request: "getAccountData", accountId: accountId }).map(
            (response: Response) => response.json());
    }
    getAccountVehicles(accountId: string, type: any, classification: any, offset: any) {
        console.log('hitting');
        return this.http.post(this.API_URL + 'vehicle.php', { request: "getAccountVehicles", accountId: accountId, type: type, classification: classification, offset: offset }).map(
            (response: Response) => response);
    }
    getInfluxConfigs(accountId: string) {
        return this.http.post('http://localhost:6969/influx.php', { request: "getInfluxConfigs", accountId: accountId }).map(
            (response: Response) => response.json());
    }
    getInfluxFeed(accountId: string, parser: string, timestamp: string, filename: string, providerid: string ) {
        return this.http.post('http://localhost:6969/influx.php', { request: "getInfluxFeed", accountId: accountId, parser: parser, timestamp: timestamp, filename: filename, providerid: providerid }
        ).map(
            (response: Response) => response.json());
    }
    getHeaders(parser: string) {
        return this.http.post('http://localhost:6969/influx.php', { request: "getHeaders", parser: parser}
        ).map(
            (response: Response) => response.json());
    }
    getFilters(accountId: string, parser: string) {
         return this.http.post('http://localhost:6969/influx.php', { request: "getFilters", accountId: accountId, parser: parser}).map((response: Response) => response.json()); 
    }
    getInvCounts(accountId: string) {
        console.log('hitting service');
        return this.http.post(this.API_URL + 'http://localhost:6969/vehicle.php', { request: "getInvCounts", accountId: accountId }).map(
            (response: Response) => response.json());
    }
    setCurrentAccount(account: any) {
        this.account = account;
        this.sendAccountChange.emit(this.account);
    }
    getCurrentAccount() {
        return this.account;
    }
    // getCurrentProvider() {
    //     return this.provider;
    // }
    search(names: Observable<string>) {
        return names.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(name => this.searchForAccount(name));
    }
    searchForAccount(name) {
        return this.http.post(this.API_URL + 'account.php', { request: "searchForAccount", search: name }).map(
            (response: Response) => response.json());
    }
    searchVehicle(term: Observable<string>, accountId: any) {
        return term.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(term => this.searchForItem(term, accountId));
    }
    searchForItem(term, accountId) {
        if (term.includes('http')) {
            let uuid = term.match(/.*([0-9a-f]{32})\.htm$/);
            if (uuid) {
                term = uuid[1];
            }
        }
        return this.http.post(this.API_URL + 'vehicle.php', { request: "searchForItem", search: term, accountId: accountId }).map(
            (response: Response) => response.json());
    }
    searchByVin(term: any) {
        return this.http.post(this.API_URL + 'vehicle.php', { request: "searchByVin", search: term }).map(
            (response: Response) => response.json());
    }
    getApiConfigs(accountId: any) {
        return this.http.post(this.API_URL + 'account.php', { request: "getApiConfigs", accountId: accountId }).map(
            (response: Response) => response.json());
    }
}