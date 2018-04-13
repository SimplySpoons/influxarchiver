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
  value = '';
  @Input() clearSearch;
  @Input() restoreString;
  @Input() showHeader;

  navLinks = [
    { path: 'influx', label: 'Influx Configs' },
    { path: 'vehicles', label: 'Vehicles' }
  ];

  @Output() routeChange = new EventEmitter();
  constructor(private api: AppConfig) {
    this.sub = api.getCurrentUser();
    this.title = api.getTitle();
    this.acct = this.api.account;
    this.sub = this.api.currentAcouunt.subscribe(account => {
      this.acct = {...this.acct, ...account};
    });
    this.routeSub = this.api.toggleState.subscribe(toggle => {
      this.toggle = toggle;
    });
  }

  onValueChange(data) {
    this.routeChange.emit(data);
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.routeSub.unsubscribe();
  }

}
