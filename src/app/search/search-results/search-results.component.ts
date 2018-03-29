import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AccountService } from 'app/_services/account.service';
import {AppConfig} from '../../app.config';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent implements OnInit, OnDestroy {

  sub: any;
  http_sub;
  accounts: any[];
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
      if (params.term) {
        this.search = params.term;
        this.searchTerm$.next(params.term);
      }
    })
  }

  searchForUser() {
    this.loading = true;
    this.http_sub = this.accountService.search(this.searchTerm$).subscribe(name => {
      this.accounts = name.data;
      this.searchTerm = name.term;
      this.message = name.message;
      this.loading = false;
    });
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
