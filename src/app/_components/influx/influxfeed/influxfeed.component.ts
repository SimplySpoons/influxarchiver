import { Component, OnInit, OnDestroy, TemplateRef, Output, Input, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
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
  influxHeaders: any = [];
  influxVehicles: any = [];
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

  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router, private element: ElementRef) {
    // this.feedLoading = true;
    //Object.assign(this, { influxVehicles });
    //this.temp = this.influxVehicles;
    //console.log(this.influxVehicles);
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.accountId = params['id'];
      this.provider = params['provider'];
      this.providerid = params['providerid'];
      this.timestamp = params['timestamp'];
      this.filename = params['filename'];
      this.accountService.getHeaders(this.provider).subscribe(headers => {
        this.influxHeaders = headers;
        this.showTable = true;
        this.feedLoading = false;
        this.headers = headers;
        //this.el.innerHeight = this.windowHeight;
      });
      this.accountService.getFileList(this.accountId, this.provider).subscribe(files => {
        this.files = files;
        this.archivedFile = this.files[0].filename;
        console.log(this.files);
      });
      this.accountService.getInfluxFeed(this.accountId, this.provider, this.timestamp, this.filename, this.providerid).subscribe(feed => {
        this.influxVehicles = feed.vehicles;
        this.feedLoading = false;
        this.showTable = true;
        setTimeout(() => { this.loadingIndicator = false; }, 1500);
      }),
        err => {
          // Log errors if any
          console.log(err);
        };
    })
  }

  getArchivedFile() { 
    this.influxVehicles = []; 
    this.accountService.getUpdatedFeed(this.provider,this.archivedFile).subscribe(vehicles =>
      {
        this.influxVehicles = vehicles.vehicles; 
      });
  }

  onValueChange(data:any,file: any) {
    console.log('file selected changed --> ', JSON.stringify(file));  
  }
  
  addClass(vehicle: any) {
    if (vehicle.hightlight === 0 || !vehicle.highlight) {
      vehicle.highlight = 1;
    }
    else if (vehicle.highlight === 1) {
      vehicle.highlight = 0;
    }
    else {
      console.log(vehicle.highlight);
    }
    /*let index = this.influxVehicles.indexOf(vehicle); 
    this.influxVehicles[index] = vehicle; 
    return this.influxVehicles; */
  }

  getColumnData(vehicle, column) {
    return vehicle[column];
  }

  onSelect({ selected, vehicle }) {
    console.log('Select Event', selected, this.selected);

    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
    console.log('You selected ' + this.selected);
  }

  onActivate(event) {
    console.log('Activate Event', event);
  }

  getStyles() {
    return '.ngx-datatable.scroll-horz .datatable-body {max-height: 500px;}';
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
      console.log('paged!', event);
    }, 100);
  }

  ngOnInit(): void {
    
    console.log(this.influxHeaders);
  };

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    alert('destroyed!');
  }
}
