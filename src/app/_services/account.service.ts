import { Injectable } from '@angular/core';
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
  constructor(private conf: AppConfig, private http: Http) { 
      this.API_URL = this.conf.API_CONFIG(); 
  }

   getAccountData(accountId: string) {
        return this.http.post(this.API_URL + '/account.php', { request: "getAccountData", accountId: accountId }).map(
            (response: Response) => response.json()); 
    }

    getAccountVehicles(accountId: string, type: any, classification: any) {
        return this.http.post(this.API_URL + '/vehicle.php', { request: "getAccountVehicles", accountId: accountId, type: type, classification: classification }).map(
            (response: Response) => response.json());
    }

    getInfluxConfigs(accountId: string) {
        return this.http.post('http://localhost:6969/influx.php', { request: "getInfluxConfigs", accountId: accountId }).map(
            (response: Response) => response.json());
    }

    getInvCounts(accountId: string){
        return this.http.post('http://localhost:6969/influx.php', { request: "getInvCounts", accountId: accountId }).map(
            (response: Response) => response.json());
    }

    setCurrentAccount(account: any){
         this.account = account; 
    }

    getCurrentAccount(){
        return this.account; 
    }
}
