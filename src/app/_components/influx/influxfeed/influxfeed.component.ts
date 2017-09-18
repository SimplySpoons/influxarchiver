import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { AccountService } from '../../../_services/account.service';
import { Account } from '../../../_models/account';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Subject, Observable, Subscription } from 'rxjs/Rx';
declare var $;

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-influxfeed',
  templateUrl: './influxfeed.component.html',
  styleUrls: ['./influxfeed.component.css']
})
export class InfluxfeedComponent implements OnInit {
  influxHeaders: any = [];
  influxVehicles: any = [];
  feedLoading: boolean = true;
  provider = '';
  private sub: any;
  account: Account;
  accountId: string;
  showTable: boolean = false;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  showStyle: false;
  
  // loadTime: any = "0";
  // subs: Subscription;
  // ticks = 0;
  // minutesDisplay: number = 0;
  // hoursDisplay: number = 0;
  // secondsDisplay: number = 0;

  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) {
    // this.feedLoading = true;
    
    this.sub = this.route.params.subscribe(params => {
      console.log(params);
      this.accountId = params['id'];
      this.provider = params['provider'];
      this.accountService.getInfluxFeed(this.accountId, this.provider).subscribe(feed => {
        console.log(feed);
        this.influxHeaders = feed.headers;
        this.influxVehicles = feed.vehicles;
        this.feedLoading = false;

        if (this.influxHeaders != null) {
          this.makeTheTable();
        }
      }),
        err => {
          // Log errors if any
          console.log(err);
        };
    })
  }

  getColumnData(vehicle, column) {
    return vehicle[column];
  }

  makeTheTable() {
    $(function () {
      $('#dt').DataTable({
        pagingType: 'simple_numbers',
        pageLength: 250,
        responsive: true,
        scrollY: 1000,
        deferRender: true,
        scroller: true,
        "initComplete": function(settings, json) {
          // alert( 'DataTables has finished its initialisation.' );
          console.log('init complete!');
        }
      });
    });
    this.showTable = true;
  }

  // private startTimer() {
  //   let timer = Observable.timer(1, 1000);
  //   this.subs = timer.subscribe(
  //     t => {
  //       this.ticks = t;
  //       this.secondsDisplay = this.getSeconds(this.ticks);
  //       this.minutesDisplay = this.getMinutes(this.ticks);
  //       this.hoursDisplay = this.getHours(this.ticks);
  //     }
  //   );
  // }

  // private getSeconds(ticks: number) {
  //   return this.pad(ticks % 60);
  // }

  // private getMinutes(ticks: number) {
  //   return this.pad((Math.floor(ticks / 60)) % 60);
  // }

  // private getHours(ticks: number) {
  //   return this.pad(Math.floor((ticks / 60) / 60));
  // }

  // private pad(digit: any) {
  //   return digit <= 9 ? '0' + digit : digit;
  // }

  ngOnInit(): void {
    // this.startTimer();
    // Calling the DT trigger to manually render the table
    this.dtTrigger.next();
  };

}
