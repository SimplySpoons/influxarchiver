import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { AppConfig } from '../app.config';

@Injectable()
export class CredentialService {

    constructor(private http:Http,private config:AppConfig){

    }

    CheckDNACredentials(){
        return this.http.get(this.config.API_CONFIG()+"/api/admin");
    }
}