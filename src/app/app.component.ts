import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Influx Archiver 2.0';
  // loading = true;

  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  isIn = false;   // store state
  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
    console.log("TEST " + bool)
  }

}
