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
}
