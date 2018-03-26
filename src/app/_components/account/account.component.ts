import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AccountService } from '../../_services/account.service';
import { Account } from '../../_models/account';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  accounts: Array<Account> = [];
  loading = false;
  pasted = false;
  value;

  constructor(private accountService: AccountService) {
    this.searchForUser();
  }

  ngOnInit() {
  }

  onValueChange(data: any) {
    console.log(data);
    this.searchTerm$.next(data);
  }

  formatRequest(data: any) {
    this.pasted = true;
  }

  loadingInit() {
    this.accounts = [];
    this.loading = true;
  }

  searchForUser() {
    this.accountService.search(this.searchTerm$).subscribe(name => {
      this.accounts = name.data;
      this.loading = false;
    });
  }

}
