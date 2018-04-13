import { Component, OnInit } from '@angular/core';
import {AppConfig} from '../../app.config';
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})

export class AccountComponent implements OnInit {

  constructor(private appConfig: AppConfig) {

  }

  ngOnInit() {

  }

}
