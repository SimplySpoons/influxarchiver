import { Routes, RouterModule, provideRoutes, PreloadAllModules } from "@angular/router";
import { ModuleWithProviders, Input } from "@angular/core";
import { APP_BASE_HREF } from '@angular/common';
import { AccountComponent } from './_components/account/account.component';
import { AccountSingleComponent } from './_components/account/account-single.component';
import { FeedsComponent } from './feeds/feeds.component';


export const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'feeds', pathMatch: 'full' },
    { path: 'account', component: AccountComponent},
    { path: 'account/:id', component: AccountSingleComponent},
    { path: 'feeds', component: FeedsComponent}
]; 

export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES, { preloadingStrategy: PreloadAllModules });