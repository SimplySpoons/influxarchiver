import { Subject } from 'rxjs/Subject';
import { Inject, Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Account } from './_models/account';

declare var SPAUTH: any;

export function _CurrentUser() {
  return SPAUTH.user().then(function (user) {
    return user;
  });
}

@Injectable()
export class AppConfig {

  private currentUser: any = [];
  currentAcouunt: Subject<Account> = new Subject<Account>();
  toggleState: Subject<boolean> = new Subject<boolean>();
  closeSearch: Subject<boolean> = new Subject<boolean>();
  account: any = new Account();
  copy: any;
  title: any;
  constructor(private jsonp: Jsonp) {
    console.log(this.account);
    this.currentAcouunt.next(this.account);
  }


  public getUserData() {
    SPAUTH.appId('influx-archiver2')
      .login()
      .then(function (user) {
        const userName = user.username;
        const firstName = user.firstName;
        const lastName = user.lastName;
        const email = user.email;
        const token = user.token;
        const userData = {
          userName: userName,
          firstName: firstName,
          lastName: lastName,
          email: email,
          token: token
        };
        return user;
      });
    const promise = new Promise((resolve, reject) => {
      _CurrentUser().then(user => {
        resolve(user);
      });
    });
    this.setCurrentUser(promise);
    return promise;
  }

  public setCurrentUser(data: any) {
    data.then(currentUser => {
      this.currentUser = currentUser,
        this.title = this.currentUser.firstName;
    });
  }
  setTitle(name: string) {
    this.title = name;
  }
  setDefaultTitle() {
    this.title = this.currentUser.fullName;
  }

  setCurrentAccount(data: any) {
    this.account = {...this.account, ...data};
    this.currentAcouunt.next(this.account);
    // this.currentAcouunt.next(acct);
  }

  getTitle() {
    return this.title;
  }

  public getCurrentUser() {
    return this.currentUser;
  }

  public API_CONFIG() {
    return 'http://localhost:6969/';
  }

}
