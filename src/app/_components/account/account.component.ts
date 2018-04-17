import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AppConfig} from '../../app.config';
import { AccountService } from '../../_services/account.service';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {
  title = 'Influx Archiver 2.0';
  mainSlide = 'menuIn';
  otherSlide = 'mainIn';
  withPadding = false;
  sub: any;
  appSub: any;
  currentRoute: string;
  restoreString = '';
  clearSearch = false;
  // loading = true;

  head_sub: any;

  collapsed = false;

  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  constructor(private appConfig: AppConfig,
    private accountService: AccountService) {
  }

  removeSearchResults(data: any) {
  }

  ngOnInit() {
    this.head_sub = this.appConfig.collapsed.subscribe(bool => {
      this.collapsed = bool;
    })
  }

  isIn = false;   // store state
  toggleState(data: any) { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
    this.mainSlide == 'menuOut' ? this.mainSlide = 'menuIn' : this.mainSlide = 'menuOut';
    this.otherSlide == 'mainOut' ? this.otherSlide = 'mainIn' : this.otherSlide = 'mainOut';
  }

  checkAccount(bool) {
    console.log(bool);
    this.withPadding = bool;
  }

}
