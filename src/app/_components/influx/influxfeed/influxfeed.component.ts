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

  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) {    
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
        scrollY: 500,
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

  ngOnInit(): void {
    // this.startTimer();
    // Calling the DT trigger to manually render the table
    this.dtTrigger.next();
  };

}
