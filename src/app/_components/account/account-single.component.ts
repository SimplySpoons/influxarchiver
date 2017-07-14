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
  invCounts: any = [];

  apis: any; 

  @Output() callbackReady: EventEmitter<any> = new EventEmitter();

  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) {
    this.loading = true;
    this.sub = this.route.params.subscribe(params => {
      this.accountId = params['id'];
      this.accountService.getAccountData(this.accountId).subscribe(account => {
        this.account = account;
        this.accountService.setCurrentAccount(account);
        this.accountService.getApiConfigs(this.accountId).subscribe(apiConfig => { 
            this.apis = apiConfig
        }); 
        this.loading = false; 
      });
    });

  }
  getDnaLink() {
    return 'https://dna.dealer.com/views/clients/client-dashboard/client-dashboard?accountId=' + this.account.accountId;
  }

  loadCorrectVehicles(type: any, classification: any) {
    this.callbackReady.emit({type: type, classification: classification});
    return '/account/' + this.accountId + '/vehicles/' + type + '/' + classification;
  }


  showConfigsAsString(data: any) {
    return JSON.stringify(this.influxConfigs);
  }

  getInventoryManagerLink() {
    return '//apps.dealer.com/inventory/as/' + this.account.accountId + '/' + this.account.accountId + '-admin/i/index';
  }
  getExportViewLink() {
    return '//apps.dealer.com/inventory/as/' + this.account.accountId + '/' + this.account.accountId + '-admin/market/inventoryexports';
  }
  getInboundFeedsLink() {
    return '//apps.dealer.com/inventory/as/' + this.account.accountId + '/' + this.account.accountId + '-admin/publishRules/index';
  }
  getSolrLink() {
    return '//apps.dealer.com/inventory/as/' + this.account.accountId + '/' + this.account.accountId + '-admin/solrRefresh/index';
  }
  getComposerLink() {
    return '//' + this.account.accountId + '.composer.dealer.com/website/as/' + this.account.accountId + '/' + this.account.accountId + '-admin/composer/index#website';
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}

