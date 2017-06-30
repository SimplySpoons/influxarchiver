import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FeedsComponent } from './feeds/feeds.component';
import { FeedEditComponent } from './feeds/feed-edit/feed-edit.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AccountComponent } from './_components/account/account.component';
import { routing } from './app.routing';
import { AccountSingleComponent } from './_components/account/account-single.component';
import { AccountService } from './_services/account.service';
import { VehicleListComponent, VehicleItemComponent, VehicleSingleComponent } from './_components/vehicles/index';
import { QuicklinksComponent } from './quicklinks/quicklinks.component';
import { DropdownModule } from "ngx-dropdown";
import { FilterPipe, SearchPipe } from './_pipes/filter.pipe';
import { NgSpinKitModule } from 'ng-spin-kit';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AccordionModule, AccordionConfig } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppConfig } from './app.config';
import { InfluxComponent } from './_components/influx/influx.component';
import { SearchComponent } from './search/search.component';
import { UserService } from './_services/user.service';
import { SubmitbugComponent, IssuetrackerComponent } from './bugs/index';
import { ModalService } from './_services/modal.service';
import { TextEditorComponent } from './_components/wysiwyg.component';
import { ModalComponent } from './_components/modal.component';
import { InfiniteScroller } from './_directives/infinitescroller.directive';
import {ScrollerDirective} from './scroll.directive';

export function initializeCurrentUser(config: AppConfig) {
  return () => config.getUserData();
}


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FeedsComponent,
    FeedEditComponent,
    SidebarComponent,
    AccountComponent,
    AccountSingleComponent,
    VehicleListComponent,
    VehicleItemComponent,
    VehicleSingleComponent,
    QuicklinksComponent,
    FilterPipe,
    SearchPipe,
    InfluxComponent,
    SearchComponent,
    IssuetrackerComponent,
    SubmitbugComponent,
    TextEditorComponent,
    ModalComponent,
    InfiniteScroller,
    ScrollerDirective
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    JsonpModule,
    DropdownModule,
    FormsModule,
    ReactiveFormsModule,
    NgSpinKitModule,
    AccordionModule,
    BsDropdownModule.forRoot()
  ],
  exports: [FilterPipe, SearchPipe],
  providers: [AccountService, ModalService, UserService, AccordionConfig, { provide: LocationStrategy, useClass: HashLocationStrategy }, AppConfig, { provide: APP_INITIALIZER, useFactory: initializeCurrentUser, deps: [AppConfig], multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
