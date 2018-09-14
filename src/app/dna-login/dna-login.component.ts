import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dna-login',
  templateUrl: './dna-login.component.html',
  styleUrls: ['./dna-login.component.css']
})
export class DnaLoginComponent implements OnInit {
  loggedIn:boolean;
  username:String;

  constructor() {
    this.loggedIn = false;
  }

  ngOnInit() {
  }
}
