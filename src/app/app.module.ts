import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FeedsComponent } from './feeds/feeds.component';
import { FeedEditComponent } from './feeds/feed-edit/feed-edit.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountComponent } from './_components/account/account.component';
import { routing } from './app.routing';
import { AccountSingleComponent } from './_components/account/account-single.component';
import {AccountService} from './_services/account.service';
import { VehicleListComponent, VehicleItemComponent, VehicleSingleComponent  } from './_components/vehicles/index';

@NgModule({
  declarations: [
    AppComponent, 
    HeaderComponent, FeedsComponent, FeedEditComponent, SidebarComponent, AccountComponent, AccountSingleComponent, VehicleListComponent, VehicleItemComponent, VehicleSingleComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    JsonpModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
