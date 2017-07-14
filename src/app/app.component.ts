import { Component, trigger, state, style, transition, animate, keyframes } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('mainSlide', [
      state('menuOut', style({
        width: '300px'
      })),
      state('menuIn', style({
        width: '70px'
      })),
      transition('menuIn <=> menuOut', animate(250))
    ]),
    trigger('otherSlide', [
      state('mainOut', style({
        paddingLeft: '300px'
      })),
      state('mainIn', style({
        paddingLeft: '70px'
      })),
      transition('mainOut <=> mainIn', animate(250))
    ]),
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

  removeSearchResults(data: any){ 
    console.log('called from search', data);
  }


  isIn = false;   // store state
  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
    this.mainSlide == 'menuOut' ? this.mainSlide = 'menuIn' : this.mainSlide = 'menuOut';
    this.otherSlide == 'mainOut' ? this.otherSlide = 'mainIn' : this.otherSlide = 'mainOut';
  }

}
