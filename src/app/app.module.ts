import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, JsonpModule } from '@angular/http';
import { MatModule} from './shared/mat.module'
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
import { FilterPipe, SearchPipe, SearchArchived, DuplicatePipe, FormatPipe, countFilter, FeedPipe, SearchResultsPipe, InventoryCounts } from './_pipes/filter.pipe';
import { feedSearch } from './_pipes/feedsearch.pipe';
import { NgSpinKitModule } from 'ng-spin-kit';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AccordionModule, AccordionConfig } from 'ngx-bootstrap';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { AppConfig } from './app.config';
import { InfluxComponent } from './_components/influx/influx.component';
import { UserService } from './_services/user.service';
import { SubmitbugComponent, IssuetrackerComponent } from './bugs/index';
import { ModalService } from './_services/modal.service';
import { TextEditorComponent } from './_components/wysiwyg.component';
import { ModalComponent } from './_components/modal.component';
import { InfiniteScroller } from './_directives/infinitescroller.directive';
import { ScrollerDirective } from './scroll.directive';
import { CurrentfeedsComponent } from './feeds/currentfeeds.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VehicleCarouselComponent } from './_components/vehicles/vehicle-carousel/vehicle-carousel.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { InfluxfeedComponent } from './_components/influx/influxfeed/influxfeed.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable/src';
import { InfluxService } from './_components/influx/influx-service';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchPageComponent } from './search/search-page/search-page.component';
import { DnaLoginComponent } from '../app/dna-login/dna-login.component'
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import { CredentialService } from './_services/credential.service';
import 'hammerjs';

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
    SearchResultsPipe,
    countFilter,
    FormatPipe,
    InventoryCounts,
    FeedPipe,
    DuplicatePipe,
    SearchArchived,
    InfluxComponent,
    IssuetrackerComponent,
    SubmitbugComponent,
    TextEditorComponent,
    ModalComponent,
    InfiniteScroller,
    ScrollerDirective,
    CurrentfeedsComponent,
    VehicleCarouselComponent,
    InfluxfeedComponent,
    feedSearch,
    SearchResultsComponent,
    SearchPageComponent,
    DnaLoginComponent
  ],
  imports: [
    BrowserModule,
    routing,
    MatModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    ReactiveFormsModule,
    NgSpinKitModule,
    AccordionModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    CarouselModule.forRoot(),
    NgxDatatableModule,
    MatButtonModule
  ],
  exports: [FilterPipe, SearchPipe, SearchArchived, DuplicatePipe,countFilter,InventoryCounts],
  // tslint:disable-next-line:max-line-length
  providers: [CredentialService, AccountService, ModalService, InfluxService, UserService, AccordionConfig, { provide: LocationStrategy, useClass: HashLocationStrategy }, AppConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
