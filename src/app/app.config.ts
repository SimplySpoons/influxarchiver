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

    constructor(private jsonp: Jsonp) {
    }

    public getUserData() {
        SPAUTH.appId('influx-archiver2')
            .login()
            .then(function (user) {
                var userName = user.username;
                var firstName = user.firstName;
                var lastName = user.lastName;
                var email = user.email;
                var userData = {
                    userName: userName,
                    firstName: firstName,
                    lastName: lastName,
                    email: email
                };
                return user;
            });
        let promise = new Promise((resolve, reject) => {
            _CurrentUser().then(user => {
                resolve(user);
            });
        });
        return promise;
    }

    public API_CONFIG() {
        return 'http://supporttoolbox.dealerdotcom.corp/staging/hotdog/php/';
    }

}