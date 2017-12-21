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

    // NONE OF THESE PHP FILES EXIST YET, WE NEED TO CREATE A DATABASE TO HOUSE ALL THE BUGS, AND CREATE ALL OF THESE FILES. BEFORE NOW WE WERE JUST USING THE TICKETRATER DATABASE BUT WE NEED A SEPARATE ONE FOR INFLUXARCHIVER2
    getAllBugs(status: number) {
        return this.http.post('https://supporttoolbox.dealerdotcom.corp/var/www/html/staging/hotdog/php/bugfunctions.php', { request: "getAllBugs", status: status }).map(
            (response: Response) => response.json());
    }

    addBugNow(newBug: any) {
        return this.http.post('https://supporttoolbox.dealerdotcom.corp/var/www/html/staging/hotdog/php/bugfunctions.php', { request: "addBug", newBug: newBug }).map(
            (response: Response) => response.json());
    }

    markBugComplete(id: string) {
        return this.http.post('https://supporttoolbox.dealerdotcom.corp/var/www/html/staging/hotdog/php/bugfunctions.php', { request: "markBugComplete", id: id }).map(
            (response: Response) => response.json());
    }

    deleteBug(id: string) {
        return this.http.post('https://supporttoolbox.dealerdotcom.corp/var/www/html/staging/hotdog/php/bugfunctions.php', { request: "deleteBug", id: id }).map(
            (response: Response) => response.json());
    }
}