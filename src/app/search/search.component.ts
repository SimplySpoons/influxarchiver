import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AccountService } from '../_services/account.service';
import { Account } from '../_models/account';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
