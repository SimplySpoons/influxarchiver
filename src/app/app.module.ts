import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeedsComponent } from './feeds/feeds.component';
import { FeedEditComponent } from './feeds/feed-edit/feed-edit.component';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, FeedsComponent, FeedEditComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
