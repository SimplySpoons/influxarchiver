import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class UserService {
    
    constructor(private http: Http) {
        // this.single = new Average();
    }

    getAllBugs(status: number) {
        return this.http.post('http://localhost:6969/userdata.php', { request: "getAllBugs", status: status }).map(
            (response: Response) => response.json());
    }

    addBugNow(newBug: any) {
        return this.http.post('http://localhost:6969/userdata.php', { request: "addBug", newBug: newBug }).map(
            (response: Response) => response.json());
    }

    markBugComplete(id: string) {
        return this.http.post('http://localhost:6969/userdata.php', { request: "markBugComplete", id: id }).map(
            (response: Response) => response.json());
    }

    deleteBug(id: string) {
        return this.http.post('http://localhost:6969/userdata.php', { request: "deleteBug", id: id }).map(
            (response: Response) => response.json());
    }

     private jwt() {
        // create authorization header with jwt token
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({ 'Authorization': 'Bearer ' + currentUser.token });
            return new RequestOptions({ headers: headers });
        }
    }
}