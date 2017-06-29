import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { Account } from '../../_models/account';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-influx-configs',
  templateUrl: './influx.component.html',
  styleUrls: ['./influx.component.css']
})
export class InfluxComponent implements OnInit, OnDestroy {

  account: Account;
  accountId: string = '';
  loading: boolean = false;
  influxLoading = false;  
  influxString = '';
  influxConfigs: any = []; 
  private sub: any;

  constructor(private accountService: AccountService, private route: ActivatedRoute) {
    this.sub = this.route.parent.params.subscribe(params => {
      this.accountId = params['id'];
      console.log(this.accountId);
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
  getDnaLink(){
    return 'https://dna.dealer.com/views/clients/client-dashboard/client-dashboard?accountId=' + this.account.accountId;
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

