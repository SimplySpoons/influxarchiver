import { Component,Input, OnInit } from '@angular/core';
import { AppConfig } from '../app.config';

@Component({
  selector: 'app-dna-login',
  templateUrl: './dna-login.component.html',
  styleUrls: ['./dna-login.component.css']
})
export class DnaLoginComponent implements OnInit {
  showPassword:boolean = false;
  checkingLogin:boolean = false;
  @Input() dna_username:string;
  @Input() dna_password:string;

  constructor(private appConfig:AppConfig) {
    this.dna_password = "";
    this.dna_username = "";

    this.appConfig.currentAcouunt.subscribe(account => {
      console.log(account);
    })
  }

  ngOnInit() {
  }

  //Contacts a php endpoint query for data if it is returned then grant the user access.
  CheckLogin(){
    if(this.dna_username != "" && typeof this.dna_username != "undefined" && this.dna_password != "" && typeof this.dna_password != "undefined"){
      this.checkingLogin = true;
      this.showPassword = false;
    }else{
      this.showPassword = true;
    }
  }
}
