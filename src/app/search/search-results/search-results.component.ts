import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Component, OnInit, OnDestroy } from '@angular/core';
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
  searchSub: any;
  searchTerm$: Subject<string> = new Subject<string>();
  constructor(private router: Router, private route: ActivatedRoute, private accountService: AccountService, private appConfig: AppConfig) {
    console.log(this.route.parent);
  }

  ngOnInit() {
    this.searchForUser();
    this.sub = this.route.params.subscribe(params => {
      if (params.term && params.term.length > 0) {
        this.search = params.term;
        this.accountService.isLoading.next(true);
        this.searchTerm$.next(params.term);
      } else {
        this.accounts = [];
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

  searchForUser() {
    this.loading = true;
    this.accountService.isLoading.next(true);
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
    this.appConfig.closeSearch.next(false);
  }

  formatRequest(data: any) {
    console.log(data);
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
    this.http_sub.unsubscribe();
  }

}
