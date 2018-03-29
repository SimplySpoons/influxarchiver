import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AccountService } from '../../_services/account.service';
import { Account } from '../../_models/account';
import {AppConfig} from '../../app.config';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit, OnDestroy {

  sub: any;
  appSub: any;
  currentRoute: string;
  accountId: any;
  constructor(private router: Router, private route: ActivatedRoute, private appConfig: AppConfig) {
    this.currentRoute = this.router.url;
    if(this.currentRoute.includes('search')){
      const arr = this.currentRoute.split('/search');
      this.currentRoute = arr[0];
    }

    console.log(route);
   /* const new_sub = this.route.firstChild.params.subscribe(params => {
      this.accountId = params['id'];
      console.log(params);
      /* this.accountService.getAccountData(this.accountId).subscribe(account => {
        this.account = { ...account.data };
        this.setCount();
        console.log(this.account);
        this.accountService.setCurrentAccount(this.account);
        this.accountService.getApiConfigs(this.accountId).subscribe(
          success => {
            this.apis = success.data;
          },
          error => {
            console.log(error);
          }
        );
        this.loading = false;
      }); */
   // });
  }

  ngOnInit() {
    this.sub = this.router.events.subscribe((url: any) => {
      if (!url.url.includes('search') && url.url.length > 0) {
        this.currentRoute = url.url;
      }
    })
     this.appSub = this.appConfig.closeSearch.subscribe((bool: boolean)=>{
       if (!bool){
          this.onValueChange('');
        }
     });
  }

  onValueChange(data: string) {
    if (data && data.length > 0) {
      this.router.navigate([this.currentRoute,'search', data]);
    } else {
      this.router.navigate([this.currentRoute]);
    }
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }


}
