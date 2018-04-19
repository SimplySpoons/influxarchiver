import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { AccountService } from 'app/_services/account.service';
import { AppConfig } from '../../app.config';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnDestroy {

  sub: any;
  http_sub;
  accounts: Account[] = [];
  loading = false;
  searchTerm = '';
  message = '';
  search = '';
  searchRoute: boolean;
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

  searchForUser() {
    if (this.search.length > 0) {
      this.loading = true;
    }
    this.http_sub = this.accountService.search(this.searchTerm$).subscribe(name => {
      let data = [...this.accounts, ...name.data];
      data = this.arrayUnique(data);
      this.accounts = data;
      this.searchTerm = name.term;
      this.message = name.message;
      this.loading = false;
      this.accountService.isLoading.next(false);
    });
  }

  arrayUnique(array) {
    const a = array.concat();
    for (let i = 0; i < a.length; ++i) {
      for (let j = i + 1; j < a.length; ++j) {
        if (a[i].accountId === a[j].accountId) {
          a.splice(j--, 1);
        }
      }
    }
    return this.setMatches(a);
  }

  setMatches(accounts) {
    for (let j = 0; j < accounts.length; j++) {
      const acct = accounts[j];
      this.foundList = this.foundList.concat(acct.accountId);
      let search = this.search;
      const push = [];
      if (search.length > 0 && acct.name.length > 0) {
        let numMatches = 0;
        const id = acct.accountId;
        const acctName = acct.name.toLowerCase().replace(' ', '').toString();
        search = search.toLowerCase().replace(' ', '').toString();
        if (id.includes(search) || acctName.includes(search)) {
          acct.isMatch = 1;
          acct.idIndex = id.indexOf(search) * -1;
          acct.acctIndex = acctName.indexOf(search) * -1;
          if (acct.idIndex === 1) {
            acct.idIndex *= -10;
          } else if (acct.acctIndex === 1) {
            acct.acctIndex *= -10;
          }
        } else {
          acct.isMatch = 0;
          acct.idIndex = -100;
          acct.acctIndex = -100;
        }
        acct.sum = this.sumIndex(acct);
      }
    }
    return accounts;
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
