import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { AccountService } from 'app/_services/account.service';
import { AppConfig } from '../../app.config';

import { Account  } from '../../_models/account';
import { Item  } from '../../_models/item';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnDestroy {

  sub: any;
  http_sub;
  accounts: Account[] = [];
  vehicles: Item[] = [];
  loading = false;
  searchTerm = '';
  selected: any = [];
  message = '';
  search = '';
  searchRoute: boolean;F
  selectedItem: Item;
  searchSub: any;
  foundList: any = [];
  route_sub: any;
  isParam = false;
  value = '';
  @Output() isSearchRoute: EventEmitter<boolean> = new EventEmitter<boolean>();
  searchTerm$: Subject<any> = new Subject<any>();
  @Output() searchParam: EventEmitter<string> = new EventEmitter<string>();
  constructor(private router: Router, private route: ActivatedRoute, private accountService: AccountService, private appConfig: AppConfig) {
    console.log(this.route.parent);
  }



  ngOnInit() {
    this.searchForUser();
    this.registerSubscriber();
    this.searchRoute = this.appConfig.searchRoute;
    this.isSearchRoute.emit(this.searchRoute);
    this.route_sub = this.route.queryParams.subscribe(params => {
      if (params.searchTerm && params.searchTerm.length > 0) {
        this.searchParam.emit(params.searchTerm);
        this.appConfig.closeSearch.next(true);
        this.isParam = true;
      } else {
        this.isParam = false;
        this.appConfig.closeSearch.next(false);
      }
    })
    this.appConfig.isSearchRoute.subscribe(searchRoute => {
      this.isSearchRoute.emit(searchRoute);
    })
  }
  getItem(data: any) {
    this.selectedItem = data;
    this.selected = true;
  }
  closeSingle(data: any) {
    this.selectedItem = null;
    this.selected = false;
  }
  registerSubscriber() {
    this.sub = this.accountService.SearchTerm.subscribe(term => {
      console.log(term);
      if (term.length > 0) {
        this.search = term;
        const p = { term: this.search, foundList: this.foundList };
        this.searchTerm$.next(p);
        this.accountService.isLoading.next(true);
      }
    })
  }


  setNewAccount(account) {
    this.appConfig.setCurrentAccount(account);
  }


  updateCurrentAccount(index) {
    const account = this.accounts[index];
    this.appConfig.setCurrentAccount(account, true);
  }

  closeInstance() {
    this.accounts = [];
    this.search = '';
  }

  openVehicleSingle(vehicle: any) { }

  searchForUser() {
    var queryParam = '';
    if (this.search.length > 0) {
      this.loading = true;
    }
    this.http_sub = this.accountService.search(this.searchTerm$).subscribe(name => {
      console.log('tesafas');
      this.accounts = [];
      this.vehicles = [];
      let data = [ ...name.data];
      data = this.arrayUnique(data);
      if(name.resultType === 'account') {
        this.accounts = data;
      } else {
        this.vehicles = data;
      }

      console.log('type: ');
      console.log(this.accounts);
      this.searchTerm = name.term;
      this.message = name.message;
      this.loading = false;
      this.accountService.isLoading.next(false);
    });



    console.log('this.http_sub')
    console.log(this.http_sub);
  }

  getImageSrc(data: any, accountId: string) {
    let firstLetter = accountId.charAt(0);
    let url = 'https://pictures.dealer.com/ddc/resize/320x/quality/70/sharpen/1/ddc/' + firstLetter + '/' + accountId + '/' + data;
    return url;
  }
  arrayUnique(array) {
    console.log('HAarray');
    console.log(array);
    const a = array.concat();
    console.log('just a');
    console.log(array);
    for (let i = 0; i < a.length; ++i) {
      for (let j = i + 1; j < a.length; ++j) {
        if (a[i].accountId === a[j].accountId) {
          a.splice(j--, 1);
        }
      }
    }
    return a;
  }



  sumIndex(a) {
    return a.isMatch + a.idIndex + a.acctIndex;
  }
  getLargest(data: any) {
    data.sort((a: any, b: any) => {

      if (a.sum < b.sum) {
        return 1;
      } else if (a.sum > b.sum) {
        return -1;
      } else {
        return 0;
      }
    });
    return data;
  }


  closeSearch() {
    this.searchParam.emit('');
    this.accounts = [];
    this.search = '';
  }

  formatRequest(data: any) {
    console.log(data);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.http_sub.unsubscribe();
    this.route_sub.unsubscribe();
  }

}
