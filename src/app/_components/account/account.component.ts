import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AccountService } from '../../_services/account.service';
import { Account } from '../../_models/account'

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  searchTerm$ = new Subject<string>();
  accounts: Array<Account> = [];
  loading =false; 
  constructor(private accountService: AccountService) {
      this.searchForUser();
   }

  ngOnInit() {
  }

  loadingInit(){
    this.loading = true; 
  }

   searchForUser() {
        this.accountService.search(this.searchTerm$).subscribe(name => {
            this.accounts = name;
            this.loading=false; 
        });
    }
}
