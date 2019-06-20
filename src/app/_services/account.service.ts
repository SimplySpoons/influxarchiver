import { Subject } from 'rxjs/Rx';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response, ResponseType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { AppConfig } from '../app.config';
import { Account } from '../_models/account';
import { Provider } from '../_models/provider';
@Injectable()
export class AccountService {
  API_URL: string;
  account: Account;
  sendAccountChange = new EventEmitter<any>();

  SearchTerm: Subject<string> = new Subject<string>();


  isLoading: Subject<boolean> = new Subject<boolean>();
  constructor(private conf: AppConfig, private http: Http) {
    this.API_URL = this.conf.API_CONFIG();
    this.conf.currentAcouunt.subscribe(account => {
        this.setCurrentAccount(account);
    });
  }

  getAccountData(accountId: string) {
    return this.http.get(this.API_URL + '/api/nexus/' + accountId + '/account_info').map(
      (response: Response) => response.json())
  }

  getApiConfigs(accountId: string) {
    return this.http.get(this.API_URL + '/api/nexus/' + accountId + '/api_configs').map(
      (response: Response) => {
        let d = response.json();
        console.log(d);
        d = d.data;
        return d;
      });
  }

  getAccountVehicles(accountId: string, type: any, classification: any, offset: any) {
    if (!type) {
      type = 0;
    }
    if (!classification) {
      classification = 0;
    }
    if (!offset) {
      offset = 0;
    }
    const params = `type:${type},classification:${classification},offset:${offset}`;
    return this.http.get(this.API_URL + `/api/vehicle/${accountId}/getAccountVehicles/${params}`).map(
      (response: Response) => response);
  }

  getInfluxConfigs(accountId: string) {
    return this.http.get(this.API_URL + `/api/influx/${accountId}/influx_configs`).map(
      (response: Response) => {
        return response.json();
      });
  }

  getInfluxFeed(fileRequest: any) {
    return this.http.post(this.API_URL + '/influx.php', { request: "getInfluxFeed", fileRequest: fileRequest }
    ).map(
      (response: Response) => response.json());
  }
  getUpdatedFeed(fileRequest: any) {
    return this.http.post(this.API_URL + '/api/archives/getfeed',
      {
        request: "getUpdatedFeed",
        fileRequest: fileRequest
      }
    ).map((response: Response) => {
      console.log(response);
      return response.json()
    });
  }

  testGet() {
    return this.http.get(this.API_URL + '/api/nexus/get/10/friends').map(
      res => {
        res.json();
        console.log(res);
      },
      err => {
        console.log(err);
      });
  }

  testPost() {
    return this.http.post(this.API_URL + '/api/nexus', { testing: 'true' }).map(
      res => {
        res.json()
      },
      err => {
        console.log(err);
      });
  }

  getHeaders(params) {
    return this.http.get(this.API_URL + '/api/archives/'
      + params.accountId + '/' + params.provider + '/' + params.filename + '/' + params.providerId + '/header_map')
      .map(
        res => res.json());
  }
  getFileList(accountId: string, parser: string, providerId: string = null) {
    // tslint:disable-next-line:max-line-length
    return this.http.post(this.API_URL + '/influx.php', { request: "getFileList", accountId: accountId, parser: parser, providerId: providerId }
    ).map(
      (response: Response) => response.json());
  }

  getFilters(params) {
    return this.http.get(this.API_URL + '/api/archives/'
      + params.accountId + '/' + params.provider + '/' + params.filename + '/' + params.providerId + '/get_config_data')
      .map(
        res => res.json());
  }

  getInvCounts(accountId: string) {
    return this.http.get(this.API_URL + '/api/nexus/' + accountId + '/inventory_counts').map(
      (response: Response) => response.json().data);
  }
  setCurrentAccount(account: any) {
    this.account = account;
    this.sendAccountChange.emit(this.account);
  }
  getCurrentAccount() {
    return this.conf.currentAcouunt;
  }
  // getCurrentProvider() {
  //     return this.provider;
  // }
  search(params: Observable<any>) {
    return params.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(param =>
        this.searchForAcct(param,param.foundList)
      );
  }
  searchForAcct(name,foundList = []) {
    const ignore = foundList.toString();
    console.log(ignore);
    return this.http.post(this.API_URL + '/api/nexus/search?term=' + name.term, {ignore: ignore}).map(
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

  call(): Observable<any> {
    const username = 'XX_019';
    const password = 'XX_020';
    const headers: Headers = new Headers();
    headers.append("Authorization", "Basic " + btoa(username + ":" + password));
    headers.append("Content-Type", "application/x-www-form-urlencoded");
    // tslint:disable-next-line:max-line-length
    return this.http.get('XX_014', { headers: headers }).map(
      res => {
        console.log(res);
      },
      err => {
        console.log(err);
      })
  }
}
