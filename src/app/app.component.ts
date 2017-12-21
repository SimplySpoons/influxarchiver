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
        width: '70px'
      })),
      transition('menuIn <=> menuOut', animate(250))
    ]),
    trigger('otherSlide', [
      state('mainOut', style({
        paddingLeft: '255px'
      })),
      state('mainIn', style({
        paddingLeft: '70px'
      })),
      transition('mainOut <=> mainIn', animate(250))
    ]),
    fadeInAnimation
  ]
})
export class AppComponent {
  title = 'Influx Archiver 2.0';
  mainSlide = 'menuOut';
  otherSlide = 'mainOut';
  // loading = true;

  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

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

}
