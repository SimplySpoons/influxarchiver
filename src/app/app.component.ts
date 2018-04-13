import { Router, NavigationEnd } from '@angular/router';
import { Component, trigger, state, style, transition, animate, keyframes, APP_INITIALIZER, OnInit } from '@angular/core';
import { fadeInAnimation } from './_animations/index';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AppConfig } from './app.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  host: { '[@fadeInAnimation]': '' },
  animations: [
    trigger('mainSlide', [
      state('menuOut', style({
        width: '255px'
      })),
      state('menuIn', style({
        width: '85px'
      })),
      transition('menuIn <=> menuOut', animate(250))
    ]),
    trigger('otherSlide', [
      state('mainOut', style({
        paddingLeft: '255px'
      })),
      state('mainIn', style({
        paddingLeft: '85px'
      })),
      transition('mainOut <=> mainIn', animate(250))
    ]),
    trigger('showHeader', [
      state('true', style({
        marginTop: '0'
      })),
      state('false', style({
        marginTop: '-60px'
      })),
      transition('true <=> false', animate(250))
    ]),
    fadeInAnimation
  ]
})
export class AppComponent implements OnInit {
  title = 'Influx Archiver 2.0';
  mainSlide = 'menuIn';
  otherSlide = 'mainIn';
  withPadding = false;
  sub: any;
  appSub: any;
  currentRoute: string;
  restoreString = '';
  clearSearch = false;
  // loading = true;

  head_sub: any;

  collapsed = false;

  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  constructor(private router: Router, private appConfig: AppConfig) {
    this.sub = router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.withPadding = router.url.includes('account');
        const r = router.url.split('/search');
        this.currentRoute = r[0];
        if (r.length > 1) {
          this.restoreString = r[1];
          console.log(this.restoreString);
          this.clearSearch = false;
        } else {
          this.clearSearch = true;
        }
      }
    });
  }

  removeSearchResults(data: any) {
  }

  onValueChange(data: string) {
    if (data && data.length > 0) {
      this.clearSearch = false;
      this.router.navigate([this.currentRoute, 'search', data]);
    } else {
      this.restoreString = data;
      this.clearSearch = true;
      this.router.navigate([this.currentRoute]);
    }
  }



  ngOnInit() {
    this.appSub = this.appConfig.closeSearch.subscribe((bool: boolean) => {
      if (!bool) {
        this.onValueChange('');
      }
    });
    this.head_sub = this.appConfig.collapsed.subscribe(bool => {
      this.collapsed = bool;
    })
  }

  isIn = false;   // store state
  toggleState(data: any) { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
    this.mainSlide == 'menuOut' ? this.mainSlide = 'menuIn' : this.mainSlide = 'menuOut';
    this.otherSlide == 'mainOut' ? this.otherSlide = 'mainIn' : this.otherSlide = 'mainOut';
  }

  checkAccount(bool) {
    console.log(bool);
    this.withPadding = bool;
  }

}
