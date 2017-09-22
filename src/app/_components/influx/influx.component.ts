import { Component, OnInit, OnDestroy, Output } from '@angular/core';
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
  filters: any = [];
  showFilter: boolean = false;
  influxHeaders: any = [];
  influxVehicles: any = [];
  showFeed: boolean = false;
  feedLoading: boolean = false;

  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) {
    this.sub = this.route.parent.params.subscribe(params => {
      this.accountId = params['id'];
      console.log(this.accountId);
    });
    this.loading = true;
    this.account = this.accountService.getCurrentAccount();
    this.accountService.getInfluxConfigs(this.accountId).subscribe(configs => {
      this.influxConfigs = configs;
      this.influxString = this.showConfigsAsString(this.influxConfigs);
      this.influxLoading = false;
    });
  }
  getDnaLink() {
    return 'https://dna.dealer.com/views/clients/client-dashboard/client-dashboard?accountId=' + this.account.accountId;
  }

  showFilters(parser:string){
    this.accountService.getFilters(this.account.accountId, parser).subscribe(filters => {
        this.filters = filters; 
        console.log(this.filters);
    });
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

  getColumnData(vehicle,column) { 
    return vehicle[column]; 
  }

  ngOnInit() {

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}