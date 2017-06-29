import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { Account } from '../../_models/account';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-account-single',
  templateUrl: './account-single.component.html',
  styleUrls: ['./account-single.component.css']
})
export class AccountSingleComponent implements OnInit, OnDestroy {

  account: Account;
  accountId: string = '';
  loading: boolean = false;
  influxLoading = false;
  influxString = '';
  influxConfigs: any = [];
  private sub: any;
  invCounts: any; 

  constructor(private accountService: AccountService, private route: ActivatedRoute) {
    this.loading = true;
    this.sub = this.route.params.subscribe(params => {
      this.accountId = params['id'];
      this.accountService.getAccountData(this.accountId).subscribe(account => {
        this.account = account;
        this.accountService.setCurrentAccount(account);
        this.loading = false;
      });
    });
    this.influxLoading = true;
    this.accountService.getInfluxConfigs(this.accountId).subscribe(configs => {
      this.influxConfigs = configs;
      this.influxString = this.showConfigsAsString(this.influxConfigs);
      this.influxLoading = false;
    });
    this.accountService.getInvCounts(this.accountId).subscribe(counts=>{
       this.invCounts = counts; 
    })
  }
  getDnaLink() {
    return 'https://dna.dealer.com/views/clients/client-dashboard/client-dashboard?accountId=' + this.account.accountId;
  }

  showConfigsAsString(data: any) {
    return JSON.stringify(this.influxConfigs);
  }


  ngOnInit() {

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

