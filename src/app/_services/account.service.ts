import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { AppConfig } from '../app.config'; 

@Injectable()
export class AccountService {
  
  API_URL: string;
  constructor(private conf: AppConfig, private http: Http) { 
      this.API_URL = this.conf.API_CONFIG(); 
  }

   getAccountData(accountId: string) {
        return this.http.post(this.API_URL + '/account.php', { request: "getAccountData", accountId: accountId }).map(
            (response: Response) => response.json());
    }

    getAccountVehicles(accountId: string) {
        return this.http.post(this.API_URL + '/vehicle.php', { request: "getAccountVehicles", accountId: accountId }).map(
            (response: Response) => response.json());
    }

    getInfluxConfigs(accountId: string) {
        return this.http.post('http://localhost:6969/influx.php', { request: "getInfluxConfigs", accountId: accountId }).map(
            (response: Response) => response.json());
    }

    getDNAInflux(accountId: string){
        return this.http.post('https://dna.dealer.com/views/blocks/influxconfigs/view-influxconfigs', { blockId: "influxconfigs", accountId: accountId, ownerId: accountId }).map(
            (response: Response) => response); 
    }

}
