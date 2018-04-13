import { AppConfig } from './../../app.config';
import { InfluxService } from './influx-service';
import { Subject } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy, Output, OnChanges } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { Account } from '../../_models/account';
import { Router, ActivatedRoute } from '@angular/router';
import { Provider } from '../../_models/provider';

@Component({
  selector: 'app-influx-configs',
  templateUrl: './influx.component.html',
  styleUrls: ['./influx.component.css'],
  providers: [InfluxService]
})
export class InfluxComponent implements OnInit, OnDestroy {
  account: Account;
  acct: any;
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

  constructor(private accountService: AccountService,
    private route: ActivatedRoute, private router: Router,
    private influx: InfluxService, private appConfig: AppConfig) {
    this.account = this.appConfig.account;
  }
  getDnaLink() {
    return 'https://dna.dealer.com/views/clients/client-dashboard/client-dashboard?accountId=' + this.accountId;
  }

  viewFeedData(config) {
    if (config.files.length > 0) {
      this.router.navigate([config.provider, config.files[0].filename, config.providerid], { relativeTo: this.route });
      this.influx.setFileList(config.files);
    }
  }

  getInvCounts() {
    this.count_sub = this.accountService.getInvCounts(this.accountId).subscribe(
      success => {
        this.counts = success;
        let count = 0;
        success.forEach(c => {
          count += c.count;
        });
        const counts = { ...this.account, ...{num_vehicles: count, num_configs: this.appConfig.account.num_configs }};
        this.appConfig.setCurrentAccount(counts);
      },
      error => {
        console.log(error);
      });
  }

  showFilters(parser: string, config: any) {
    this.params.providerId = config.providerid;
    this.params.accountId = config.accountId;
    this.params.provider = config.provider;
    this.params.filename = config.filename;
    config.hasFilters = false;
    if (!this.filters[config.provider]) {
      this.filters[config.provider] = [];
      this.fileMap[config.provider] = [];
      this.filter_sub = this.accountService.getFilters(this.params).subscribe(meta => {
        if (meta.filters[config.provider]) {
          this.filters[config.provider] = this.filters[config.provider].concat(meta.filters[config.provider]);
          this.influx.setFilters(this.filters[config.provider]);
          config.hasFilters = true;
        }
        this.fileMap[config.provider] = [...meta.files];
        this.DoneLoading.next(true);
      });
    }
  }

  getRecentFiles(config: any) {
    if (!this.fileMap[config.provider]) {
      this.fileMap[config.provider] = [];
      this.file_sub = this.accountService.getFileList(this.accountId, config.provider, config.providerid).subscribe(files => {
        this.fileMap[config.provider] = [...files.data];
        this.DoneLoading.next(true);
      });
    }
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
    console.log(config);
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

  mergeFileList(bool) {
    if (bool === true) {
      this.influxConfigs.forEach(config => {
        if (config.files.length === 0 && this.fileMap[config.provider].length > 0) {
          config.files = config.files.concat(this.fileMap[config.provider]);
          config.lastRan = config.files[0].time;
        }
      });
    }
    if (this.provider) {
      this.influx.setFileList(this.fileMap[this.provider]);
    }
  }

  onScroll(event) {
    if(event.target.scrollTop > 0){
      this.appConfig.collapseHeader(true);
    } else {
      this.appConfig.collapseHeader(false);
    }
  }

  getConfigs(){
    this.loading = true;
    this.config_sub = this.accountService.getInfluxConfigs(this.accountId).subscribe(configs => {
      const providers = [];
      configs.data.forEach(config => {
        const parser = config.provider;
        if (providers.indexOf(parser) < 0) {
          providers.push(parser);
          this.showFilters(parser, config);
        } else {
          config.hasFilters = true;
          config.message = 'Show Filters';
        }
        config.files = [];
      });
      this.DoneLoading.next(false);
      this.influxConfigs = configs.data;
      this.loading = false;
    });
  }

  ngOnInit() {
    this.loading_sub = this.DoneLoading.subscribe(bool => {
      this.mergeFileList(bool);
    });
    this.sub = this.route.parent.params.subscribe(params => {
      this.accountId = params.id;
      this.getInvCounts();
      this.getConfigs();
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    this.config_sub.unsubscribe();
    if (this.filter_sub) {
      this.filter_sub.unsubscribe();
    }
  }
}
