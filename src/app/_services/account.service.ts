import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class AccountService {

  constructor(private http: Http) { }

   getAccountData(accountId: string) {
        return this.http.post('http://localhost:6969/account.php', { request: "getAccountData", accountId: accountId }).map(
            (response: Response) => response.json());
    }

    getAccountVehicles(accountId: string) {
        return this.http.post('http://localhost:6969/vehicle.php', { request: "getAccountVehicles", accountId: accountId }).map(
            (response: Response) => response.json());
    }

    getInfluxConfigs(accountId: string) {
        return this.http.post('http://localhost:6969/influx.php', { request: "getInfluxConfigs", accountId: accountId }).map(
            (response: Response) => response.json());
    }

}
