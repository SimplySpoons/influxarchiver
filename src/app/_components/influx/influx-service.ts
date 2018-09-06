import { Subject } from 'rxjs/Subject';
import { Injectable, EventEmitter } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { AppConfig } from '../../app.config';
@Injectable()
export class InfluxService {
  API_URL: string;
  account: Account;
  fileListSubject: Subject<any> = new Subject<any>();
  filtersSubject: Subject<any> = new Subject<any>();
  filters: any;
  files: any = [];
  constructor(private conf: AppConfig, private http: Http) {
    this.API_URL = this.conf.API_CONFIG();
  }

  setFileList(files: any){
    this.files = files;
    this.fileListSubject.next(files);
  }


  getFileList(feedParams: any) {
    return this.http.get(this.API_URL +
      "/api/archives/" + feedParams.accountId +
      "/" + feedParams.provider + "/" +
      feedParams.providerId + "/file_list")
    .map((res: Response)=> {
      res.json();
    })
  }

  setFilters(filters: any){
    this.filters = filters;
    this.filtersSubject.next(filters);
  }
}
