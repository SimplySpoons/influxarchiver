import { InfluxService } from './influx-service';
import { Subject } from 'rxjs/Rx';
import { Component, OnInit, OnDestroy, Output, OnChanges } from '@angular/core';
import { AccountService } from '../../_services/account.service';
import { Account } from '../../_models/account';
import { Router, ActivatedRoute } from '@angular/router';

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
  loading: boolean = false;
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
  child_sub: any;
  provider: string;

  constructor(private accountService: AccountService,
    private route: ActivatedRoute, private router: Router,
    private influx: InfluxService) {
    this.sub = this.route.parent.params.subscribe(params => {
      console.log(params);
      this.accountId = params.id;
      this.accountService.getInfluxConfigs(params.id).subscribe(configs => {
        const providers = [];
        configs.forEach(config => {
          const parser = config.provider;
          if (providers.indexOf(parser) < 0) {
            providers.push(parser);
            this.showFilters(parser, config);
            this.getRecentFiles(config);
          } else {
            config.hasFilters = true;
            config.message = 'Show Filters';
          }
          config.files = [];
          this.loading = false;
        });
        this.DoneLoading.next(false);
        this.influxConfigs = configs;
        this.influxString = this.showConfigsAsString(this.influxConfigs);
        this.influxLoading = false;
      });
      if (this.route.firstChild) {
        this.child_sub = this.route.firstChild.params.subscribe(params => {
          if (params !== null) {
            this.provider = params.provider;
          }
        });
      }
    });
    this.loading = true;
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

  showFilters(parser: string, config: any) {
    const provider = config.provider;
    config.hasFilters = false;
    if (!this.filters[provider]) {
      this.filters[provider] = [];
      this.filter_sub = this.accountService.getFilters(this.accountId, parser).subscribe(filters => {
        if (filters[config.provider]) {
          this.filters[provider] = this.filters[provider].concat(filters[config.provider]);
          this.influx.setFilters(this.filters[provider]);
          config.message = 'Show Filters';
          config.hasFilters = true;
        }
      });
    } else {
      config.hasFilters = true;
      config.message = 'Show Filters';
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

  ngOnInit() {
    this.loading_sub = this.DoneLoading.subscribe(bool => {
      this.mergeFileList(bool);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    this.filter_sub.unsubscribe();
    this.file_sub.unsubscribe();
    this.child_sub.unsubscribe();
  }
}
