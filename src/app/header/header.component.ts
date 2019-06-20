import { AccountService } from './../_services/account.service';
import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import { AppConfig } from '../app.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [

  ]
})
export class HeaderComponent implements OnInit, OnDestroy {

  // searchTerm$ = new Subject<string>();
  // value: string = '';
  sub: any;
  routeSub: any;
  currentPage: any;
  search: any;
  title: any;
  acct: any;
  toggle = false;
  childRoutes: any;
  @Input() showHeader;
  @Input() value: string;

  navLinks = [
    { path: 'influx', label: 'Influx Configs' },
    { path: 'vehicles', label: 'Vehicles' }
  ];

  @Output() routeChange = new EventEmitter();
  constructor(private api: AppConfig, private accountService: AccountService) {
    this.sub = api.getCurrentUser();
    this.title = api.getTitle();
    this.acct = this.api.account;
    this.sub = this.api.currentAcouunt.subscribe(account => {
      this.acct = { ...this.acct, ...account };
    });
    this.routeSub = this.api.toggleState.subscribe(toggle => {
      this.toggle = toggle;
    });

  }

  onValueChange(data) {
    console.log('VALUE CHANGED', data);
    this.routeChange.emit(data);
  }

  ngOnInit() {
    this.accountService.SearchTerm.subscribe(term => {
      this.value = term;
      this.routeChange.emit(term);
    })
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.routeSub.unsubscribe();
  }

}
