import { Component, OnInit, OnDestroy, Output, Input, EventEmitter } from '@angular/core';
import { AccountService } from '../../../_services/account.service';
import { Account } from '../../../_models/account';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Rx';
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

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();


  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) {
    // this.feedLoading = true;

    this.sub = this.route.params.subscribe(params => {
      this.accountId = params['id'];
      this.provider = params['provider'];

      this.accountService.getInfluxFeed(this.accountId, this.provider).subscribe(feed => {
        this.influxHeaders = feed.headers;
        this.influxVehicles = feed.vehicles;
        
        this.feedLoading = false;
        $(function () {
          $('#dt').DataTable();
        });
        
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

  ngOnInit(): void {
   
      this.dtOptions = {
        pagingType: 'full_numbers'
      };


      // Calling the DT trigger to manually render the table
      this.dtTrigger.next();
    };


  // private extractData(res: Response) {
  //   const body = res.json();
  //   return body.data || {};
  // }
}
