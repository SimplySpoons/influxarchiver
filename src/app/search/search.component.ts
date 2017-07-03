import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AccountService } from '../_services/account.service';
import { Account } from '../_models/account';

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
  
  constructor(private accountService: AccountService) {
    this.searchForUser();
  }

  ngOnInit() {
  }

  loadingInit() {
    this.loading = true;
  }

  searchForUser() {
    this.accountService.search(this.searchTerm$).subscribe(name => {
      this.accounts = name;
      this.loading = false;
      console.log(this.accounts);
    });
  }

  clearSearchTerm() {
    this.value = '';
  }
}