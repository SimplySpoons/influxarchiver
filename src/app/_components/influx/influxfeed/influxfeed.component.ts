import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { AccountService } from '../../../_services/account.service';
import { Account } from '../../../_models/account';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-influxfeed',
  templateUrl: './influxfeed.component.html',
  styleUrls: ['./influxfeed.component.css']
})
export class InfluxfeedComponent {
  influxHeaders: any = [];
  influxVehicles: any = [];
  feedLoading: boolean = false;
  provider = '';
  private sub: any;
  account: Account;
  accountId: string;

  @Output() callbackReady: EventEmitter<any> = new EventEmitter();

  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) {
    this.feedLoading = true;
    this.accountService.getAccountData(this.accountId).subscribe(account => {
      this.account = account;
         
      this.accountService.setCurrentAccount(account);
      
    }),

      this.sub = this.route.params.subscribe(params => {
        this.provider = params['provider'];
        console.log('provider is ' + this.provider);
        this.accountId = params['id'];
        console.log(this.accountId);


        this.accountService.getInfluxFeed(this.accountId, this.provider).subscribe(feed => {
          console.log('this is the feed ' + feed);
          this.influxHeaders = feed.headers;
          console.log('this is the influxHeaders ' + this.influxHeaders);
          this.influxVehicles = feed.vehicles;
          console.log('this is the influxVehicles ' + this.influxVehicles);
        }),
          err => {
            // Log errors if any
            console.log(err);
          };
      })
  }
}
