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
  }
  getAccountData(accountId: string) {
    return this.http.post(this.API_URL + 'account.php', { request: "getAccountData", accountId: accountId }).map(
      (response: Response) => response.json());
  }
  getAccountVehicles(accountId: string, type: any, classification: any, offset: any) {
    return this.http.post(this.API_URL + 'vehicle.php', { request: "getAccountVehicles", accountId: accountId, type: type, classification: classification, offset: offset }).map(
      (response: Response) => response);
  }
  getInfluxConfigs(accountId: string) {
    return this.http.post(this.API_URL + 'influx.php', { request: "getInfluxConfigs", accountId: accountId }).map(
      (response: Response) => response.json());
  }
  getInfluxFeed(accountId: string, parser: string, timestamp: string, filename: string, providerid: string) {
    return this.http.post(this.API_URL + 'influx.php', { request: "getInfluxFeed", accountId: accountId, parser: parser, timestamp: timestamp, filename: filename, providerid: providerid }
    ).map(
      (response: Response) => response.json());
  }
  getUpdatedFeed(parser: string, filename: string, accountId = null, providerId = null, offset = 0, fileIndex = 0, full = false) {
    return this.http.post(this.API_URL + 'influx.php',
    { request: "getUpdatedFeed",
      parser: parser,
      filename: filename,
      accountId: accountId,
      providerId: providerId,
      offset: offset,
      fileIndex: fileIndex,
      full: full }
    ).map((response: Response) => response.json());
  }
  getHeaders(parser: string) {
    return this.http.post(this.API_URL + 'influx.php', { request: "getHeaders", parser: parser }
    ).map(
      (response: Response) => response.json());
  }
  getFileList(accountId: string, parser: string, providerId: string = null) {
    // tslint:disable-next-line:max-line-length
    return this.http.post(this.API_URL + 'influx.php', { request: "getFileList", accountId: accountId, parser: parser, providerId: providerId }
    ).map(
      (response: Response) => response.json());
  }
  getFilters(accountId: string, parser: string) {
    return this.http.post(this.API_URL + 'influx.php', { request: "getFilters", accountId: accountId, parser: parser }).map((response: Response) => response.json());
  }
  getInvCounts(accountId: string) {
    return this.http.post(this.API_URL + 'vehicle.php', { request: "getInvCounts", accountId: accountId }).map(
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
