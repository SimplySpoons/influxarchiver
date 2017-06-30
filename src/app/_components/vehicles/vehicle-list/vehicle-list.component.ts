import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { AccountService } from '../../../_services/account.service';
import { Item } from '../../../_models/item';
import { Account } from '../../../_models/account';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit, OnDestroy {

  account: Account;
  accountId: string;
  sub: any;
  items: Array<Item> = [];

  type: string;
  classification: string;

  routersub: any;
  invCounts: any;

  loading: boolean = false; 

  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) {
  
  }

  loadVehicles(type: any, classification: any) {
    this.loading=true; 
    this.accountService.getAccountVehicles(this.accountId, type, classification).subscribe(items => {
      this.items = items;
      this.loading=false; 
    });
  }

  ngOnInit() {
    this.sub = this.route.parent.params.subscribe(params => {
      this.accountId = params['id'];
      this.account = this.accountService.getCurrentAccount();
      console.log(this.accountId);
    });
    this.routersub = this.route.params.subscribe(params => {
      this.type = params['type'];
      this.classification = params['classification'];
      this.loadVehicles(this.type,this.classification);
    });
    this.accountService.getInvCounts(this.accountId).subscribe(counts => {
      this.invCounts = counts;
      console.log('invCounts', counts);
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    this.routersub.unsubscribe();
  }
}
