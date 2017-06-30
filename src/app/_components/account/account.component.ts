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
  constructor(private accountService: AccountService) {
      
   }

  ngOnInit() {
  }

   searchForUser() {
        this.accountService.search(this.searchTerm$).subscribe(name => {
            this.accounts = this.accounts.concat(name);
        });
    }

}
