import { Inject, Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

declare var SPAUTH: any;

export function _CurrentUser() {
    return SPAUTH.user().then(function (user) {
        return user;
    });
}

@Injectable()
export class AppConfig {

    private currentUser: any = []; 
    title: any; 
    constructor(private jsonp: Jsonp) {
    }

    public getUserData() {
        SPAUTH.appId('influx-archiver2')
            .login()
            .then(function (user) {
                //console.log(user);
                var userName = user.username;
                var firstName = user.firstName;
                var lastName = user.lastName;
                var email = user.email;
                var token = user.token; 
                var userData = {
                    userName: userName,
                    firstName: firstName,
                    lastName: lastName,
                    email: email,
                    token: token
                };
                return user;
            });
        let promise = new Promise((resolve, reject) => {
            _CurrentUser().then(user => {
                resolve(user);
            });
        });
        this.setCurrentUser(promise); 
        return promise;
    }

    public setCurrentUser(data: any){ 
        data.then(currentUser => { 
            this.currentUser = currentUser, 
            this.title = this.currentUser.firstName; 
        });
    }
    setTitle(name: string){ 
        this.title = name; 
    }
    setDefaultTitle(){
        this.title = this.currentUser.fullName; 
    }

    getTitle() { 
        return this.title; 
    }

    public getCurrentUser() {
        return this.currentUser;
    }

    public API_CONFIG() {
        return 'https://supporttoolbox.dealerdotcom.corp/staging/hotdog/php/';
    }

}