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

  constructor(private accountService: AccountService, private route: ActivatedRoute) { 
      this.sub = this.route.parent.params.subscribe(params => {
      this.accountId = params['id'];
      this.account = this.accountService.getCurrentAccount();
      console.log(this.accountId);
    });
    this.routersub = this.route.params.subscribe(params => {
      this.type = params['type'];
      this.classification = params['classification'];
    });
  }

  ngOnInit() {
      this.accountService.getAccountVehicles(this.accountId,this.type,this.classification).subscribe(items => {
          this.items = items; 
          console.log('account vehicles', items);
      });
  }
  ngOnDestroy() {
    this.sub.unsubscribe(); 
    this.routersub.unsubscribe();
  }
}
