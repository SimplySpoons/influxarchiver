import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import { AppConfig } from '../app.config';

@Injectable()
export class UserService {
    API_URL;

    constructor(private http: Http, private conf: AppConfig) {
        this.API_URL = this.conf.API_CONFIG();
    }

    // NONE OF THESE PHP FILES EXIST YET, WE NEED TO CREATE A DATABASE TO HOUSE ALL THE BUGS, AND CREATE ALL OF THESE FILES. BEFORE NOW WE WERE JUST USING THE TICKETRATER DATABASE BUT WE NEED A SEPARATE ONE FOR INFLUXARCHIVER2
    getAllBugs(status: number) {
        return this.http.post(this.API_URL + 'bugfunctions.php', { request: "getAllBugs", status: status }).map(
            (response: Response) => response.json());
    }

    addBugNow(newBug: any) {
        return this.http.post(this.API_URL + 'bugfunctions.php', { request: "addBug", newBug: newBug }).map(
            (response: Response) => response.json());
    }

    markBugComplete(id: string) {
        return this.http.post(this.API_URL + 'bugfunctions.php', { request: "markBugComplete", id: id }).map(
            (response: Response) => response.json());
    }

    deleteBug(id: string) {
        return this.http.post(this.API_URL + 'bugfunctions.php', { request: "deleteBug", id: id }).map(
            (response: Response) => response.json());
    }
}