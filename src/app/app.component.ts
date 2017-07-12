import { Component, trigger, state, style, transition, animate } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('mainSlide', [
      state('out', style({
        transform: 'translateX(0)'
      })),
      state('in',   style({
        transform: 'translateX(0px)'
      })),
      transition('in <=> out', animate(200))
    ])
  ]
})
export class AppComponent {
  title = 'Influx Archiver 2.0';
  state = 'out';
  // loading = true;

  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  isIn = false;   // store state
  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
    this.state == 'out' ? this.state = 'in' : this.state = 'out';
  }

}
