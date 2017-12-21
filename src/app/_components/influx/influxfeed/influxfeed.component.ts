import { Component, OnInit, OnDestroy, TemplateRef, Output, Input, AfterViewInit, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';
import { AccountService } from '../../../_services/account.service';
import { Account } from '../../../_models/account';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import { influxVehicles } from './data';
declare var $;

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-influxfeed',
  templateUrl: './influxfeed.component.html',
  styleUrls: ['./influxfeed.component.css']
})
export class InfluxfeedComponent implements OnInit, OnDestroy, AfterViewInit {
  @Output() sendItem = new EventEmitter();

  influxHeaders: any = [];
  influxHeadersCheckbox: any = [];

  influxVehicles: any = [];
  selectedInfluxVehicles: any = [];
  temp = [];
  tmp = [];
  feedLoading: boolean = true;
  provider = '';
  timestamp = '';
  filename = '';
  providerid = '';
  private sub: any;
  account: Account;
  accountId: string;
  showTable: boolean = false;
  headers: any = [];
  windowHeight = window.innerHeight;
  loadingIndicator: boolean = true;
  timeout: any;
  selected = [];
  testing: any = '';
  dtTrigger: Subject<any> = new Subject();
  el: any;
  files: any = [];
  archivedFile: string;
  vehiclesSelectedExpand: boolean = false;
  columnFiltersExpand: boolean = false;
  value;

  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router, private element: ElementRef) {
    this.sub = this.route.params.subscribe(params => {
      this.accountId = params['id'];
      this.provider = params['provider'];
      this.providerid = params['providerid'];
      this.timestamp = params['timestamp'];
      this.filename = params['filename'];
      this.accountService.getHeaders(this.provider).subscribe(headers => {
        this.influxHeaders = headers;
        this.influxHeadersCheckbox = this.influxHeaders;
        this.showTable = true;
        this.feedLoading = false;
      });
      this.accountService.getFileList(this.accountId, this.provider).subscribe(files => {
        this.files = files;
        this.archivedFile = this.files[0].filename;
      });
      this.accountService.getInfluxFeed(this.accountId, this.provider, this.timestamp, this.filename, this.providerid).subscribe(feed => {
        this.influxVehicles = feed.vehicles;
        this.feedLoading = false;
        this.showTable = true;
        this.selectedInfluxVehicles = this.influxVehicles;
        setTimeout(() => { this.loadingIndicator = false; }, 1500);
      }),
        err => {
          // Log errors if any
          console.log(err);
        };
    })
  }

  toggleVehiclesSelectedExpand() { // click handler
    let bool = this.vehiclesSelectedExpand;
    this.vehiclesSelectedExpand = bool === false ? true : false;
  }

  toggleFiltersDropDown() { // click handler
    let bool = this.columnFiltersExpand;
    this.columnFiltersExpand = bool === false ? true : false;
  }

  openVehicleSingle(vehicle: any) { }

  getArchivedFile() {
    this.influxVehicles = [];
    this.selectedInfluxVehicles = [];
    this.accountService.getUpdatedFeed(this.provider, this.archivedFile).subscribe(vehicles => {
      this.influxVehicles = vehicles.vehicles;
      this.selectedInfluxVehicles = this.influxVehicles
    });
  }

  onValueChange(data: any, file: any) { }

  addClass(vehicle: any) {
    if (vehicle.hightlight === 0 || !vehicle.highlight) {
      vehicle.highlight = 1;
    }
    else if (vehicle.highlight === 1) {
      vehicle.highlight = 0;
    }
    else {
    }
  }

  getColumnData(vehicle, column) {
    return vehicle[column];
  }

  onSelect({ selected, vehicle }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
  }

  getStyles() {
    return '.ngx-datatable.scroll-horz .datatable-body {max-height: 500px;}';
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
    }, 100);
  }

  toggle(col) {
    const isChecked = this.isChecked(col);

    if (isChecked) {
      this.influxHeaders = this.influxHeaders.filter(c => {
        return c.prop !== col.prop;
      });
    } else {
      this.influxHeaders = [...this.influxHeaders, col];
    }
  }

  isChecked(col) {
    return this.influxHeaders.find(c => {
      return c.prop === col.prop;
    });
  }

  ngOnInit(): void {
  };

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    alert('destroyed!');
  }
}