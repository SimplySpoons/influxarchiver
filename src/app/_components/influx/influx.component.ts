import { fadeInAnimation } from './../../_animations/fade-in.animation';
import { AppConfig } from './../../app.config';
import { InfluxService } from './influx-service';
import { Subject } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy, Output, OnChanges, EventEmitter } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { Account } from '../../_models/account';
import { Router, ActivatedRoute } from '@angular/router';
import { Provider } from '../../_models/provider';

@Component({
  selector: 'app-influx-configs',
  templateUrl: './influx.component.html',
  styleUrls: ['./influx.component.css'],
  providers: [InfluxService],
  animations: [fadeInAnimation]
})
export class InfluxComponent implements OnInit, OnDestroy {
  account: Account;
  acct: any;
  sub2: any;
  debug = false;
  accountId: string = '';
  loading = false;
  influxLoading = false;
  influxString = '';
  influxConfigs: any = [];
  private sub: any;
  filters: any = [];
  showFilter: boolean = false;
  influxHeaders: any = [];
  influxVehicles: any = [];
  showFeed: boolean = false;
  feedLoading: boolean = false;
  hideFilters: boolean = true;
  loading_sub: any;
  DoneLoading: Subject<boolean> = new Subject<boolean>();
  fileMap: any = [];
  filter_sub: any;
  file_sub: any;
  config_sub: any;
  provider: string;
  count_sub: any;
  counts: any;
  params: Provider = new Provider();
  showIndex = -1;
  constructor(private accountService: AccountService,
    private route: ActivatedRoute, private router: Router,
    private influx: InfluxService, private appConfig: AppConfig) {
    this.account = this.appConfig.account;
  }
  getDnaLink() {
    return 'XX_009' + this.accountId;
  }

  viewFeedData(config) {
    if (config.files.data) {
      this.influx.setFileList(config.files.data);
    }
  }
  setConfigToShow(index) {
    this.showIndex = index;
  }
  toggleFilter(config) {
    if (this.filters[config.provider] && !config.filters) {
      config.filters = this.filters[config.provider];
    } else {
      config.hasFilters = false;
    }
    if (!config.showFilters) {
      config.showFilters = true;
      config.message = 'Hide Filters';
    } else {
      config.showFilters = false;
      config.message = 'Show Filters';
    }
  }

  getClassName(bool) {
    return {
      success: bool,
      warning: !bool
    };
  }

  hideFilterToggle() {
    this.hideFilters = true;
  }

  getDate(str) {
    const num = Number(str);
    return new Date(num);
  }

  showConfigsAsString(data: any) {
    return JSON.stringify(this.influxConfigs);
  }
  routeToVehicles(type: any, classification: any) {
    this.router.navigate(['vehicles', type, classification], { relativeTo: this.route.parent });
  }
  cleanFilter(filter: any) {
    return filter.replace('){', '){<br>').replace(';}', ';<br>}').replace(';', ';<br>');
  }

  toggleFilterDisplay(showFilter: boolean) {
    this.showFilter = !this.showFilter;
  }


  getColumnData(vehicle, column) {
    return vehicle[column];
  }

  onScroll(event) {
    if (event.target.scrollTop > 0) {
      this.appConfig.collapseHeader(true);
    } else {
      this.appConfig.collapseHeader(false);
    }
  }

  getConfigs() {
    this.loading = true;
    this.config_sub = this.accountService.getInfluxConfigs(this.accountId).subscribe(configs => {

      for(let i = 0;i < configs['data'].length;i++){
        configs['data'][i].files.data = JSON.parse(configs['data'][i].files.data);
      }

      this.influxConfigs = configs.data;
      const invConfigs = { configs: this.influxConfigs, loading: false };
      this.appConfig.setCurrentAccount(invConfigs);
      this.loading = false;
    });
    if (!this.account.inventory_counts || this.account.inventory_counts.length === 0) {
      this.getInvCounts();
    } else {
      this.counts = this.account.inventory_counts;
    }
  }

  getInvCounts() {
    this.count_sub = this.accountService.getInvCounts(this.accountId).subscribe(
      success => {
        const counts = { inventory_counts: success };
        this.counts = counts.inventory_counts;
        this.appConfig.setCurrentAccount(counts);
      },
      error => {
        console.log(error);
      });
  }


  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
        this.accountId = params.id;
        this.influxConfigs = [];
        this.getConfigs();
    });
    this.sub2 = this.route.queryParams.subscribe(qp=> {
        console.log(qp);
        if(qp._mode === "debug"){
          this.debug = true;
        } else {
          this.debug = false;
        }
    })
  }
  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
    }
    this.sub2.unsubscribe();
    if (this.config_sub) {
      this.config_sub.unsubscribe();
    }
    if (this.filter_sub) {
      this.filter_sub.unsubscribe();
    }
  }
}
