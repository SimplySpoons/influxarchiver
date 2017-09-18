import { Component, OnInit, OnDestroy, EventEmitter, Output } from '@angular/core';
import { AppConfig } from '../app.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  // searchTerm$ = new Subject<string>();
  // value: string = '';
  sub: any;
  routeSub: any;
  currentPage: any;
  title: any;
  @Output() routeChange = new EventEmitter();
  childRoutes: any;
  constructor(private api: AppConfig) {
    this.sub = api.getCurrentUser();
    this.title = api.getTitle();
    console.log('currentUser', this.sub);
  }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.routeSub.unsubscribe();
    console.log('destroyed');
  }

}
