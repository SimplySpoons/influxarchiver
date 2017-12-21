import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AccountService } from '../_services/account.service';
import { Account } from '../_models/account';
import { Item } from '../_models/item';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  accounts: Array<Account> = [];
  loading = false;
  value = '';
  showList;
  vehicles: Array<Item> = [];
  firstRun = false;
  tmpRoute: any = [];

  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) {
    this.searchForUser();
  }

  ngOnInit() {
    this.router.events.filter(event => event instanceof NavigationEnd)
      .subscribe(
      event => {
        let currentRoute = this.route.root; // route is an instance of ActiveRoute
        let data;
        while (currentRoute.children[0] !== undefined) {
          currentRoute = currentRoute.children[0];
          this.destroyData(currentRoute);
        }
      }
      );
  }

  loadingInit() {
    this.loading = true;
  }

  destroyData(data: any) {
    if (this.tmpRoute !== data) {
      this.onRemoveSearch();
      this.tmpRoute = data;
    }
  }

  updateVehicleStash(data) {
    this.accountService.searchByVin(data).subscribe(vehicle => {
      this.vehicles = this.vehicles.concat(vehicle);
      this.loading = false;
    });
  }


  onRemoveSearch() {
    this.value = '';
    this.accounts = [];
    this.vehicles = [];
  }

  onValueChange(data: any) {
    if (data.length < 1) {
      this.accounts = [];
      this.vehicles = [];
    }
    else if (data.length == 17) {
      this.updateVehicleStash(data);
    }
    else if (data.includes('http')) {
      let uuid = data.match(/.*([0-9a-f]{32})\.htm$/);
      if (uuid) {
        data = uuid[1];
        this.updateVehicleStash(data);
      }
    }
    else if (data.length == 32) {
      this.updateVehicleStash(data);
    }
  }

  searchForUser() {
    this.accountService.search(this.searchTerm$).subscribe(name => {
      this.accounts = name;
      this.loading = false;
    });
  }

  clearSearchTerm() {
    this.value = '';
  }
}