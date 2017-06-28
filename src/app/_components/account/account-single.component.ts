import { Component, OnInit, OnDestroy } from '@angular/core';
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

  constructor(private accountService: AccountService, private route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.accountId = params['id'];
    });
    this.loading = true; 
    this.accountService.getAccountData(this.accountId).subscribe(account => {
        this.account = account; 
        this.loading = false; 
    }); 
    this.influxLoading = true; 
    this.accountService.getInfluxConfigs(this.accountId).subscribe(configs => {
        this.influxConfigs = configs;
        this.influxString = this.showConfigsAsString(this.influxConfigs);  
        this.influxLoading = false; 
    }); 
  }

  showConfigsAsString(data: any){ 
      return JSON.stringify(this.influxConfigs);
  }

  ngOnInit() {
  
  }

  ngOnDestroy(){
    this.sub.unsubscribe(); 
  }

}

