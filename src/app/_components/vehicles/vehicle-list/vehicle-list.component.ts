import { Component, OnInit, Input } from '@angular/core';
import { AccountService } from '../../../_services/account.service'; 
import { Item } from '../../../_models/item'; 
import { Account } from '../../../_models/account'; 

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit {

  @Input() account: Account; 

  items: Array<Item> = [];

  constructor(private accountService: AccountService) { 

  }

  ngOnInit() {
      this.accountService.getAccountVehicles(this.account.accountId).subscribe(items => {
          this.items = items; 
          console.log('account vehicles', items);
      });
  }
}
