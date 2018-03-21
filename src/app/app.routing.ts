import { Routes, RouterModule, provideRoutes, PreloadAllModules } from "@angular/router";
import { ModuleWithProviders, Input } from "@angular/core";
import { APP_BASE_HREF } from '@angular/common';
import { AccountComponent } from './_components/account/account.component';
import { AccountSingleComponent } from './_components/account/account-single.component';
import { FeedsComponent } from './feeds/feeds.component';
import { VehicleListComponent } from './_components/vehicles/index';
import { InfluxComponent } from './_components/influx/influx.component';
import { SubmitbugComponent } from './bugs/submitbug.component';
import { IssuetrackerComponent } from './bugs/issuetracker.component';
import { CurrentfeedsComponent } from './feeds/currentfeeds.component';
import { InfluxfeedComponent } from './_components/influx/influxfeed/influxfeed.component';

export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'account', pathMatch: 'full' },
    { path: 'account', component: AccountComponent },
    { path: 'submitbug', component: SubmitbugComponent },
    { path: 'issuetracker', component: IssuetrackerComponent },
    { path: 'currentfeeds', component: CurrentfeedsComponent },
    {
        path: 'account/:id', component: AccountSingleComponent,
        children: [
            { path: '', redirectTo: 'influx', pathMatch: 'full' },
            { path: 'vehicles', component: VehicleListComponent },
            { path: 'vehicles/:type', component: VehicleListComponent },
            { path: 'vehicles/:type/:classification', component: VehicleListComponent },
            { path: 'influx', component: InfluxComponent, children: [
              { path: ':provider', component: InfluxfeedComponent },
              { path: ':provider/:filename/:providerid', component: InfluxfeedComponent },
            ]}
        ],
    },
    { path: 'feeds', component: FeedsComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadAllModules });
