import { Router, NavigationEnd } from '@angular/router';
import { Component, trigger, state, style, transition, animate, keyframes, APP_INITIALIZER } from '@angular/core';
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
    fadeInAnimation
  ]
})
export class AppComponent {
  title = 'Influx Archiver 2.0';
  mainSlide = 'menuIn';
  otherSlide = 'mainIn';
  withPadding = false;

  // loading = true;

  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  constructor(private router: Router){
    router.events.subscribe((route) => {
      if (route instanceof NavigationEnd) {
        this.withPadding = router.url.includes('account');
      }
    });
  }

  removeSearchResults(data: any) {
  }

  getAccountChange(data: any) {
  }

  isIn = false;   // store state
  toggleState(data: any) { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
    this.mainSlide == 'menuOut' ? this.mainSlide = 'menuIn' : this.mainSlide = 'menuOut';
    this.otherSlide == 'mainOut' ? this.otherSlide = 'mainIn' : this.otherSlide = 'mainOut';
  }

  checkAccount(bool){
    console.log(bool);
    this.withPadding = bool;
  }

}
