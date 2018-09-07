import { Component, OnInit, OnDestroy, Output, EventEmitter, ViewChild } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { Account } from '../../_models/account';
import { ActivatedRoute } from '@angular/router';
import { AppConfig } from '../../app.config';


@Component({
  selector: 'app-account-single',
  templateUrl: './account-single.component.html',
  styleUrls: ['./account-single.component.css']
})
export class AccountSingleComponent implements OnInit, OnDestroy {
  @ViewChild('page') pageWrapper: any;
  @ViewChild('singleHeader') singleHeader: any;
  account: Account = new Account();
  accountId: string = '';
  influxLoading = false;
  influxString = '';
  influxConfigs: any = [];
  private sub: any;
  invCounts: any = [];

  pageHeight = 0;
  headerHeight = 0;
  windowHeight = window.innerHeight;

  meta_sub: any;

  hideAccountInfo = false;

  apis: any;

  loading = true;

  navLinks = [
    { path: 'influx', label: 'Influx Configs', class: 'fa-cogs', count: 0 },
    { path: 'vehicles', label: 'Vehicles', class: 'fa-car', count: 0 }
  ];

  height = window.innerHeight - 140;

  configData: any;

  @Output() callbackReady: EventEmitter<any> = new EventEmitter();

  constructor(private accountService: AccountService, private route: ActivatedRoute, private appConfig: AppConfig) {
    this.loading = true;
    this.sub = this.route.params.subscribe(params => {
      this.accountId = params['id'];
      this.getAccountData();
    });
  }
  getDnaLink() {
    return 'https://dna.dealer.com/views/clients/client-dashboard/client-dashboard?accountId=' + this.account.accountId;
  }

  loadCorrectVehicles(type: any, classification: any) {
    this.callbackReady.emit({ type: type, classification: classification });
    return '/account/' + this.accountId + '/vehicles/' + type + '/' + classification;
  }

  showConfigsAsString(data: any) {
    return JSON.stringify(this.influxConfigs);
  }

  setCount() {
    if (this.account.num_configs) {
      this.navLinks[0].count = Number(this.account.num_configs);
    } else {
      this.navLinks[0].count = 0;
    }
    if (this.account.num_vehicles) {
      this.navLinks[1].count = Number(this.account.num_vehicles);
    } else {
      this.navLinks[1].count = 0;
    }
  }

  getAccountData() {
    this.accountService.getAccountData(this.accountId).subscribe(account => {
      this.accountService.getApiConfigs(this.accountId).subscribe(
        success => {
          this.account = {...this.account, ...account.data};
          this.setCount();
          this.appConfig.setCurrentAccount(this.account);
          this.apis = success;
        },
        error => {
          console.log(error);
        }
      );
    });
  }

  setHeights(data = null) {
    if(data !== null){
      console.log("RESIZE EVENT", data);
    }
    this.headerHeight = this.singleHeader.nativeElement.clientHeight;
    this.pageHeight = this.windowHeight - this.headerHeight;
    console.log(this.headerHeight);
    console.log(this.pageHeight);
  }
  /*
<div class="cc-btns"  *ngIf="!loading">
<p>Quick Links for {{account.name}}:</p>
<a [href]="getInventoryManagerLink()" class="btn btn-success" target="_blank">Inventory Manager</a>
<a [href]="getComposerLink()" class="btn btn-success" target="_blank">Composer</a>
<a [href]="getDnaLink()" class="btn btn-success" target="_blank">DNA</a>
<a [href]="getExportViewLink()" class="btn btn-success" target="_blank">Exported Inventory</a>
<a [href]="getInboundFeedsLink()" class="btn btn-success" target="_blank">Inbound Feeds</a>
<a [href]="getSolrLink()" class="btn btn-success" target="_blank">SOLR Refresh</a>
</div> */

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
    this.appConfig.currentAcouunt.subscribe(account=>{
      this.loading = account.loading;
    });
    setTimeout(() => {
      this.setHeights();
    }, 250);

    this.apis = 1;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    if(this.meta_sub){
      this.meta_sub.unsubscribe();
    }
  }

  onScroll(event) {
    console.log(event);
    if (event.target.scrollTop > 0) {

    }
  }

}

