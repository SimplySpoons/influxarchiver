webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/_animations/fade-in.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fadeInAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

var fadeInAnimation = Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('fadeInAnimation', [
    // route 'enter' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':enter', [
        // styles at start of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ opacity: 0 }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.4s', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({ opacity: 1 }))
    ]),
]);


/***/ }),

/***/ "./src/app/_animations/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fade_in_animation__ = __webpack_require__("./src/app/_animations/fade-in.animation.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__fade_in_animation__["a"]; });



/***/ }),

/***/ "./src/app/_animations/slide-down-animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideDownAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

var slideDownAnimation = 
// trigger name for attaching this animation to an element using the [@triggerName] syntax
Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('slideDownAnimation', [
    // end state styles for route container (host)
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
        // the view covers the whole screen with a semi tranparent background
        position: 'fixed',
        top: '60px',
        left: '80px',
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.85)',
        zIndex: 999,
        overflowY: 'auto',
    })),
    // route 'enter' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':enter', [
        // styles at start of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            // start with the content positioned off the right of the screen,
            // -400% is required instead of -100% because the negative position adds to the width of the element
            top: '-100%',
            // start with background opacity set to 0 (invisible)
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            // transition the right position to 0 which slides the content into view
            top: '55px',
            // transition the background opacity to 0.8 to fade it in
            backgroundColor: 'rgba(0, 0, 0, 0.65)'
        }))
    ]),
    // route 'leave' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':leave', [
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            // transition the right position to -400% which slides the content out of view
            top: '-100%',
            // transition the background opacity to 0 to fade it out
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }))
    ])
]);


/***/ }),

/***/ "./src/app/_animations/slide-in.animation.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slideInOutAnimation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");

var slideInOutAnimation = 
// trigger name for attaching this animation to an element using the [@triggerName] syntax
Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["m" /* trigger */])('slideInOutAnimation', [
    // end state styles for route container (host)
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* state */])('*', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
        // the view covers the whole screen with a semi tranparent background
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.65)',
        zIndex: 9999,
    })),
    // route 'enter' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':enter', [
        // styles at start of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            // start with the content positioned off the right of the screen,
            // -400% is required instead of -100% because the negative position adds to the width of the element
            right: '-400%',
            // start with background opacity set to 0 (invisible)
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }),
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            // transition the right position to 0 which slides the content into view
            right: 0,
            // transition the background opacity to 0.8 to fade it in
            backgroundColor: 'rgba(0, 0, 0, 0.65)'
        }))
    ]),
    // route 'leave' transition
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["l" /* transition */])(':leave', [
        // animation and styles at end of transition
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('.5s ease-in-out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* style */])({
            // transition the right position to -400% which slides the content out of view
            right: '-400%',
            // transition the background opacity to 0 to fade it out
            backgroundColor: 'rgba(0, 0, 0, 0)'
        }))
    ])
]);


/***/ }),

/***/ "./src/app/_components/account/account-single.component.css":
/***/ (function(module, exports) {

module.exports = ".feedWins .col-md-2.active, .scrubAtts .col-md-2.active {\n    color: green;\n    font-weight: bold;\n    font-size: 1.1em;\n}\n\n.feedWins .col-md-2,\n.scrubAtts .col-md-2  {\n     font-size: 1.1em;\n     color: #ccc;\n}\n\n.panel-subheading{\n   padding-left: 10px;\n}\n\n.panel-subheading span {\n    background: #337ab7;\n    color: #fff;\n    margin: 5px;\n    padding: 5px;\n    border-radius: 5px;\n    font-size: 12px;\n}\n\n.nav .type.heading h3 { font-weight: bold; }\n\n.row.name h3,.name.accountName { font-style: italic; }\n\n.nav a.btn.New {\n    background-color:#5bc0de;\n    border-color:#5bc0de;\n}\n\n.nav a.btn.New:hover {\n    background-color:#3F869B;\n    border-color:#3F869B;\n}\n\n.panel-sub small {\n    font-size:100%;\n}\n\n.goodBad {\n    margin-top:15px;\n}\n\n.cc-btns {\n    font-weight:bold;\n}\n\n.title {\n    margin-bottom: 0;\n}\n\n.pageWrapper {\n  background: #fafafa;\n  height: 100%;\n  position: absolute;\n  right: 0;\n  overflow:hidden;\n  bottom: 0;\n  overflow-x: hidden;\n  width: 100%;\n}\n\n.header-nav {\n  background: #E1E6EF;\n  z-index: 9;\n  border-top: 1px solid rgba(0, 0, 0, .12);\n  overflow: visible;\n}\n\n.header-nav i {\n  margin-right: 10px;\n}\n\n.header-nav .count {\n  margin-left: 10px;\n}\n\n.pos-relative {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n\n.active,\n.active:focus, .active:hover {\n  background: #fafafa !important;\n}\n\n.active {\n    border: 1px solid rgba(0, 0, 0, .12);\n    border-bottom: 0;\n    /* opacity: 1;\n    height: 50px;\n    top: 1px;\n    */\n}\n\n.secondary-row span {\n   color: #636879;\n   margin: 0 5px;\n }\n\n.secondary-row span:not(:last-child):after {\n   content: \"/\";\n   margin-left: 10px;\n }\n\n.secondary-row i {\n   margin-right: 10px;\n }\n\n.single-header {\n    height: 60px;\n    min-height: 60px;\n  }\n\n.pos-relative {\n  height: 100%;\n}\n\n.loading {\n      display: block;\n      height: 5px;\n      overflow: hidden;\n      position: absolute;\n      -webkit-transition: opacity 250ms linear;\n      transition: opacity 250ms linear;\n      width: 100%;\n      z-index: 99999999999;\n      top: -3px;\n      right: 0;\n      width: 100%;\n\n}\n\n.mat-tab-link {\n  padding: 0 7px;\n  min-width: 151px;\n}"

/***/ }),

/***/ "./src/app/_components/account/account-single.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Account Model -->\n<!--\n    accountId: string;\n    name: string;\n    publicUrl: string;\n    internalUrl: string;\n    address1: string;\n    address2: string;\n    city: string;\n    state: string;\n    zip: string;\n    country: string;\n-->\n<div #singleHeader>\n  <mat-toolbar class=\"single-header\">\n    <mat-toolbar-row class=\"secondary-row\" *ngIf=\"account.accountId\">\n      <span>\n        <i class=\"fa fa-id-card\"></i>\n        <b>{{account.accountId}}</b>\n      </span>\n      <span>\n        {{account.name}}\n      </span>\n      <span>\n        <i class=\"fa fa-map-marker\"></i> {{account.address1}}{{account.address2}}, {{account.city}}, {{account.state}} {{account.zip}} {{account.country}}\n        </span>\n      <span *ngIf=\"apis\">\n        <small *ngIf=\"apis.type==1\"> vAuto API:\n          <b> Yes </b>\n        </small>\n        <small *ngIf=\"apis.type==0\"> vAuto API:\n          <b> No </b>\n        </small>\n      </span>\n      <span>\n        <a class=\"btn btn-sm\" href=\"http://{{account.accountId}}.cms.dealer.com\" target=\"_blank\">\n          <i class=\"fa fa-laptop\"></i>CMS Site</a>\n          <a class=\"btn btn-sm\" href=\"{{account.publicUrl}}\" target=\"_blank\">\n              <i class=\"fa fa-laptop\"></i>Live Site</a>\n      </span>\n    </mat-toolbar-row>\n  </mat-toolbar>\n  <nav mat-tab-nav-bar class=\"header-nav\" [class.toggle]=\"toggle\">\n    <a mat-tab-link *ngFor=\"let link of navLinks; let i = index\" [routerLink]=\"[link.path]\" routerLinkActive #rla=\"routerLinkActive\"\n      [active]=\"rla.isActive\" [class.active]=\"rla.isActive\">\n      <i class=\"fa {{link.class}}\"></i>{{link.label}}\n      <span class=\"count\">{{link.count}}</span>\n    </a>\n  </nav>\n</div>\n<div class=\"pos-relative\" [style.height.px]=\"pageHeight\" (window:resize)=\"setHeights()\">\n  <mat-progress-bar [class.show]=\"loading\" class=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n  <div class=\"pageWrapper\" #page>\n    <router-outlet></router-outlet>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/_components/account/account-single.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountSingleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__("./src/app/_services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_account__ = __webpack_require__("./src/app/_models/account.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__("./src/app/app.config.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountSingleComponent = (function () {
    function AccountSingleComponent(accountService, route, appConfig) {
        var _this = this;
        this.accountService = accountService;
        this.route = route;
        this.appConfig = appConfig;
        this.account = new __WEBPACK_IMPORTED_MODULE_2__models_account__["a" /* Account */]();
        this.accountId = '';
        this.influxLoading = false;
        this.influxString = '';
        this.influxConfigs = [];
        this.invCounts = [];
        this.pageHeight = 0;
        this.headerHeight = 0;
        this.windowHeight = window.innerHeight;
        this.hideAccountInfo = false;
        this.loading = true;
        this.navLinks = [
            { path: 'influx', label: 'Influx Configs', class: 'fa-cogs', count: 0 },
            { path: 'vehicles', label: 'Vehicles', class: 'fa-car', count: 0 }
        ];
        this.height = window.innerHeight - 140;
        this.callbackReady = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.loading = true;
        this.sub = this.route.params.subscribe(function (params) {
            _this.accountId = params['id'];
            _this.getAccountData();
        });
    }
    AccountSingleComponent.prototype.getDnaLink = function () {
        return 'https://dna.dealer.com/views/clients/client-dashboard/client-dashboard?accountId=' + this.account.accountId;
    };
    AccountSingleComponent.prototype.loadCorrectVehicles = function (type, classification) {
        this.callbackReady.emit({ type: type, classification: classification });
        return '/account/' + this.accountId + '/vehicles/' + type + '/' + classification;
    };
    AccountSingleComponent.prototype.showConfigsAsString = function (data) {
        return JSON.stringify(this.influxConfigs);
    };
    AccountSingleComponent.prototype.setCount = function () {
        if (this.account.num_configs) {
            this.navLinks[0].count = Number(this.account.num_configs);
        }
        else {
            this.navLinks[0].count = 0;
        }
        if (this.account.num_vehicles) {
            this.navLinks[1].count = Number(this.account.num_vehicles);
        }
        else {
            this.navLinks[1].count = 0;
        }
    };
    AccountSingleComponent.prototype.getAccountData = function () {
        var _this = this;
        this.accountService.getAccountData(this.accountId).subscribe(function (account) {
            _this.account = __assign({}, _this.account, account.data);
            _this.setCount();
            _this.appConfig.setCurrentAccount(_this.account);
            _this.accountService.getApiConfigs(_this.accountId).subscribe(function (success) {
                _this.apis = success.data;
            }, function (error) {
                console.log(error);
            });
        });
    };
    AccountSingleComponent.prototype.setHeights = function (data) {
        if (data === void 0) { data = null; }
        if (data !== null) {
            console.log("RESIZE EVENT", data);
        }
        this.headerHeight = this.singleHeader.nativeElement.clientHeight;
        this.pageHeight = this.windowHeight - this.headerHeight;
        console.log(this.headerHeight);
        console.log(this.pageHeight);
    };
    /*
  <div class="cc-btns"  *ngIf="!loading">
  <p>Quick Links for {{account.name}}:</p>
  <a [href]="getInventoryManagerLink()" class="btn btn-success" target="_blank">Inventory Manager</a>
  <a [href]="getComposerLink()" class="btn btn-success" target="_blank">Composer</a>
  <a [href]="getDnaLink()" class="btn btn-success" target="_blank">DNA</a>
  <a [href]="getExportViewLink()" class="btn btn-success" target="_blank">Exported Inventory</a>
  <a [href]="getInboundFeedsLink()" class="btn btn-success" target="_blank">Inbound Feeds</a>
  <a [href]="getSolrLink()" class="btn btn-success" target="_blank">SOLR Refresh</a>
  </div> */
    AccountSingleComponent.prototype.getInventoryManagerLink = function () {
        return '//apps.dealer.com/inventory/as/' + this.account.accountId + '/' + this.account.accountId + '-admin/i/index';
    };
    AccountSingleComponent.prototype.getExportViewLink = function () {
        return '//apps.dealer.com/inventory/as/' + this.account.accountId + '/' + this.account.accountId + '-admin/market/inventoryexports';
    };
    AccountSingleComponent.prototype.getInboundFeedsLink = function () {
        return '//apps.dealer.com/inventory/as/' + this.account.accountId + '/' + this.account.accountId + '-admin/publishRules/index';
    };
    AccountSingleComponent.prototype.getSolrLink = function () {
        return '//apps.dealer.com/inventory/as/' + this.account.accountId + '/' + this.account.accountId + '-admin/solrRefresh/index';
    };
    AccountSingleComponent.prototype.getComposerLink = function () {
        return '//' + this.account.accountId + '.composer.dealer.com/website/as/' + this.account.accountId + '/' + this.account.accountId + '-admin/composer/index#website';
    };
    AccountSingleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appConfig.currentAcouunt.subscribe(function (account) {
            _this.loading = account.loading;
            console.log(_this.loading);
        });
        setTimeout(function () {
            _this.setHeights();
        }, 250);
    };
    AccountSingleComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        if (this.meta_sub) {
            this.meta_sub.unsubscribe();
        }
    };
    AccountSingleComponent.prototype.onScroll = function (event) {
        console.log(event);
        if (event.target.scrollTop > 0) {
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('page'),
        __metadata("design:type", Object)
    ], AccountSingleComponent.prototype, "pageWrapper", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewChild */])('singleHeader'),
        __metadata("design:type", Object)
    ], AccountSingleComponent.prototype, "singleHeader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */])
    ], AccountSingleComponent.prototype, "callbackReady", void 0);
    AccountSingleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account-single',
            template: __webpack_require__("./src/app/_components/account/account-single.component.html"),
            styles: [__webpack_require__("./src/app/_components/account/account-single.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppConfig */]])
    ], AccountSingleComponent);
    return AccountSingleComponent;
}());



/***/ }),

/***/ "./src/app/_components/account/account.component.css":
/***/ (function(module, exports) {

module.exports = ".feedWins .col-md-2.active, .scrubAtts .col-md-2.active {\n    color: green;\n    font-weight: bold;\n    font-size: 1.1em;\n}\n\n.feedWins .col-md-2,\n.scrubAtts .col-md-2  {\n     font-size: 1.1em;\n     color: #ccc;\n}\n\n.panel-subheading{\n   padding-left: 10px;\n}\n\n.panel-subheading span {\n    background: #337ab7;\n    color: #fff;\n    margin: 5px;\n    padding: 5px;\n    border-radius: 5px;\n    font-size: 12px;\n}\n\n.nav .type.heading h3 { font-weight: bold; }\n\n.row.name h3,.name.accountName { font-style: italic; }\n\n.nav a.btn.New {\n    background-color:#5bc0de;\n    border-color:#5bc0de;\n}\n\n.nav a.btn.New:hover {\n    background-color:#3F869B;\n    border-color:#3F869B;\n}\n\n.panel-sub small {\n    font-size:100%;\n}\n\n.goodBad {\n    margin-top:15px;\n}\n\n.cc-btns {\n    font-weight:bold;\n}\n\n.title {\n    margin-bottom: 0;\n}\n\n.dealersearch {\n  position: absolute;\n  width: 80%;\n  height: 80%;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  margin: auto;\n  background: #fff;\n}\n\n.active {\n  background: #e7e3f5;\n}"

/***/ }),

/***/ "./src/app/_components/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/_components/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("./src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__("./src/app/_services/account.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountComponent = (function () {
    function AccountComponent(appConfig, accountService) {
        this.appConfig = appConfig;
        this.accountService = accountService;
        this.title = 'Influx Archiver 2.0';
        this.mainSlide = 'menuIn';
        this.otherSlide = 'mainIn';
        this.withPadding = false;
        this.restoreString = '';
        this.clearSearch = false;
        this.collapsed = false;
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        this.isIn = false; // store state
    }
    AccountComponent.prototype.removeSearchResults = function (data) {
    };
    AccountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.head_sub = this.appConfig.collapsed.subscribe(function (bool) {
            _this.collapsed = bool;
        });
    };
    AccountComponent.prototype.toggleState = function (data) {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
        this.mainSlide == 'menuOut' ? this.mainSlide = 'menuIn' : this.mainSlide = 'menuOut';
        this.otherSlide == 'mainOut' ? this.otherSlide = 'mainIn' : this.otherSlide = 'mainOut';
    };
    AccountComponent.prototype.checkAccount = function (bool) {
        console.log(bool);
        this.withPadding = bool;
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-account',
            template: __webpack_require__("./src/app/_components/account/account.component.html"),
            styles: [__webpack_require__("./src/app/_components/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */],
            __WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */]])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/_components/influx/influx-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfluxService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__("./src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InfluxService = (function () {
    function InfluxService(conf, http) {
        this.conf = conf;
        this.http = http;
        this.fileListSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        this.filtersSubject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        this.files = [];
        this.API_URL = this.conf.API_CONFIG();
    }
    InfluxService.prototype.setFileList = function (files) {
        this.files = files;
        this.fileListSubject.next(files);
    };
    InfluxService.prototype.getFileList = function (feedParams) {
        return this.http.get(this.API_URL +
            "/api/archives/" + feedParams.accountId +
            "/" + feedParams.provider + "/" +
            feedParams.providerId + "/file_list")
            .map(function (res) { return res.json(); });
    };
    InfluxService.prototype.setFilters = function (filters) {
        this.filters = filters;
        this.filtersSubject.next(filters);
    };
    InfluxService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], InfluxService);
    return InfluxService;
}());



/***/ }),

/***/ "./src/app/_components/influx/influx.component.css":
/***/ (function(module, exports) {

module.exports = ".datatable-row-odd {\n    background: #ddd;\n  }\n  \n  .dataTable {\n    position: relative;\n  }\n  \n  .ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group {\n    background-color: #5bc0de;\n  }\n  \n  .compareButtonsFixedContainer .vehiclesCompareButton {\n    position: fixed;\n    right: 20px;\n    z-index: 10;\n    height: 40px;\n    background-color: #2e353d;\n    border: 2px solid #585252;\n    color: #fff;\n    font-size: 16px;\n    font-weight: bold;\n    bottom: 20px;\n    padding: auto 8px;\n  }\n  \n  .compareButtonsFixedContainer .compareVehiclesButton {\n    right: 20px;\n  }\n  \n  .compareButtonsFixedContainer .showAllVehiclesButton {\n    right: 185px;\n  }\n  \n  .columnsCheckboxContainer ul {\n    list-style: none;\n    padding: 10px;\n  }\n  \n  .columnsCheckboxContainer.collapsed {\n    display:none;\n  }\n  \n  .columnsCheckboxContainer.expanded {\n    display: block;\n    position:absolute;\n    background-color: #fff;\n    list-style: none;\n    right:0;\n    top:30px;\n    z-index:5;\n    max-height: calc(65vh - 65px);\n    overflow-y: scroll;\n    border-left:1px solid #e0e0e0;\n  }\n  \n  .filterColumnsContainer button {\n    float:right;\n  }\n  \n  .ngx-datatable.scroll-vertical {\n    height: 65vh;\n    clear:both;\n  }\n  \n  .compareButtonsFixedContainer .selected-column.collapsed ul {\n    display: none;\n  }\n  \n  .compareButtonsFixedContainer .selected-column ul {\n    list-style: none;\n  }\n  \n  .compareButtonsFixedContainer .selected-column.collapsed {\n    height: 40px;\n  }\n  \n  .compareButtonsFixedContainer .selected-column {\n    height: auto;\n    width: 300px;\n    max-height: 350px;\n    right: 345px;\n    overflow-y: auto;\n  }\n  \n  .compareButtonsFixedContainer .selected-column .selectedVehiclesButton {\n    background-color: #2e353d;\n    border: none;\n    color: #fff;\n    font-size: 16px;\n    font-weight: bold;\n    width: 100%;\n    top: 0;\n    position: -webkit-sticky;\n    position: sticky;\n    height: 35px;\n  }\n  \n  .compareButtonsFixedContainer .compareButtonsInnerContainer {\n    position: relative;\n    height: 100%;\n  }\n  \n  .hvr-icon-hang:before {\n    content: \"\\f078\";\n    position: absolute;\n    left: .5em;\n    padding: 0 1px;\n    font-family: FontAwesome;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n  }\n  \n  .feed-override-msg { \n    padding-top: 5px;\n  }\n  \n  .vin-decode-msg {\n    position: relative;\n    left: -12.3%;\n    top: 15px;\n  }\n  \n  .feed-last-ran { \n    font-size: 18px;\n  }\n  \n  .hvr-icon-bob:before {\n    content: \"\\f077\";\n    position: absolute;\n    left: .5em;\n    padding: 0 1px;\n    font-family: FontAwesome;\n    -webkit-transform: translateZ(0);\n    transform: translateZ(0);\n  }\n  \n  .config {\n    margin-top: 30px;\n  }\n  \n  .config:first-child {\n      margin-top: 10px;\n    }\n  \n  .active {\n    color: green !important;\n    font-weight: bold;\n  }\n  \n  .attr {\n    color: #999;\n  }\n  \n  .demo-tab-content {\n   padding: 20px 0;\n }\n  \n  .demo-tab-content h4 {\n       text-align: center;\n  }\n  \n  hr {\n    margin: 3px -20px;\n  }\n  \n  .full-width {\n    margin: 0 -20px;\n  }\n  \n  .pointer {\n    color: green;\n    cursor: pointer;\n  }\n  \n  .mat-card>.mat-card-actions:last-child .mat-button {\n    border: 1px solid #eee;\n    padding: 0 10px;\n  }\n  \n  .mat-card>.mat-card-actions:last-child { \n    text-align: center;\n  }\n  \n  .demo-tab-content.feedtab .clearfix, .demo-tab-content.decodetab div {\n  margin-left: 8%;\n}\n  \n  .allfeeds { \n  border-bottom: 1px solid #ccc; \n}\n  \n  .mat-list-item:hover { \n  background-color: #C2BFBF; \n}\n  \n  .mat-list-item {\n  cursor: pointer;\n}\n  \n  .changeLog {\n  margin-top: 20px;\n}\n  \n  .recentFiles li {\n  display: inline-block;\n  padding: 7px;\n  width: 19%;\n}\n  \n  .recentFiles {\n  padding: 9.5px;\n  margin: 20px 0 20px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n  \n  .filters {\n  padding: 12px 0 0 12px;\n  margin: 20px 0 20px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}"

/***/ }),

/***/ "./src/app/_components/influx/influx.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"feed-selector pull-left\">\n    <mat-list class=\"feeds\">\n      <mat-list-item *ngFor=\"let config of influxConfigs | feed; let i = index;\" class=\"feed\" (click)=\"setConfigToShow(i);\">\n        <h3 class=\"title\" matLine> {{config.name}} </h3>\n        <span class=\"types\" matLine *ngFor=\"let type of config.types\">\n          {{type.name}}\n        </span>\n      </mat-list-item>\n    </mat-list>\n    <mat-list class=\"allfeeds\">\n        <mat-list-item class=\"feed\" (click)=\"setConfigToShow(-1);\">\n          <h3 class=\"title\" matLine> View All Feeds</h3>\n        </mat-list-item>\n      </mat-list>\n  </div>\n\n  <div class=\"configs\" (scroll)=\"onScroll($event)\">\n    <div *ngFor=\"let config of influxConfigs; let i = index\" class=\"config\">\n      <mat-card *ngIf=\"showIndex === i || showIndex === -1\">\n        <div class=\"clearfix border-bottom\">\n          <a class=\"btn editconfig btn-primary pull-right\" [href]=\"getDnaLink()\" target=\"_blank\"> Edit Config </a>\n          <h3 style=\"margin: 0;\">Provider:\n            <b>{{config.provider}}</b> <span class=\"configPipe\" *ngIf=\"config.lastRun\">|</span>\n            <a class=\"pointer feed-last-ran\" *ngIf=\"config.lastRun\" [routerLink]=\"[config.lastRun.routerLink]\" (click)=\"viewFeedData(config)\"> Feed Last Ran: {{config.lastRun.time}} EST</a>\n          </h3>\n          <h4 *ngIf=\"config.providerid != false\" style=\"margin: 4px 0 4px;\">\n            Provider ID:\n            <b> {{config.providerid}} </b>\n          </h4>\n          <h4 style=\"margin: 0 0 15px;\" *ngIf=\"config.filename != false\">\n            File Name:\n            <b> {{config.filename}} </b>\n          </h4>\n        </div>\n        <mat-tab-group class=\"demo-tab-group\">\n          <mat-tab label=\"Feed Wins\">\n            <div class=\"demo-tab-content feedtab\">\n              <div class=\"clearfix\">\n                <div class=\"feedWins-item\" *ngFor=\"let wins of config.feedWins\">\n                  <small class=\"col-md-2 attr\" [class.active]=\"wins.value\">{{wins.key}} </small>\n                </div>\n              </div>\n              <h4>\n                <span>Inserts:<b [ngClass]=\"getClassName(config.inserts)\"> {{config.inserts}}</b>\n                </span>\n                <span>Deletes:\n                  <b [ngClass]=\"getClassName(config.deletes)\"> {{config.deletes}}</b>\n                </span>\n                <div class=\"feed-override-msg\">\n                <small style=\"margin-left: 5px; margin-top: 11px; font-size: 16px;\">\n                  <b style=\"color: green;\">Green Items </b> indicate feed overrides on Inventory Data</small>\n                </div>\n              </h4>\n            </div>\n          </mat-tab>\n          <mat-tab label=\"VIN Decoding\">\n            <div class=\"demo-tab-content decodetab\">\n              <div class=\"scrubAtts-item\" *ngFor=\"let atts of config.scrubAtts\">\n                <small class=\"col-md-2\" [class.active]=\"atts.value\">{{atts.key}}</small>\n              </div>\n              <h4 class=\"vin-decode-msg\">\n                <small style=\"margin-left: 5px; margin-top: 11px; font-size: 16px;\">\n                  <b style=\"color: green;\">Green Items </b> indicate fields being VIN Decoded</small>\n              </h4>\n            </div>\n          </mat-tab>\n          <mat-tab label=\"Recent Files ({{config.files.data.length}})\" [disabled]=\"config.files.data == 0\">\n            <div class=\"recentFiles\">\n            <ul>\n              <li *ngFor=\"let file of config.files.data\">\n                <a class=\"btn btn-small btn-primary\" [routerLink]=\"[file.routerLink]\" (click)=\"viewFeedData(config)\">\n                  View Feed\n                </a>\n                Ran: {{file.time | date: \"short\"}}\n              </li>\n            </ul>\n            </div>\n            </mat-tab>\n          <mat-tab label=\"Filters ({{config.filters.length}})\" [disabled]=\"config.filters.length === 0\">\n            <div class=\"demo-tab-content filters\">\n              <div class=\"filterDisplay\" *ngFor=\"let filter of config.filters; let i = index\">\n                <h3> #{{i + 1}}.</h3>\n                <div>\n                  <p>\n                    <b>{{filter.task}}</b>\n                  </p>\n                  <p style=\"white-space: pre-wrap;\">{{filter.filter}}</p>\n                </div>\n              </div>\n            </div>\n          </mat-tab>\n        </mat-tab-group>\n        <hr>\n        <pre *ngIf=\"debug\">\n          {{config | json}}\n        </pre>\n        <pre *ngIf=\"config.comments !== null\" class=\"changeLog\"> \n          {{config.comments.replace('null','Change Log')}}\n        </pre>\n        <mat-card-actions>\n          Inventory Types:\n          <button mat-button *ngFor=\"let type of config.inventory_types\" (click)=\"routeToVehicles(type.type,type.classification)\">{{type.name}} ({{counts | countFilter: type}})\n          </button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n  </div>\n  <div *ngIf=\"loading\" class=\"loadingIndicator\">\n    <div class=\"row\" style=\"clear: both;\">\n      <sk-folding-cube></sk-folding-cube>\n    </div>\n  </div>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/_components/influx/influx.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfluxComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animations_fade_in_animation__ = __webpack_require__("./src/app/_animations/fade-in.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("./src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__influx_service__ = __webpack_require__("./src/app/_components/influx/influx-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_account_service__ = __webpack_require__("./src/app/_services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_provider__ = __webpack_require__("./src/app/_models/provider.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InfluxComponent = (function () {
    function InfluxComponent(accountService, route, router, influx, appConfig) {
        this.accountService = accountService;
        this.route = route;
        this.router = router;
        this.influx = influx;
        this.appConfig = appConfig;
        this.debug = false;
        this.accountId = '';
        this.loading = false;
        this.influxLoading = false;
        this.influxString = '';
        this.influxConfigs = [];
        this.filters = [];
        this.showFilter = false;
        this.influxHeaders = [];
        this.influxVehicles = [];
        this.showFeed = false;
        this.feedLoading = false;
        this.hideFilters = true;
        this.DoneLoading = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["b" /* Subject */]();
        this.fileMap = [];
        this.params = new __WEBPACK_IMPORTED_MODULE_7__models_provider__["a" /* Provider */]();
        this.showIndex = -1;
        this.account = this.appConfig.account;
    }
    InfluxComponent.prototype.getDnaLink = function () {
        return 'https://dna.dealer.com/views/clients/client-dashboard/client-dashboard?accountId=' + this.accountId;
    };
    InfluxComponent.prototype.viewFeedData = function (config) {
        if (config.files.data) {
            this.influx.setFileList(config.files.data);
        }
    };
    InfluxComponent.prototype.setConfigToShow = function (index) {
        this.showIndex = index;
    };
    InfluxComponent.prototype.toggleFilter = function (config) {
        if (this.filters[config.provider] && !config.filters) {
            config.filters = this.filters[config.provider];
        }
        else {
            config.hasFilters = false;
        }
        if (!config.showFilters) {
            config.showFilters = true;
            config.message = 'Hide Filters';
        }
        else {
            config.showFilters = false;
            config.message = 'Show Filters';
        }
        console.log(config);
    };
    InfluxComponent.prototype.getClassName = function (bool) {
        return {
            success: bool,
            warning: !bool
        };
    };
    InfluxComponent.prototype.hideFilterToggle = function () {
        this.hideFilters = true;
    };
    InfluxComponent.prototype.getDate = function (str) {
        var num = Number(str);
        return new Date(num);
    };
    InfluxComponent.prototype.showConfigsAsString = function (data) {
        return JSON.stringify(this.influxConfigs);
    };
    InfluxComponent.prototype.routeToVehicles = function (type, classification) {
        this.router.navigate(['vehicles', type, classification], { relativeTo: this.route.parent });
    };
    InfluxComponent.prototype.cleanFilter = function (filter) {
        return filter.replace('){', '){<br>').replace(';}', ';<br>}').replace(';', ';<br>');
    };
    InfluxComponent.prototype.toggleFilterDisplay = function (showFilter) {
        this.showFilter = !this.showFilter;
    };
    InfluxComponent.prototype.getColumnData = function (vehicle, column) {
        return vehicle[column];
    };
    InfluxComponent.prototype.onScroll = function (event) {
        if (event.target.scrollTop > 0) {
            this.appConfig.collapseHeader(true);
        }
        else {
            this.appConfig.collapseHeader(false);
        }
    };
    InfluxComponent.prototype.getConfigs = function () {
        var _this = this;
        this.loading = true;
        this.config_sub = this.accountService.getInfluxConfigs(this.accountId).subscribe(function (configs) {
            _this.influxConfigs = configs.data;
            var invConfigs = { configs: _this.influxConfigs, loading: false };
            _this.appConfig.setCurrentAccount(invConfigs);
            _this.loading = false;
        });
        if (!this.account.inventory_counts || this.account.inventory_counts.length === 0) {
            this.getInvCounts();
        }
        else {
            this.counts = this.account.inventory_counts;
        }
    };
    InfluxComponent.prototype.getInvCounts = function () {
        var _this = this;
        this.count_sub = this.accountService.getInvCounts(this.accountId).subscribe(function (success) {
            var counts = { inventory_counts: success };
            _this.counts = counts.inventory_counts;
            _this.appConfig.setCurrentAccount(counts);
        }, function (error) {
            console.log(error);
        });
    };
    InfluxComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sub = this.route.parent.params.subscribe(function (params) {
            _this.accountId = params.id;
            _this.influxConfigs = [];
            _this.getConfigs();
        });
        this.sub2 = this.route.queryParams.subscribe(function (qp) {
            console.log(qp);
            if (qp._mode === "debug") {
                _this.debug = true;
            }
            else {
                _this.debug = false;
            }
        });
    };
    InfluxComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
        this.sub2.unsubscribe();
        if (this.config_sub) {
            this.config_sub.unsubscribe();
        }
        if (this.filter_sub) {
            this.filter_sub.unsubscribe();
        }
    };
    InfluxComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_4__angular_core__["n" /* Component */])({
            selector: 'app-influx-configs',
            template: __webpack_require__("./src/app/_components/influx/influx.component.html"),
            styles: [__webpack_require__("./src/app/_components/influx/influx.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__influx_service__["a" /* InfluxService */]],
            animations: [__WEBPACK_IMPORTED_MODULE_0__animations_fade_in_animation__["a" /* fadeInAnimation */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_6__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__influx_service__["a" /* InfluxService */], __WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */]])
    ], InfluxComponent);
    return InfluxComponent;
}());



/***/ }),

/***/ "./src/app/_components/influx/influxfeed/influxfeed.component.css":
/***/ (function(module, exports) {

module.exports = ".datatable-row-odd {\n  background: #ddd;\n}\n\n.dataTable {\n  position: relative;\n}\n\n.ngx-datatable.material.multi-click-selection .datatable-body-row.active .datatable-row-group {\n  background-color: #5bc0de;\n}\n\n.compareButtonsFixedContainer .vehiclesCompareButton {\n  position: fixed;\n  right: 20px;\n  z-index: 10;\n  height: 40px;\n  background-color: #2e353d;\n  border: 2px solid #585252;\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n  bottom: 20px;\n  padding: auto 8px;\n}\n\n.compareButtonsFixedContainer .compareVehiclesButton {\n  right: 20px;\n}\n\n.compareButtonsFixedContainer .showAllVehiclesButton {\n  right: 185px;\n}\n\n.columnsCheckboxContainer ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\n.columnsCheckboxContainer ul li>* {\n  cursor: pointer;\n}\n\n.columnsCheckboxContainer {\n  -webkit-transition: top .35s;\n  transition: top .35s;\n  background: #f5f5f5;\n  display: block;\n  list-style: none;\n  left: 0px;\n  z-index: 5;\n  text-align: left;\n  width: 100%;\n  padding: 10px 0;\n  position: absolute;\n  top: -100%;\n  height: 100%;\n  overflow: hidden;\n  -webkit-box-shadow: -1px 5px 15px 0px rgba(0, 0, 0, .2);\n          box-shadow: -1px 5px 15px 0px rgba(0, 0, 0, .2);\n  border-bottom: 1px solid #aaa;\n}\n\n.columnsCheckboxContainer.collapsed {}\n\n.columnsCheckboxContainer.expanded {\n  height: auto;\n}\n\n.inline {\n  display: inline-block;\n  margin: 3px;\n  padding: 3px 5px 0;\n  border: 1px solid #ddd;\n  border-radius: 5px;\n}\n\n.overflow {}\n\n.filterColumnsContainer button {\n  float: right;\n  padding: 7.4px 10px;\n}\n\n.ngx-datatable.scroll-vertical {\n  height: 65vh;\n  clear: both;\n}\n\n.compareButtonsFixedContainer .selected-column.collapsed ul {\n  display: none;\n}\n\n.compareButtonsFixedContainer .selected-column ul {\n  list-style: none;\n}\n\n.compareButtonsFixedContainer .selected-column.collapsed {\n  height: 40px;\n}\n\n.compareButtonsFixedContainer .selected-column {\n  height: auto;\n  width: 300px;\n  max-height: 350px;\n  right: 345px;\n  overflow-y: auto;\n}\n\n.compareButtonsFixedContainer .selected-column .selectedVehiclesButton {\n  background-color: #2e353d;\n  border: none;\n  color: #fff;\n  font-size: 16px;\n  font-weight: bold;\n  width: 100%;\n  top: 0;\n  position: -webkit-sticky;\n  position: sticky;\n  height: 35px;\n}\n\n.compareButtonsFixedContainer .compareButtonsInnerContainer {\n  position: relative;\n  height: 100%;\n}\n\n.hvr-icon-hang:before {\n  content: \"\\f078\";\n  position: absolute;\n  left: .5em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n\n.hvr-icon-bob:before {\n  content: \"\\f077\";\n  position: absolute;\n  left: .5em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n\nimg.loading {\n  opacity: 0;\n  display: block;\n  float: right;\n}\n\nimg.visible.loading {\n  opacity: 1;\n}\n\nimg {\n  -webkit-transition: all ease-in-out .75s;\n  transition: all ease-in-out .75s;\n}\n\n.noShadow {\n  -webkit-box-shadow: none !important;\n          box-shadow: none !important;\n  clear: both;\n}\n\n.shadow {\n  position: absolute;\n  background: #fff;\n  width: calc(80%);\n  right: 0;\n}\n\n.close-window {\n  position: absolute;\n  font-size: 1.4em;\n  line-height: 1em;\n  bottom: 5px;\n  left: 5px;\n  color: #fff;\n}\n\n.search {\n  width: 100%;\n}\n\nhr {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\n\n.accountName,\n.feedName {\n  font-style: italic;\n}\n\n.account {\n  margin-left: 25px;\n}\n\n.padding {\n  padding: 10px 20px 10px;\n  background: #2B72A6;\n  color: #fff;\n  position: relative;\n  z-index: 10;\n}\n\n.paddingBottom {\n  padding: 10px 20px 10px;\n  background: #fff;\n  position: relative;\n  z-index: 10;\n  border-bottom: 1px solid #eee;\n}\n\n.table-info {\n  position: relative;\n}\n\n.table-info.expand {\n  overflow: visible;\n}\n\n.feedName a {\n  color: #FFF;\n}"

/***/ }),

/***/ "./src/app/_components/influx/influxfeed/influxfeed.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"shadow\" (window:resize)=\"adjustTableSize()\">\n  <div class=\"table-info\" #tableInfo [class.expand]=\"columnFiltersExpand\">\n    <div class=\"padding\">\n      <div class=\"clearfix\">\n        <h4 class=\"pull-left\">\n          <a class=\"close-window\" (click)=\"routeBack()\">\n            <i class=\"fa fa-close\"></i>\n          </a>\n          <span class=\"account\">\n            Account:\n          </span>\n          <span class=\"accountName\">{{fileRequest.accountId}}</span>\n        </h4>\n        <h4 class=\"pull-right\">\n          Feed:\n          <span class=\"feedName\">\n            {{fileRequest.provider}} - {{fileRequest.delimiter}} <a [href]=\"'http://influxtools.dealer.com/archiver_test/conf.php?file=parser_' + fileRequest.provider + '.conf&pretty=true'\" target=\"_blank\">(Config File)</a>\n          </span>\n        </h4>\n      </div>\n    </div>\n    <div class=\"paddingBottom clearfix filterColumnsContainer\">\n      <div class=\"search pull-left\">\n        <div class=\"row\">\n          <div class=\"col-md-2\">\n            <form name=\"form\" (ngSubmit)=\"getArchivedFile(archivedFile.filename)\">\n              <span class=\"file-select\">\n                <select name=\"filename\" class=\"form-control\" [(ngModel)]=\"fileIndex\" (ngModelChange)=\"onValueChange($event)\">\n                  <option *ngFor=\"let file of files; let i = index\" [selected]=\"file === archivedFile || file.filename === filename\" [value]=\"i\">\n                    {{file.time | date: \"short\"}}\n                  </option>\n                </select>\n              </span>\n            </form>\n          </div>\n          <div class=\"col-md-8\" style=\"padding-left: 0\">\n            <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" name=\"srch-term\" id=\"srch-term\" [(ngModel)]=\"value\">\n          </div>\n          <div class=\"col-md-2\" style=\"padding-left: 0\">\n            <button type=\"button\" class=\"btn btn-default btn-block btn-sm\" (click)=\"toggleFiltersDropDown()\">\n              <span class=\"glyphicon glyphicon-th\"></span> Columns\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div #checkbox class='columnsCheckboxContainer clearfix' [ngStyle]=\"getStyle(checkbox)\" [ngClass]=\"{ 'expanded': columnFiltersExpand, 'collapsed': !columnFiltersExpand }\">\n      <div class=\"col-md-1\" style=\"height: 100%\">\n        <button type=\"button\" class=\"btn btn-small\" (click)=\"checkAll()\">\n          Toggle All\n        </button>\n      </div>\n      <div class=\"col-md-11 overflow\">\n        <ul>\n          <li *ngFor='let col of influxHeadersCheckbox' class=\"inline\">\n            <input type='checkbox' [id]=\"col.prop\" (click)='toggle(col)' [checked]='isChecked(col)' />\n            <label [attr.for]=\"col.prop\">{{col.prop}}</label>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n  <div id=\"archivedTable\">\n    <div class=\"dataTable\">\n      <!-- | format: headers  -->\n      <ngx-datatable #table class=\"material striped noShadow expandable scroll-vertical\" [rows]=\"selectedInfluxVehicles | search_archived: value\"\n        [columnMode]=\"'standard'\" [rowHeight]=\"50\" [externalPaging]=\"true\" [count]=\"fileRequest.totalElements\" [limit]=\"fileRequest.pageSize\" [offset]=\"fileRequest.pageNumber\" [scrollbarV]=\"true\" [headerHeight]=\"50\" [footerHeight]=\"50\" [scrollbarH]=\"true\" (page)=\"onPage($event)\" [loadingIndicator]=\"isLoading\"\n        [reorderable]=\"reorderable\" [ngStyle]=\"getHeight()\" [columns]=\"influxHeaders\" (scroll)=\"logEvent($event)\" [selected]=\"selected\" [selectionType]=\"'checkbox'\" (activate)=\"onActivate($event)\" (select)='onSelect($event)'>\n        <ngx-datatable-column [width]=\"30\" [sortable]=\"false\" [draggable]=\"false\" [resizeable]=\"false\" [headerCheckboxable]=\"true\"\n          [checkboxable]=\"true\">\n        </ngx-datatable-column>\n          <ngx-datatable-column  *ngFor=\"let col of influxHeadersCheckbox; let i = index\" name=\"{{i}}-{{col.name}}\" [prop]=\"col.prop\">\n            <ng-template let-value=\"value\" let-rowIndex=\"rowIndex\" let-expanded=\"expanded\" let-row=\"row\" ngx-datatable-cell-template>\n              <i (click)=\"openVehicleSingle(selectedInfluxVehicles[rowIndex])\" [innerHTML]=\"row[col.prop]\"></i>\n            </ng-template>\n          </ngx-datatable-column>\n        <ngx-datatable-footer>\n          <ng-template ngx-datatable-footer-template>\n            <div class=\"footer-wrapper\" style=\"padding: 0 20px; width: 100%;\">\n              <span class=\"footer-content\">\n                <span class=\"filename\"> {{fileRequest.filename | dateFilter | date: \"short\" }} - {{fileRequest.filename}} - </span>\n\n                <span *ngIf=\"fileRequest.isLoading\"> Reading file... </span>\n                <span *ngIf=\"!fileRequest.isLoading\">\n                  <b> {{fileRequest.totalElements}} </b> Vehicles in file </span>\n              </span>\n              <img class=\"loading pull-right\" [class.visible]=\"fileRequest.isLoading\" style=\"width: 25px; height: 25px\" src=\"assets/loading.gif\" />\n            </div>\n          </ng-template>\n        </ngx-datatable-footer>\n      </ngx-datatable>\n    </div>\n  </div>\n  <div class=\"compareButtonsFixedContainer\" *ngIf=\"selected.length > 0\">\n    <button type=\"button\" class=\"compareVehiclesButton vehiclesCompareButton\" href=\"#\" (click)=\"selectedInfluxVehicles = selected\">Compare Selected</button>\n    <button type=\"button\" class=\"showAllVehiclesButton vehiclesCompareButton\" href=\"#\" (click)=\"selectedInfluxVehicles = influxVehicles\">Show All Vehicles</button>\n    <div *ngIf=\"selected.length > 0\" class=\"selectedColumnList vehiclesCompareButton selected-column\" [ngClass]=\"{ 'expanded': vehiclesSelectedExpand, 'collapsed': !vehiclesSelectedExpand }\">\n      <div class=\"compareButtonsInnerContainer\">\n        <button class='card selectedVehiclesButton' [ngClass]=\"{ 'hvr-icon-hang': vehiclesSelectedExpand, 'hvr-icon-bob': !vehiclesSelectedExpand }\"\n          (click)=\"toggleVehiclesSelectedExpand()\">{{selected.length}} Vehicles Selected</button>\n        <ul *ngIf=\"vehiclesSelectedExpand\">\n          <li *ngFor='let sel of selected'>\n            <div class='card'>\n              <li>{{sel.vin}}</li>\n            </div>\n          </li>\n          <li *ngIf=\"!selected.length\">No Selections</li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/_components/influx/influxfeed/influxfeed.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfluxfeedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_feed__ = __webpack_require__("./src/app/_models/feed.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__influx_service__ = __webpack_require__("./src/app/_components/influx/influx-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_slide_in_animation__ = __webpack_require__("./src/app/_animations/slide-in.animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_account_service__ = __webpack_require__("./src/app/_services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var InfluxfeedComponent = (function () {
    function InfluxfeedComponent(accountService, route, router, element, influx) {
        this.accountService = accountService;
        this.route = route;
        this.router = router;
        this.element = element;
        this.influx = influx;
        this.sendItem = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["x" /* EventEmitter */]();
        this.tableHeight = 0;
        this.influxHeaders = [];
        this.influxHeadersCheckbox = [];
        this.pageSize = 0;
        this.influxVehicles = [];
        this.isLoading = false;
        this.selectedInfluxVehicles = [];
        this.fileCache = [];
        this.temp = [];
        this.tmp = [];
        this.feedLoading = false;
        this.provider = '';
        this.timestamp = '';
        this.filename = '';
        this.providerid = '';
        this.showTable = false;
        this.headers = [];
        this.loadingIndicator = true;
        this.selected = [];
        this.testing = '';
        this.dtTrigger = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["b" /* Subject */]();
        this.files = [];
        this.vehiclesSelectedExpand = false;
        this.columnFiltersExpand = false;
        this.fileIndex = 0;
        this.callOnce = false;
        this.windowHeight = 0;
        this.fileRequest = new __WEBPACK_IMPORTED_MODULE_0__models_feed__["a" /* ArchivedFile */]();
        this.ARCHIVED_FILE_SUB = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Rx__["b" /* Subject */]();
        this.el = this.element.nativeElement;
        this.el.classList = "addShadow";
    }
    InfluxfeedComponent.prototype.routeBack = function () {
        this.router.navigate(['/account', this.fileRequest.accountId, 'influx'], { relativeTo: this.route.parent });
    };
    InfluxfeedComponent.prototype.setRows = function () {
        if (this.files && this.files.length > 0) {
            this.archivedFile = this.files[0];
            if (this.archivedFile.ind !== undefined) {
                this.getLargest(this.archivedFile.ind.DATA);
            }
        }
    };
    InfluxfeedComponent.prototype.getLargest = function (data) {
        data.sort(function (a, b) {
            if (a < b) {
                return 1;
            }
            else if (a > b) {
                return -1;
            }
            else {
                return 0;
            }
        });
        return data;
    };
    InfluxfeedComponent.prototype.getColLength = function (data) {
        var total = [];
        data.forEach(function (a) {
            var keys = Object.keys(a);
            var lengths = [];
            keys.forEach(function (key) {
                var tmp = a[key].length;
                lengths.push(tmp);
            });
            total.push(lengths);
        });
        var cols = [];
        for (var j = 0; j < this.influxHeaders.length; j++) {
            cols[j] = [];
            for (var i = 0; i < total.length; i++) {
                cols[j].push(total[i][j]);
            }
            console.log(cols[j]);
            // cols[j] = this.getLargest(cols[j])[0];
        }
        console.log(cols);
        return total;
    };
    InfluxfeedComponent.prototype.getHeight = function () {
        return {
            height: this.tableHeight + 'px'
        };
    };
    InfluxfeedComponent.prototype.toggleVehiclesSelectedExpand = function () {
        var bool = this.vehiclesSelectedExpand;
        this.vehiclesSelectedExpand = bool === false ? true : false;
    };
    InfluxfeedComponent.prototype.toggleFiltersDropDown = function () {
        var bool = this.columnFiltersExpand;
        this.columnFiltersExpand = bool === false ? true : false;
    };
    InfluxfeedComponent.prototype.openVehicleSingle = function (vehicle) { };
    InfluxfeedComponent.prototype.getStyle = function (checkbox) {
        var top = checkbox.clientHeight;
        var style = '';
        if (this.columnFiltersExpand) {
            style = '100%';
        }
        else {
            style = -top + 'px';
        }
        return {
            top: style,
            height: top
        };
    };
    InfluxfeedComponent.prototype.logEvent = function (event) {
        console.log(event);
    };
    InfluxfeedComponent.prototype.getArchivedFile = function () {
        var _this = this;
        this.fileRequest.isLoading = true;
        this.isLoading = true;
        this.accountService.getUpdatedFeed(this.fileRequest)
            .subscribe(function (vehicles) {
            _this.fileRequest.fileSize = Number(vehicles.filesize);
            _this.fileRequest.offset = Number(vehicles.offset);
            _this.fileRequest.delimiter = vehicles.delimiter;
            _this.fileRequest.full = true;
            _this.requestUrl = vehicles.vehicles;
            _this.headers = vehicles.headers;
            _this.fileRequest.start += 50;
            _this.fileRequest.end += 50;
            _this.influxVehicles = vehicles.vehicles;
            _this.selectedInfluxVehicles = _this.influxVehicles;
            _this.fileRequest.totalElements = vehicles.vehicles.length;
            _this.isLoading = false;
            //   this.colLengths = this.getColLength(this.selectedInfluxVehicles);
            //   console.log(this.colLengths);
            if (_this.influxVehicles.length >= 50 && !_this.fileRequest.filename.includes(_this.fileRequest.accountId)) {
                _this.getFullFile();
            }
            else {
                _this.fileRequest.isLoading = false;
            }
        });
    };
    InfluxfeedComponent.prototype.getFullFile = function () {
        var _this = this;
        this.accountService.getUpdatedFeed(this.fileRequest)
            .subscribe(function (vehicles) {
            _this.fileRequest.offset = vehicles.offset;
            _this.influxVehicles = vehicles.vehicles;
            _this.fileRequest.totalElements = _this.influxVehicles.length;
            _this.selectedInfluxVehicles = _this.influxVehicles;
            _this.fileRequest.isLoading = false;
        });
    };
    InfluxfeedComponent.prototype.onValueChange = function (data) {
        this.fileIndex = data;
        this.archivedFile = this.files[data];
        console.log(this.archivedFile);
        // this.getLargest(this.archivedFile.ind.DATA);
        if (!this.fileRequest.providerId) {
            this.fileRequest.providerId = 'null';
        }
        this.router.navigate([
            this.fileRequest.provider,
            this.archivedFile.filename,
            this.fileRequest.providerId
        ], {
            relativeTo: this.route.parent
        });
    };
    InfluxfeedComponent.prototype.addClass = function (vehicle) {
        if (vehicle.hightlight === 0 || !vehicle.highlight) {
            vehicle.highlight = 1;
        }
        else if (vehicle.highlight === 1) {
            vehicle.highlight = 0;
        }
        else {
        }
    };
    InfluxfeedComponent.prototype.getColumnData = function (vehicle, column) {
        return vehicle[column];
    };
    InfluxfeedComponent.prototype.onSelect = function (_a) {
        var selected = _a.selected, vehicle = _a.vehicle;
        this.selected.splice(0, this.selected.length);
        (_b = this.selected).push.apply(_b, selected);
        var _b;
    };
    InfluxfeedComponent.prototype.onActivate = function (event) {
    };
    InfluxfeedComponent.prototype.getStyles = function () {
        return '.ngx-datatable.scroll-horz .datatable-body {max-height: 500px;}';
    };
    InfluxfeedComponent.prototype.onPage = function (event) {
        var length = this.influxVehicles.length;
        var rowPosition = event.offset * event.limit;
        var position = (rowPosition / length) * 100;
    };
    InfluxfeedComponent.prototype.checkAll = function (boolean) {
        var _this = this;
        if (boolean === void 0) { boolean = false; }
        this.influxHeadersCheckbox.forEach(function (box) {
            _this.toggle(box);
        });
    };
    InfluxfeedComponent.prototype.toggle = function (col) {
        var isChecked = this.isChecked(col);
        if (isChecked) {
            this.influxHeaders = this.influxHeaders.filter(function (c) {
                return c.prop !== col.prop;
            });
        }
        else {
            this.influxHeaders = this.influxHeaders.concat([col]);
        }
    };
    InfluxfeedComponent.prototype.isChecked = function (col) {
        return this.influxHeaders.find(function (c) {
            return c.prop === col.prop;
        });
    };
    InfluxfeedComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fileRequest.pageSize = 0;
        this.sub = this.route.params.subscribe(function (params) {
            _this.fileRequest = __assign({}, params);
            _this.fileRequest.accountId = params['id'];
            _this.fileRequest.offset = 0;
            _this.fileRequest.fileSize = 0;
            _this.fileRequest.pageNumber = 0;
            _this.fileRequest.totalElements = 0;
            _this.fileRequest.start = 0;
            _this.fileRequest.end = 50;
            _this.fileRequest.full = false;
            _this.selectedInfluxVehicles = [];
            _this.parent_sub = _this.route.parent.parent.params.subscribe(function (parentParam) {
                _this.fileRequest.accountId = parentParam['id'];
                _this.accountService.getHeaders(_this.fileRequest).subscribe(function (headers) {
                    _this.influxHeaders = headers;
                    _this.influxHeadersCheckbox = _this.influxHeaders;
                    _this.fileRequest.headerMap = headers;
                    _this.getArchivedFile();
                });
            });
        });
        this.files = this.influx.files;
        this.file_sub = this.influx.fileListSubject.subscribe(function (fileList) {
            _this.files = fileList;
            _this.setRows();
        });
        this.adjustTableSize();
        setTimeout(function () {
            if (_this.files.length === 0) {
                _this.influx.getFileList(_this.fileRequest).subscribe(function (files) {
                    _this.files = files.files;
                }, function (error) {
                    console.log(error);
                });
            }
        }, 250);
    };
    ;
    InfluxfeedComponent.prototype.adjustTableSize = function () {
        this.tableHeight = window.innerHeight - this.tableInfo.nativeElement.clientHeight;
        this.fileRequest.pageSize = Math.floor(this.tableHeight / 50);
    };
    InfluxfeedComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.file_sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], InfluxfeedComponent.prototype, "sendItem", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_12" /* ViewChild */])('tableInfo'),
        __metadata("design:type", Object)
    ], InfluxfeedComponent.prototype, "tableInfo", void 0);
    InfluxfeedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
            selector: 'app-influxfeed',
            template: __webpack_require__("./src/app/_components/influx/influxfeed/influxfeed.component.html"),
            styles: [__webpack_require__("./src/app/_components/influx/influxfeed/influxfeed.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_2__animations_slide_in_animation__["a" /* slideInOutAnimation */]],
            // tslint:disable-next-line:use-host-property-decorator
            host: { '[@slideInOutAnimation]': '' }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__services_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_5__angular_router__["d" /* Router */],
            __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_1__influx_service__["a" /* InfluxService */]])
    ], InfluxfeedComponent);
    return InfluxfeedComponent;
}());



/***/ }),

/***/ "./src/app/_components/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_modal_service__ = __webpack_require__("./src/app/_services/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ModalComponent = (function () {
    function ModalComponent(modalService, el) {
        this.modalService = modalService;
        this.el = el;
        this.element = __WEBPACK_IMPORTED_MODULE_1_jquery__(el.nativeElement);
    }
    ModalComponent.prototype.ngOnInit = function () {
        var modal = this;
        // ensure id attribute exists
        if (!this.id) {
            console.error('modal must have an id');
            return;
        }
        // move element to bottom of page (just before </body>) so it can be displayed above everything else
        this.element.appendTo('body');
        // close modal on background click
        this.element.on('click', function (e) {
            var target = __WEBPACK_IMPORTED_MODULE_1_jquery__(e.target);
            if (!target.closest('.modal-body').length) {
                modal.close();
            }
        });
        // add self (this modal instance) to the modal service so it's accessible from controllers
        this.modalService.add(this);
    };
    // remove self from modal service when directive is destroyed
    ModalComponent.prototype.ngOnDestroy = function () {
        this.modalService.remove(this.id);
        this.element.remove();
    };
    // open modal
    ModalComponent.prototype.open = function () {
        this.element.show();
        this.element.find('.modal').css('display', 'block');
        this.element.find('.modal-background ').css('display', 'block');
        __WEBPACK_IMPORTED_MODULE_1_jquery__('body').addClass('modal-open');
    };
    // close modal
    ModalComponent.prototype.close = function () {
        this.element.hide();
        __WEBPACK_IMPORTED_MODULE_1_jquery__('body').removeClass('modal-open');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], ModalComponent.prototype, "id", void 0);
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            //moduleId: module.id.toString(),
            selector: 'modal',
            template: '<ng-content></ng-content>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/_components/vehicles/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vehicle_item_vehicle_item_component__ = __webpack_require__("./src/app/_components/vehicles/vehicle-item/vehicle-item.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__vehicle_item_vehicle_item_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vehicle_list_vehicle_list_component__ = __webpack_require__("./src/app/_components/vehicles/vehicle-list/vehicle-list.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__vehicle_list_vehicle_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__vehicle_single_vehicle_single_component__ = __webpack_require__("./src/app/_components/vehicles/vehicle-single/vehicle-single.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__vehicle_single_vehicle_single_component__["a"]; });





/***/ }),

/***/ "./src/app/_components/vehicles/vehicle-carousel/vehicle-carousel.component.css":
/***/ (function(module, exports) {

module.exports = ".vehicle-image {\n  text-align: center;\n  padding: 5px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n}\n\n.vehicle-image img {\n  max-height: 365px;\n}\n\n.carouselVehicleThumbnailsContainer {\n  height: 75px;\n  margin-top: 5px;\n  width: 100%;\n  overflow-x: scroll;\n  overflow-y: hidden;\n  white-space: nowrap;\n}\n\n.vehicleThumbnail {\n  display: inline-block;\n  float: none;\n  width: 60px;\n  height: 48px;\n  padding: 5px;\n  border: 1px solid #ddd;\n  margin-right: 4px;\n  border-radius: 4px;\n}\n\n.vehicleThumbnail.active {\n  border-color: #56BBFF;\n  background-color: #C5E7FF;\n}\n\n.vehicleThumbnail img {\n  border: 1px solid #a1a1a1;\n}\n"

/***/ }),

/***/ "./src/app/_components/vehicles/vehicle-carousel/vehicle-carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"vehicleCarouselContainer\">\n  <div class=\"vehicle-images\">\n    <div class=\"carouselVehicleImageContainer\">\n      <carousel [interval]=\"false\">\n        <slide class=\"vehicle-image\">\n          <img ng-src=\"getImageSrc(vehicleImages[imgIndex],account\" [src]=\"getImageSrc(vehicleImages[imgIndex],account)\" onerror='this.src=\"../assets/no_image.jpg\"'\n          />\n        </slide>\n        <a class=\"left carousel-control carousel-control-prev\" *ngIf=\"imgIndex > 0\" (click)=\"this.imgIndex=this.imgIndex-1\">\n          <span aria-hidden=\"true\" class=\"icon-prev carousel-control-prev-icon\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"right carousel-control carousel-control-next\" *ngIf=\"imgIndex < vehicleImages.length-1\" (click)=\"this.imgIndex=this.imgIndex+1\">\n          <span aria-hidden=\"true\" class=\"icon-next carousel-control-next-icon\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n      </carousel>\n    </div>\n    <div class=\"carouselVehicleThumbnailsContainer\">\n      <span class=\"col-xs-2 vehicleThumbnail\" *ngFor=\"let image of vehicleImages; let thumbnailIndex = index\" [ngClass]=\"{ 'active': thumbnailIndex == this.imgIndex }\">\n        <img (click)=\"this.imgIndex=thumbnailIndex\" [src]=\"getImageThumbSrc(image,account)\" style=\"width:100%\">\n      </span>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/_components/vehicles/vehicle-carousel/vehicle-carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleCarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_account__ = __webpack_require__("./src/app/_models/account.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var VehicleCarouselComponent = (function () {
    function VehicleCarouselComponent(elRef) {
        this.elRef = elRef;
        this.vehicleImages = [];
        this._imgIndex = 0;
    }
    Object.defineProperty(VehicleCarouselComponent.prototype, "imgIndex", {
        get: function () {
            return this._imgIndex;
        },
        set: function (newImgIndex) {
            this._imgIndex = newImgIndex;
            var wrap = this.elRef.nativeElement.querySelector('.carouselVehicleThumbnailsContainer');
            if (this.imgIndex !== 0) {
                var thumbWidth = wrap.querySelector('.vehicleThumbnail').offsetWidth;
                var currentThumbLeft = this.imgIndex * thumbWidth;
                var bumpFactor = 5;
                if (currentThumbLeft > ((wrap.clientWidth - (thumbWidth * bumpFactor)) + wrap.scrollLeft)) {
                    // We should scroll right a bit
                    wrap.scrollLeft = currentThumbLeft - wrap.clientWidth + (thumbWidth * bumpFactor);
                }
                else if (currentThumbLeft < (thumbWidth + wrap.scrollLeft)) {
                    // We should scroll left a bit
                    // Left position of thumb : scope.imgIndex * thumbWidth
                    wrap.scrollLeft = currentThumbLeft - thumbWidth;
                }
            }
            else {
                wrap.scrollLeft = 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    VehicleCarouselComponent.prototype.ngOnInit = function () { };
    VehicleCarouselComponent.prototype.ngOnChanges = function () {
        this.imgIndex = 0;
    };
    VehicleCarouselComponent.prototype.getImageSrc = function (data, accountId) {
        var firstLetter = accountId.charAt(0);
        var url = 'https://pictures.dealer.com//' + firstLetter + '/' + accountId + '/' + data;
        return url;
    };
    VehicleCarouselComponent.prototype.getImageThumbSrc = function (data, accountId) {
        var firstLetter = accountId.charAt(0);
        var url = 'https://pictures.dealer.com//' + firstLetter + '/' + accountId + '/' + data;
        var fileName = url.substring(url.lastIndexOf('/') + 1);
        return url.replace(fileName, 'thumb_' + fileName);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Array)
    ], VehicleCarouselComponent.prototype, "vehicleImages", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_account__["a" /* Account */])
    ], VehicleCarouselComponent.prototype, "account", void 0);
    VehicleCarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-vehicle-carousel',
            template: __webpack_require__("./src/app/_components/vehicles/vehicle-carousel/vehicle-carousel.component.html"),
            styles: [__webpack_require__("./src/app/_components/vehicles/vehicle-carousel/vehicle-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], VehicleCarouselComponent);
    return VehicleCarouselComponent;
}());



/***/ }),

/***/ "./src/app/_components/vehicles/vehicle-item/vehicle-item.component.css":
/***/ (function(module, exports) {

module.exports = ".vin, .stock { font-style: italic; }\n.panel { cursor: pointer; }\n.panel:hover { background-color:#eee; }\n.panel-heading h4 { font-weight: bold; }\n.vehicle-pricing-heading h5 { text-decoration: underline; }\n.buttonSection .btn { margin-top: 10px; }\n.vehicle-info .type { text-transform: capitalize; }\n.panel {\n      margin-bottom: 20px;\n      background-color: #fff;\n      border: 1px solid transparent;\n      border: 1px solid rgba(0, 0, 0, .12);\n      border-radius: 4px;\n      -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n      box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n      margin: 25px 0;\n      padding: 0 0 20px;\n\n}\n.buttonSection {\n  text-align: center;\n}\n"

/***/ }),

/***/ "./src/app/_components/vehicles/vehicle-item/vehicle-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf=\"item.uuid.length == 32\">\n  <div class=\"panel\" (click)=\"openVehicleSingle(item)\">\n    <div class=\"panel-heading\">\n      <h4 style=\"margin:15px 0 -10px;\">{{item.title}} - {{item.uuid}}</h4>\n    </div>\n    <div class=\"panel-body clearfix\" *ngIf=\"item.showPanel == true\">\n      <div class=\"col-md-2 vehicle-image\">\n        <img [src]=\"getImageSrc(item.image[0],item.accountId)\" onerror='this.src=\"../assets/no_image.jpg\"' />\n      </div>\n      <div class=\"col-md-6 vehicle-info\">\n        <li>\n          <span class=\"accountId\">Account Id: {{item.accountId}}</span>\n        </li>\n        <li>\n          <span class=\"accountId\">Account Id: {{item.accountId}}</span>\n        </li>\n        <li>\n          <span class=\"vin\">VIN:</span> {{item.vin}}</li>\n        <li>\n          <span class=\"uuid\">uuid:</span> {{item.uuid}}</li>\n        <li>\n          <span class=\"stock\">Stock Number:</span> {{item.stockNumber}}</li>\n        <li>\n          <span class=\"stock\">Type:</span>\n          <span class=\"type\">{{item.type}} | {{item.vehicleType}}</span>\n        </li>\n        <li>\n          <span class=\"stock\">Classification:</span> {{item.className}}</li>\n        <div *ngIf=\"item.certified>0\">\n          <li>\n            <span class=\"stock\">Certified:</span> Yes</li>\n        </div>\n        <li>\n          <span class=\"stock\">Year:</span> {{item.year}}</li>\n        <li>\n          <span class=\"stock\">Make:</span> {{item.make}}</li>\n        <li>\n          <span class=\"stock\">Model:</span> {{item.model}}</li>\n        <li>\n          <span class=\"stock\">Trim:</span> {{item.trim}}</li>\n      </div>\n\n      <div class=\"col-md-2 vehicle-pricing pricing\">\n        <div class=\"vehicle-pricing-heading\">\n          <h5>Pricing Data</h5>\n        </div>\n        retailValue: {{item.retailValue}}\n        <br> invoicePrice: {{item.invoicePrice}}\n        <br> askingPrice: {{item.askingPrice}}\n        <br> wholesalePrice: {{item.wholesalePrice}}\n        <br> internetPrice: {{item.internetPrice}}\n        <br> msrp: {{item.msrp}}\n        <br> salePrice: {{item.salePrice}}\n      </div>\n      <div class=\"col-md-2 vehicle-pricing pricing\">\n        <div class=\"custom_button\" *ngFor=\"let button of customButtons\">\n          <!-- <b> {{button.name}} </b> => {{button.value}} -->\n          <!--\t'attributes' => $priceButtonAttr,\n\t\t\t                'label' => $priceButtonLabel,\n\t\t\t                'content' => $priceButtonContent,\n\t\t\t                'href' => $priceButtonHref,\n\t\t\t                'classes' => $priceButtonClass,\n\t\t\t                'condition' => $showOn,\n\t\t\t                'device' => $mobileDesktop,\n\t\t\t                'pages' => $whichPages,\n\t\t\t                'customPages' => $customPages,\n\t\t\t                'colors' => $custonColors,\n\t\t\t                'bgColor' => $backgroundColor,\n\t\t\t                'textColor' => $textColor,\n\t\t\t                'bgHover' => $backgroundColorHover,\n\t\t\t                'textHover' => $textColorHover\n                    -->\n          <div class=\"preview\" *ngFor=\"let atts of button.preview\">\n            <a *ngIf=\"showCustomButton(item,atts.condition)\" [href]=\"atts.href\" [class]=\"atts.classes\" class=\"ddc-btn ddc-btn-default ddc-btn-block\">\n              <img [src]=\"atts.content.image\" *ngIf=\"atts.content.isImage\" />\n              <span *ngIf=\"!atts.content.isImage\">{{atts.content.content}} </span>\n            </a>\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <div class=\"buttonSection\" *ngIf=\"item.showPanel == true\">\n      <a [href]=\"getVdpLink(item)\" class=\"btn btn-primary\" target=\"_blank\"> VDP Link </a>\n      <a [href]=\"getVlpLink(item)\" class=\"btn btn-primary\" target=\"_blank\"> VLP Link </a>\n      <a [href]=\"getAuditTrail(item)\" class=\"btn btn-success\" target=\"_blank\"> Audit Trail </a>\n      <a [routerLink]=\"['/account', item.accountId]\" class=\"btn btn-success\"> Influx Feeds </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/_components/vehicles/vehicle-item/vehicle-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__("./src/app/_models/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_account__ = __webpack_require__("./src/app/_models/account.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehicleItemComponent = (function () {
    function VehicleItemComponent() {
        // @Input() customButtons: any; 
        this.sendItem = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.loading = false;
    }
    VehicleItemComponent.prototype.showCustomButton = function (item, buttonConditions) {
        if (buttonConditions.type == 3 && buttonConditions.classification == 0) {
            return true;
        }
        else if (item.certified == true && buttonConditions.certified == true) {
            return true;
        }
        else if (item.vehicleType == buttonConditions.type && buttonConditions.classification == 0) {
            return true;
        }
        else if (item.vehicleType == buttonConditions.type && item.classification == buttonConditions.classification) {
            return true;
        }
        return false;
    };
    VehicleItemComponent.prototype.getImageSrc = function (data, accountId) {
        var firstLetter = accountId.charAt(0);
        var url = 'https://pictures.dealer.com/ddc/resize/320x/quality/70/sharpen/1/ddc/' + firstLetter + '/' + accountId + '/' + data;
        return url;
    };
    VehicleItemComponent.prototype.openVehicleSingle = function (item) {
        this.sendItem.emit(item);
    };
    VehicleItemComponent.prototype.getVdpLink = function (item) {
        var vdp_link = 'http://' + item.accountId + '.cms.dealer.com/' + item.type + '/' + item.uuid + '.htm';
        return vdp_link;
    };
    VehicleItemComponent.prototype.getVlpLink = function (item) {
        var vlp_link = 'http://' + this.item.accountId + '.cms.dealer.com/' + item.type + '-inventory/index.htm?search=' + item.vin;
        return vlp_link;
    };
    VehicleItemComponent.prototype.getAuditTrail = function (vin) {
        var audit_link = '//apps.dealer.com/inventory/as/' + this.item.accountId + '/' + this.item.accountId + '-admin/i/index#/vehicle~summary?vin=' + vin + '&history&quickFilter=all';
        return audit_link;
    };
    VehicleItemComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */])
    ], VehicleItemComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__models_account__["a" /* Account */])
    ], VehicleItemComponent.prototype, "account", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], VehicleItemComponent.prototype, "sendItem", void 0);
    VehicleItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-vehicle-item',
            template: __webpack_require__("./src/app/_components/vehicles/vehicle-item/vehicle-item.component.html"),
            styles: [__webpack_require__("./src/app/_components/vehicles/vehicle-item/vehicle-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], VehicleItemComponent);
    return VehicleItemComponent;
}());



/***/ }),

/***/ "./src/app/_components/vehicles/vehicle-list/vehicle-list.component.css":
/***/ (function(module, exports) {

module.exports = "h3.usedNew {\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n.type.heading .usedNew {\n  position: relative;\n  top: 10px;\n}\n\n.nav a.btn.New {\n  background-color: #008992;\n  border-color: #008992;\n}\n\n.nav a.btn.New:hover {\n  background-color: #01646b;\n  border-color: #01646b;\n}\n\n.row.invbuttons p {\n  margin-left: 15px;\n  font-weight: bold;\n}\n\n.row.invbuttons {\n  margin-top: 8px;\n  margin-bottom: 15px;\n}\n\n.invdropdown li {\n  cursor: pointer;\n}\n\n/* Dropdown transition */\n\n.dropdown .dropdown-menu {\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  max-height: 0;\n  display: block;\n  overflow: hidden;\n  opacity: 0;\n}\n\n.dropdown.open .dropdown-menu {\n  max-height: 200px;\n  opacity: 1;\n  margin-right: -10px;\n}\n\n.panel {\n      margin-bottom: 20px;\n      background-color: #fff;\n      border: 1px solid transparent;\n      border: 1px solid rgba(0, 0, 0, .12);\n      border-radius: 4px;\n      -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n      box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n      margin: 25px 0;\n      padding: 10px;\n\n}\n\n.panel-body.clearfix {\n  background-color: #FFF;\n\n}\n\n.fixed {\n  position: relative;\n  height: calc(100% - 60px);\n  overflow-y: scroll;\n  background: #fafafa;\n  z-index: 2;\n  width: 100%;\n  padding: 0 30px;\n}\n\n.col-md-6.btn:first-child {\n  margin-left: -15px;\n  position: relative;\n  right: 7px;\n}\n\n.search {\n     -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n     box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n     padding: 10px 0 10px 0;\n     position: relative;\n     z-index: 5;\n}\n\n.search .col-md-10 {\n  margin-left: 8%;\n}\n\n.pull-forward {\n  z-index: 99;\n}\n"

/***/ }),

/***/ "./src/app/_components/vehicles/vehicle-list/vehicle-list.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Dropdown inventory buttons-->\n\n<!--Row inventory buttons-->\n<!--<div class=\"nav clearfix goodBad\" style=\"margin-top: 40px; margin-bottom: 20px;\" >\n    <div style=\"background: transparent; padding: 0\" class=\"col-md-6\" *ngFor=\"let count of invCounts\">\n      <div class=\"clearfix\">\n        <div class=\"col-md-2\" style=\"padding:3px;\" *ngFor=\"let class of count.data\">\n          <a class=\"btn btn-primary col-md-12 {{count.type}}\" [ngClass]=\"{ 'disabled': class.count==0 }\" style=\"display: block; padding: 5px;\" (click)=\"loadCorrectVehicles(class.type,class.classification)\">\n            <span style=\"text-align: left;\">{{class.className}}</span>\n            <span style=\"text-align: right;\"> ({{class.count}}) </span>\n          </a>\n        </div>\n        <div class=\"col-md-2\" style=\"padding:3px;\">\n          <a class=\"btn btn-primary col-md-12 {{count.type}}\" [ngClass]=\"{ 'disabled': count.total==0 }\" style=\"display: block; padding: 5px;\" (click)=\"loadCorrectVehicles(count.data[0].type,0)\">\n            <span style=\"text-align: left;\">{{count.type}}</span>\n            <span style=\"text-align: right;\"> ({{count.total}}) </span>\n          </a>\n        </div>\n      </div>\n    </div>\n    (ngModelChange)=\"onValueChange($event)\" (paste)=\"formatContent($event)\"\n  </div> -->\n  <div class=\"search row\">\n    <div class=\"col-md-10\">\n      <input type=\"text\" class=\"form-control\" placeholder=\"Search...\" name=\"srch-term\" id=\"srch-term\" [(ngModel)]=\"value\" (paste)=\"formatRequest($event)\"\n        (ngModelChange)=\"onValueChange($event)\" (keypress)=\"itemSearchTerm$.next($event.target.value);\">\n    </div>\n  </div>\n\n<app-vehicle-single *ngIf=\"selected\" (closeBox)=\"closeSingle($event)\" class=\"pull-forward\" [item]=\"selectedItem\" [account]=\"account\"></app-vehicle-single>\n<div class=\"wrap fixed\" appInfiniteScroller scrollPerecnt=\"90\" immediateCallback=\"false\" [scrollCallback]=\"scrollCallback\"\n  #vehicleWrapper>\n  <div class=\"vehicle-list clearfix\">\n    <div class=\"vehicle\" *ngFor=\"let item of items | search: value\">\n      <app-vehicle-item (sendItem)=\"getItem($event)\" [item]=\"item\" [account]=\"account\"></app-vehicle-item>\n    </div>\n  </div>\n</div>\n\n  <div class=\"col-md-2\">\n    {{invCounts | invCounts | json}}\n    <button dropdownToggle dropdown *ngFor=\"let count of invCounts | invCounts\" type=\"button\" id=\"invbutton\" class=\"btn btn-primary col-md-6\"\n      dropdown-open>{{count.name}} ({{count.count}})\n      <span class=\"caret\"></span>\n      <ul *dropdownMenu class=\"dropdown-menu\" role=\"menu\">\n        <li roll=\"menuitem\" [ngClass]=\"{ 'disabled': class.count==0 }\" *ngFor=\"let class of count.data\">\n          <a class=\"dropdown-item\" (click)=\"loadCorrectVehicles(class.type,class.classification)\">{{class.className}}\n            <span style=\"text-align: right;\"> ({{class.count}}) </span>\n          </a>\n        </li>\n      </ul>\n    </button>\n  </div>\n\n<div *ngIf=\"loading\" class=\"loadingIndicator\">\n  <div class=\"row\" style=\"clear: both;\">\n    <sk-folding-cube></sk-folding-cube>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/_components/vehicles/vehicle-list/vehicle-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_account_service__ = __webpack_require__("./src/app/_services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_account__ = __webpack_require__("./src/app/_models/account.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var VehicleListComponent = (function () {
    function VehicleListComponent(accountService, route, router, el) {
        var _this = this;
        this.accountService = accountService;
        this.route = route;
        this.router = router;
        this.el = el;
        this.itemSearchTerm$ = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["b" /* Subject */]();
        this.account = new __WEBPACK_IMPORTED_MODULE_3__models_account__["a" /* Account */]();
        this.items = [];
        this.type = '';
        this.offset = 0;
        this.immediateCallback = false;
        this.loading = false;
        this.loadDone = false;
        this.selected = false;
        this.pasted = false;
        this.value = '';
        this.classes = '';
        this.width = 0;
        this.processData = function (vehicles) {
            _this.tmpData = vehicles.json();
            if (_this.tmpData.vehicles.length < 20) {
                _this.loadDone = true;
            }
            _this.items = _this.items.concat(_this.tmpData.vehicles);
            _this.offset = _this.items.length;
            _this.loading = false;
        };
        this.scrollCallback = this.loadVehicles.bind(this);
        this.element = document.getElementById('main-container');
        this.width += this.element.offsetWidth;
        var padding = Number(this.element.style.paddingLeft.replace('px', ''));
        this.width -= padding;
        var tmp = this.element.className;
        this.classes = tmp;
        this.element.className = tmp + ' hide_account_info';
        this.observe = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["a" /* Observable */].fromEvent(this.element, 'scroll').subscribe(function (event) {
            _this.setFixed(event, _this.wrapper);
        });
    }
    VehicleListComponent.prototype.getItem = function (data) {
        this.selectedItem = data;
        this.selected = true;
    };
    VehicleListComponent.prototype.closeSingle = function (data) {
        this.selectedItem = null;
        this.selected = false;
    };
    VehicleListComponent.prototype.onValueChange = function (data) {
        if (this.pasted === true) {
            this.itemSearchTerm$.next(data);
        }
    };
    VehicleListComponent.prototype.formatRequest = function (data) {
        this.pasted = true;
    };
    VehicleListComponent.prototype.searchForVehicle = function () {
        var _this = this;
        this.loading = true;
        this.accountService.searchVehicle(this.itemSearchTerm$, this.accountId).subscribe(function (items) {
            _this.items = _this.items.concat(items);
            _this.loading = false;
        });
    };
    VehicleListComponent.prototype.loadCorrectVehicles = function (type, classification) {
        var _this = this;
        this.router.navigate(['vehicles', type, classification], { relativeTo: this.route.parent });
        this.loading = true;
        this.items = [];
        this.accountService.getAccountVehicles(this.accountId, type, classification, 0).subscribe(function (items) {
            var data = items.json();
            _this.items = data.vehicles;
            _this.params = data.params;
            _this.loading = false;
        });
    };
    VehicleListComponent.prototype.getScrollAction = function (data) {
    };
    VehicleListComponent.prototype.loadVehicles = function () {
        this.loading = true;
        if (this.loadDone == false) {
            this.offset = this.items.length;
            return this.accountService.getAccountVehicles(this.accountId, this.type, this.classification, this.offset).do(this.processData);
        }
        else {
            this.loading = false;
        }
    };
    VehicleListComponent.prototype.ngAfterViewInit = function () {
    };
    VehicleListComponent.prototype.ngOnChanges = function () {
    };
    VehicleListComponent.prototype.setFixed = function (event, wrapper) {
        console.log('EVENT', event);
        console.log('WRAPPER', wrapper);
        if (wrapper) {
            var top_1 = wrapper.nativeElement.offsetTop;
            var scrollTop = event.target.scrollTop;
            console.log(top_1);
            if (top_1 - scrollTop <= 60) {
                wrapper.nativeElement.className = "wrap fixed";
                this.element = this.wrapper.nativeElement;
            }
        }
    };
    VehicleListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.sub = this.route.parent.params.subscribe(function (params) {
            _this.accountId = params['id'];
            _this.searchForVehicle();
            var sub = _this.accountService.getCurrentAccount().subscribe(function (account) {
                _this.account = account;
                if (_this.account.inventory_counts.length === 0) {
                    _this.accountService.getInvCounts(_this.accountId).subscribe(function (counts) {
                        _this.invCounts = counts;
                    });
                }
                else {
                    _this.invCounts = _this.account.inventory_counts;
                }
                _this.sub.unsubscribe();
            });
        });
        this.routersub = this.route.params.subscribe(function (params) {
            _this.type = params['type'];
            _this.classification = params['classification'];
        });
    };
    VehicleListComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.routersub.unsubscribe();
        this.element.className = this.classes;
        console.log(this.element);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_12" /* ViewChild */])('vehicleWrapper'),
        __metadata("design:type", Object)
    ], VehicleListComponent.prototype, "wrapper", void 0);
    VehicleListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-vehicle-list',
            template: __webpack_require__("./src/app/_components/vehicles/vehicle-list/vehicle-list.component.html"),
            styles: [__webpack_require__("./src/app/_components/vehicles/vehicle-list/vehicle-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ElementRef */]])
    ], VehicleListComponent);
    return VehicleListComponent;
}());



/***/ }),

/***/ "./src/app/_components/vehicles/vehicle-single/vehicle-single.component.css":
/***/ (function(module, exports) {

module.exports = "#vehicleMediaContainer {\n  width: 100%;\n}\n\n#vehicleDetailsModal li {\n  list-style: none;\n}\n\n#vehicleDetailsModal ul {\n  padding-left: 0;\n}\n\n#vehicleDetailsContainer,\n#vehicleMediaContainer,\n#single-vehicle-expand {\n  cursor: pointer;\n  font-weight: bold;\n  font-size: 14px;\n}\n\n#single-vehicle-expand {\n  margin-bottom: 10px;\n}\n\n#vehicleDetailsModal {\n  position: fixed;\n  right: 0;\n  left: auto;\n  width: 45%;\n}\n\n#vehicleDetailsModal .modal-dialog {\n  width: auto;\n  padding-left: 20px;\n  height: 100%;\n  margin-bottom: 0;\n  margin-top: 0;\n}\n\n#vehicleDetailsModal .modal-dialog .modal-container {\n  height: 100%;\n  overflow-y: scroll;\n  border-left: 3px solid #2e353d;\n  border-radius: 0px;\n}\n\n#vehicleDetailsModal .modal-container {\n  background-color: #f7f7f7;\n}\n\n#vehicleDetailsModal .modal-container .modal-body {\n  padding: 25px 15px 30px 35px;\n}\n\n#vehicleDetailsModal .modal-content {\n  padding: 25px;\n}\n\n#vehicleDetailsModal .modal-section {\n  margin: 20px auto;\n  background-color: #fff;\n  border: 1px solid #e5e5e5;\n  border-radius: 5px;\n  padding: 15px;\n  border-width: 1px 1px 2px;\n  border-bottom-color: #2e353d;\n}\n\n#vehicleDetailsModal .modal-close-btn {\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n  position: fixed;\n  top: 42%;\n  z-index: 5;\n  float: none;\n  padding: 25px 5px;\n  background-color: #df2a25;\n  border: 2px solid #8c1410;\n  border-left: none;\n  opacity: .5;\n}\n\n#vehicleDetailsModal .modal-close-btn:hover {\n  opacity: 1;\n}\n\n#vehicleDetailsModal .modal-close-btn .modal-close-icon {\n  font-size: 30px;\n  position: relative;\n  text-shadow: 0 1px 0 #ff7979;\n  color: #a70000;\n}\n\n#vehicleDetailsModal .modal-close-btn .modal-close-text {\n  display: none;\n  font-size: 16px;\n  color: #fff;\n  text-shadow: 0 1px 0 #000;\n}\n\n#vehicleDetailsModal .closeModalContainer {\n  height: 100%;\n  top: 0;\n  z-index: 2;\n  position: absolute;\n  width: 40px;\n  visibility: visible;\n}\n\n#vehicleDetailsModal .closeModalContainer:hover .modal-close-btn {\n  visibility: visible;\n}\n\n#vehicleDetailsModal .single-vehicle-info .vehicle-overview-value {\n  font-weight: normal;\n}\n\n#vehicleDetailsModal .modal-section .vehicle-overview-label {\n  display: inline-block;\n  width: 50%;\n  font-weight: bold;\n}\n\n#vehicleDetailsModal .modal-section .vehicle-overview-value {\n  display: inline-block;\n  width: 50%;\n  text-align: right;\n}\n\n#vehicleDetailsModal .modal-section .comments .vehicle-overview-value {\n  width: 100%;\n  text-align: left;\n}\n\n#vehicleDetailsModal .modal-title {\n  font-size: 21px;\n}\n\n#vehicleDetailsModal .modal-section-header {\n  border-bottom: 1px solid #e5e5e5;\n  margin-bottom: 10px;\n}\n\n#vehicleDetailsModal .modal-section-header h4 {\n  font-weight: normal;\n}\n\n.single-vehicle-info,\n.single-vehicle-vehicle-pricing,\n.single-vehicle-details-heading {\n  margin-left: 5px;\n}\n\n.single-vehicle-info,\n.single-vehicle-vehicle-pricing {\n  margin-bottom: 7px;\n}\n\n.vin,\n.stock,\n.comments,\n.pricing,\n.type {\n  font-style: italic;\n}\n\n.single-vehicle-info .type {\n  text-transform: capitalize;\n  font-style: normal;\n}\n\n.vehicle-images.outer {\n  background-color: #FFF;\n  border: 1px solid #e5e5e5;\n  border-radius: 5px;\n  padding: 15px;\n  border-width: 1px 1px 2px;\n  border-bottom-color: #2e353d;\n}\n\n.vehicle-overview-value.condition {\n  text-transform: capitalize;\n}\n"

/***/ }),

/***/ "./src/app/_components/vehicles/vehicle-single/vehicle-single.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"vehicleDetailsModal\" [config]=\"{ show: true, backdrop: false }\" [@dialog]=\"state\" (onHidden)=\"closeVehicleInfo(item)\"\n  bsModal #autoShownModal=\"bs-modal\" class=\"modal custom-fade-in-left\" tabindex=\"-1\" role=\"dialog\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg\">\n    <div class=\"modal-container\">\n      <div class=\"closeModalContainer\">\n        <button type=\"button\" class=\"btn-danger modal-close-btn close\" (click)=\"closeVehicleInfo(item)\" aria-label=\"Close\">\n          <span class=\"icon modal-close-icon \">&times;</span>\n          <span class=\"modal-close-text\">Close</span>\n        </button>\n      </div>\n      <div class=\"modal-header\">\n        <h3 class=\"modal-title pull-left\">{{item.year}} {{item.make}} {{item.model}} {{item.trim}}</h3>\n      </div>\n      <div class=\"modal-body\">\n\n        <div id=\"vehicleMediaContainer\">\n          <div class=\"modal-section-header single-vehicle-images-heading\">\n            <h4>Vehicle Images</h4>\n          </div>\n          <div class=\"vehicle-images outer\">\n            <app-vehicle-carousel [vehicleImages]=\"item.image\" [account]=\"item.accountId\"></app-vehicle-carousel>\n\n          </div>\n\n        </div>\n\n        <div id=\"vehiclePricingContainer\" class=\"modal-section\">\n          <div class=\"single-vehicle-vehicle-pricing\">\n            <div class=\"modal-section-header single-vehicle-pricing-heading\">\n              <h4>Pricing Data</h4>\n            </div>\n            <div>\n              <ul>\n                <li>\n                  <span class=\"vehicle-overview-label vehicle-overview-pricing\">MSRP:</span>\n                  <span class=\"vehicle-overview-value\">{{item.msrp}}</span>\n                </li>\n                <li>\n                  <span class=\"vehicle-overview-label vehicle-overview-pricing\">Internet Price:</span>\n                  <span class=\"vehicle-overview-value\">{{item.internetPrice}}</span>\n                </li>\n                <li>\n                  <span class=\"vehicle-overview-label vehicle-overview-pricing\">Asking Price:</span>\n                  <span class=\"vehicle-overview-value\">{{item.askingPrice}}</span>\n                </li>\n                <li>\n                  <span class=\"vehicle-overview-label vehicle-overview-pricing\">Sale Price:</span>\n                  <span class=\"vehicle-overview-value\">{{item.salePrice}}</span>\n                </li>\n                <li>\n                  <span class=\"vehicle-overview-label vehicle-overview-pricing\">Invoice Price:</span>\n                  <span class=\"vehicle-overview-value\">{{item.invoicePrice}}</span>\n                </li>\n                <li>\n                  <span class=\"vehicle-overview-label vehicle-overview-pricing\">Retail Price:</span>\n                  <span class=\"vehicle-overview-value\">{{item.retailValue}}</span>\n                </li>\n                <li>\n                  <span class=\"vehicle-overview-label vehicle-overview-pricing\">Wholesale Price:</span>\n                  <span class=\"vehicle-overview-value\">{{item.wholesalePrice}}</span>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n        <div id=\"vehicleOverviewContainer\" class=\"modal-section\">\n          <div class=\"modal-section-header single-vehicle-details-heading\">\n            <h4>Vehicle Overview</h4>\n          </div>\n          <div class=\"single-vehicle-overview\">\n            <ul>\n              <li>\n                <span class=\"vehicle-overview-label\">Location:</span>\n                <span class=\"vehicle-overview-value\">{{item.accountId}}</span>\n              </li>\n              <li>\n                <span class=\"vehicle-overview-label\">Stock #:</span>\n                <span class=\"vehicle-overview-value\">{{item.stockNumber}}</span>\n              </li>\n              <li>\n                <span class=\"vehicle-overview-label\">Status:</span>\n                <span class=\"vehicle-overview-value\">{{item.status}}</span>\n              </li>\n              <li>\n                <span class=\"vehicle-overview-label\">Classification:</span>\n                <span class=\"vehicle-overview-value\">{{item.className}}</span>\n              </li>\n              <li>\n                <span class=\"vehicle-overview-label\">Condition:</span>\n                <span class=\"vehicle-overview-value condition\">{{item.type}}</span>\n              </li>\n              <li *ngIf=\"item.certified\">\n                <span class=\"vehicle-overview-label\">Certified:</span>\n                <span class=\"vehicle-overview-value\">Yes</span>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div id=\"vehicleDetailsContainer\" class=\"modal-section\">\n          <div class=\"modal-section-header single-vehicle-details-heading\">\n            <h4>Vehicle Details</h4>\n          </div>\n          <div class=\"single-vehicle-info\">\n            <ul>\n              <li>\n                <span class=\"vehicle-overview-label\">VIN:</span>\n                <span class=\"vehicle-overview-value\"> {{item.vin}}</span>\n              </li>\n              <li>\n                <span class=\"vehicle-overview-label\">Year:</span>\n                <span class=\"vehicle-overview-value\"> {{item.year}}</span>\n              </li>\n              <li>\n                <span class=\"vehicle-overview-label\">Make:</span>\n                <span class=\"vehicle-overview-value\"> {{item.make}}</span>\n              </li>\n              <li>\n                <span class=\"vehicle-overview-label\">Model:</span>\n                <span class=\"vehicle-overview-value\"> {{item.model}}</span>\n              </li>\n              <li>\n                <span class=\"vehicle-overview-label\">Trim:</span>\n                <span class=\"vehicle-overview-value\"> {{item.trim}}</span>\n              </li>\n              <li>\n                <span class=\"vehicle-overview-label\">Odometer:</span>\n                <span class=\"vehicle-overview-value\"> {{item.mileage}}</span>\n              </li>\n              <li>\n                <span class=\"vehicle-overview-label\">Transmission:</span>\n                <span class=\"vehicle-overview-value\"> {{item.transmission}}</span>\n              </li>\n              <li>\n                <span class=\"vehicle-overview-label\">Driveline:</span>\n                <span class=\"vehicle-overview-value\"> {{item.driveline}}</span>\n              </li>\n              <li>\n                <span class=\"vehicle-overview-label\">Engine:</span>\n                <span class=\"vehicle-overview-value\"> {{item.engine}}</span>\n              </li>\n              <li>\n                <span class=\"vehicle-overview-label\">Engine Size:</span>\n                <span class=\"vehicle-overview-value\"> {{item.engineSize}}</span>\n              </li>\n              <li>\n                <span class=\"vehicle-overview-label\">Fuel Type:</span>\n                <span class=\"vehicle-overview-value\"> {{item.fuel}}</span>\n              </li>\n              <li>\n                <span class=\"vehicle-overview-label\">City MPG:</span>\n                <span class=\"vehicle-overview-value\"> {{item.city_mpg}}</span>\n              </li>\n              <li>\n                <span class=\"vehicle-overview-label\">Highway MPG:</span>\n                <span class=\"vehicle-overview-value\"> {{item.highway_mpg}}</span>\n              </li>\n            </ul>\n          </div>\n        </div>\n        <div id=\"vehicleCommentsContainer\" class=\"modal-section\">\n          <div class=\"modal-section-header single-vehicle-details-heading\">\n            <h4>Comments</h4>\n          </div>\n          <div class=\"comments\">\n            <span class=\"vehicle-overview-value\"> {{item.comments}}</span>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/_components/vehicles/vehicle-single/vehicle-single.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VehicleSingleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_item__ = __webpack_require__("./src/app/_models/item.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var VehicleSingleComponent = (function () {
    function VehicleSingleComponent() {
        this.closeBox = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isImageContainerExpanded = false; // store state
    }
    VehicleSingleComponent.prototype.closeVehicleInfo = function (item) {
        this.closeBox.emit(false);
    };
    VehicleSingleComponent.prototype.getImageSrc = function (data, accountId) {
        var firstLetter = accountId.charAt(0);
        var url = 'https://pictures.dealer.com/ddc/resize/320x/quality/70/sharpen/1/ddc/' + firstLetter + '/' + accountId + '/' + data;
        return url;
    };
    VehicleSingleComponent.prototype.toggleState = function () {
        var bool = this.isImageContainerExpanded;
        this.isImageContainerExpanded = bool === false ? true : false;
    };
    VehicleSingleComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_item__["a" /* Item */])
    ], VehicleSingleComponent.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], VehicleSingleComponent.prototype, "account", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], VehicleSingleComponent.prototype, "closeBox", void 0);
    VehicleSingleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-vehicle-single',
            template: __webpack_require__("./src/app/_components/vehicles/vehicle-single/vehicle-single.component.html"),
            styles: [__webpack_require__("./src/app/_components/vehicles/vehicle-single/vehicle-single.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["m" /* trigger */])('dialog', [
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["j" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* style */])({
                        opacity: 1,
                        transform: 'translateX(0)'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* style */])({
                            opacity: 0,
                            transform: 'translateX(500px)'
                        }),
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(150)
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["l" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["e" /* animate */])(150, Object(__WEBPACK_IMPORTED_MODULE_2__angular_animations__["k" /* style */])({
                            transform: 'translateX(500px)',
                            opacity: 0
                        }))
                    ])
                ]),
            ]
        }),
        __metadata("design:paramtypes", [])
    ], VehicleSingleComponent);
    return VehicleSingleComponent;
}());



/***/ }),

/***/ "./src/app/_components/wysiwyg.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextEditorComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_modal_service__ = __webpack_require__("./src/app/_services/modal.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//(click)="openModal('custom-modal-3')"
var TextEditorComponent = (function () {
    function TextEditorComponent(modalService) {
        this.modalService = modalService;
        this.onEditorKeyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.loading = false;
        this.currentPage = 0;
        this.id = [];
        this.showlib = false;
        this.postAttachment = "postAttachment";
    }
    TextEditorComponent.prototype.insertContent = function () {
        if (this.currentValue != '') {
            this.editor.insertContent(this.currentValue);
        }
        else {
        }
    };
    TextEditorComponent.prototype.getAttachments = function (data) {
        this.attachments = JSON.parse(data);
        this.img_src = this.attachments.filePath;
        this.id = this.id.concat(this.attachments.id);
        this.htmlString = '<img src="' + this.img_src + '" id="' + this.id + '"/>';
        this.editor.insertContent(this.htmlString);
        this.modalService.close('custom-modal-2');
    };
    TextEditorComponent.prototype.getMedia = function (data) {
        this.attachments = JSON.parse(data);
        for (var i = 0; i < this.attachments.length; i++) {
            this.attachment = this.attachments[i];
            this.img_src = this.attachment.filePath;
            this.id = this.id.concat(this.attachment.id);
            this.htmlString = '<img src="' + this.img_src + '" id="' + this.id + '"/>';
            this.editor.insertContent(this.htmlString);
        }
        this.modalService.close('custom-modal-3');
    };
    TextEditorComponent.prototype.openModal = function (id) {
        if (id == 'custom-modal-3') {
            this.showlib = true;
        }
        this.modalService.open(id);
    };
    TextEditorComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    TextEditorComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            selector: '#' + this.elementId,
            branding: false,
            height: 300,
            menu: [],
            plugins: ['link', 'paste', 'table', 'codesample', 'code'],
            codesample_languages: [
                { text: 'HTML/XML', value: 'markup' },
                { text: 'JavaScript', value: 'javascript' },
                { text: 'CSS', value: 'css' },
                { text: 'PHP', value: 'php' },
                { text: 'Ruby', value: 'ruby' },
                { text: 'Python', value: 'python' },
                { text: 'Java', value: 'java' },
                { text: 'C', value: 'c' },
                { text: 'C#', value: 'csharp' },
                { text: 'C++', value: 'cpp' }
            ],
            toolbar: "image,undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link, table fullscreen code codesample",
            skin_url: '/assets/skins/lightgray',
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup', function () {
                    var content = editor.getContent();
                    _this.onEditorKeyup.emit(content);
                });
            },
        });
        this.insertContent();
    };
    TextEditorComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TextEditorComponent.prototype, "elementId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], TextEditorComponent.prototype, "currentValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], TextEditorComponent.prototype, "onEditorKeyup", void 0);
    TextEditorComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tr-text-editor',
            template: " <div class=\"text_editor\">\n       <textarea id=\"{{elementId}}\"></textarea>\n        <modal id=\"custom-modal-2\">\n            <div class=\"modal\">\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                    \n                    </div>\n                    </div>\n                </div>\n                <div class=\"modal-background\"></div>\n        </modal>\n         <modal id=\"custom-modal-3\">\n            <div class=\"modal\">\n                <div class=\"modal-body\">\n                    <div class=\"row\">\n                       \n                    </div>\n                    </div>\n                </div>\n                <div class=\"modal-background\"></div>\n        </modal>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_modal_service__["a" /* ModalService */]])
    ], TextEditorComponent);
    return TextEditorComponent;
}());



/***/ }),

/***/ "./src/app/_directives/infinitescroller.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfiniteScroller; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pairwise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_exhaustMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/exhaustMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_config__ = __webpack_require__("./src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









;
var DEFAULT_SCROLL_POSITION = {
    sH: 0,
    sT: 0,
    cH: 0
};
var InfiniteScroller = (function () {
    function InfiniteScroller(appConfig, el) {
        var _this = this;
        this.appConfig = appConfig;
        this.el = el;
        this.immediateCallback = false;
        this.scrollPercent = 80;
        this.totalElements = 0;
        this.isUserScrollingDown = function (positions) {
            return positions[0].sT < positions[1].sT;
        };
        this.isScrollExpectedPercent = function (position) {
            return ((position.sT + position.cH) / position.sH) > (_this.scrollPercent / 100);
        };
        this.element = el.nativeElement;
    }
    InfiniteScroller.prototype.ngAfterViewInit = function () {
        this.registerScrollEvent();
        this.streamScrollEvents();
        this.requestCallbackOnScroll();
    };
    InfiniteScroller.prototype.registerScrollEvent = function () {
        var _this = this;
        this.scrollEvent$ = __WEBPACK_IMPORTED_MODULE_1_rxjs_Rx__["a" /* Observable */].fromEvent(this.element, 'scroll');
        this.scrollEvent$.subscribe(function (event) {
            if (event.target.scrollTop > 0) {
                _this.appConfig.collapseHeader(true);
            }
            else {
                _this.appConfig.collapseHeader(false);
            }
        });
    };
    InfiniteScroller.prototype.streamScrollEvents = function () {
        var _this = this;
        this.userScrolledDown$ = this.scrollEvent$
            .map(function (e) { return ({
            sH: e.target.scrollHeight,
            sT: e.target.scrollTop,
            cH: e.target.clientHeight
        }); })
            .pairwise()
            .filter(function (positions) { return _this.isUserScrollingDown(positions) && _this.isScrollExpectedPercent(positions[1]); });
    };
    InfiniteScroller.prototype.requestCallbackOnScroll = function () {
        var _this = this;
        this.requestOnScroll$ = this.userScrolledDown$;
        if (this.immediateCallback) {
            this.requestOnScroll$ = this.requestOnScroll$
                .startWith([DEFAULT_SCROLL_POSITION, DEFAULT_SCROLL_POSITION]);
        }
        this.requestOnScroll$
            .exhaustMap(function () { return _this.scrollCallback(); })
            .subscribe(function () { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], InfiniteScroller.prototype, "scrollCallback", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], InfiniteScroller.prototype, "immediateCallback", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], InfiniteScroller.prototype, "scrollPercent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], InfiniteScroller.prototype, "totalElements", void 0);
    InfiniteScroller = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[appInfiniteScroller]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_8__app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */]])
    ], InfiniteScroller);
    return InfiniteScroller;
}());



/***/ }),

/***/ "./src/app/_models/account.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Account; });
var Account = (function () {
    function Account() {
        this.inventory_counts = [];
        this.loading = true;
    }
    return Account;
}());



/***/ }),

/***/ "./src/app/_models/feed.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArchivedFile; });
var ArchivedFile = (function () {
    function ArchivedFile() {
    }
    return ArchivedFile;
}());



/***/ }),

/***/ "./src/app/_models/item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });
var Item = (function () {
    function Item() {
    }
    return Item;
}());



/***/ }),

/***/ "./src/app/_models/provider.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Provider; });
var Provider = (function () {
    function Provider() {
    }
    return Provider;
}());



/***/ }),

/***/ "./src/app/_pipes/feedsearch.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return feedSearch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var feedSearch = (function () {
    function feedSearch() {
    }
    feedSearch.prototype.transform = function (value, args) {
        var filter = args[0];
        if (filter && Array.isArray(value)) {
            var filterKeys_1 = Object.keys(filter);
            return value.filter(function (item) { return filterKeys_1.reduce(function (key, keyName) { return key && item[keyName].toUpperCase() === filter[keyName].toUpperCase(); }, true); });
        }
        else if (filter && typeof value === 'string') {
            return value.toUpperCase().indexOf(filter.toUpperCase()) >= 0 ? value : '';
        }
        else {
            return value;
        }
    };
    feedSearch = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'feedSearch'
        })
    ], feedSearch);
    return feedSearch;
}());



/***/ }),

/***/ "./src/app/_pipes/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return FilterPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return SearchPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return SearchResultsPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return InventoryCounts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return SearchArchived; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return countFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FeedPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return FormatPipe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DuplicatePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.returnNewAccountArray = function (startsWith, contains) {
        var results = [];
        for (var i = 0; i < startsWith.length; i++) {
            results.push(startsWith[i]);
        }
        for (var j = 0; j < contains.length; j++) {
            results.push(contains[j]);
        }
        return results;
    };
    FilterPipe.prototype.transform = function (accounts, value) {
        if (value === undefined || accounts === undefined || accounts.length === 0) {
            return accounts;
        }
        return accounts.filter(function (account) {
            return account;
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'filter',
            pure: false
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], FilterPipe);
    return FilterPipe;
}());

var SearchPipe = (function () {
    function SearchPipe() {
    }
    SearchPipe.prototype.transform = function (items, value) {
        if (value === undefined || items === undefined || items.length === 0) {
            return items;
        }
        return items.filter(function (item) {
            return item.title.toLowerCase().includes(value.toLowerCase()) || value.includes(item.uuid);
        });
    };
    SearchPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'search',
            pure: false
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], SearchPipe);
    return SearchPipe;
}());

var SearchResultsPipe = (function () {
    function SearchResultsPipe() {
    }
    SearchResultsPipe.prototype.transform = function (accounts, search) {
        if (search === undefined || accounts.length === 0 || search.length === 0) {
            return accounts;
        }
        return accounts.sort(function (a, b) {
            if (a.sum < b.sum) {
                return 1;
            }
            else if (a.sum > b.sum) {
                return -1;
            }
            else {
                return 0;
            }
        });
    };
    SearchResultsPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'searchResults',
            pure: false
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], SearchResultsPipe);
    return SearchResultsPipe;
}());

var InventoryCounts = (function () {
    function InventoryCounts() {
    }
    InventoryCounts.prototype.transform = function (counts) {
        if (counts === undefined || counts.length === 0)
            return counts;
        var tmp = [];
        counts.forEach(function (count) {
            var i = counts.indexOf(count);
            var d = { name: 'all', data: [] };
            if (i === 0) {
                d.name = 'Used';
            }
            else {
                d.name = 'New';
            }
            d.data = count;
            tmp.push(count);
        });
        return tmp;
    };
    InventoryCounts = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'invCounts',
            pure: false
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], InventoryCounts);
    return InventoryCounts;
}());

var SearchArchived = (function () {
    function SearchArchived() {
    }
    SearchArchived.prototype.transform = function (items, value) {
        if (value === undefined)
            return items;
        var count = 0;
        var found = [];
        var val = value.trim();
        return items.filter(function (item) {
            var keys = Object.keys(item);
            var keyString = " ";
            keys.forEach(function (key) {
                keyString += item[key] + " ";
            });
            var bool = keyString.toLowerCase().includes(value.toLowerCase());
            return bool;
        });
    };
    SearchArchived = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'search_archived',
            pure: false
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], SearchArchived);
    return SearchArchived;
}());

var countFilter = (function () {
    function countFilter() {
    }
    countFilter.prototype.transform = function (counts, config) {
        if (!config || !counts || config.length === 0) {
            return 0;
        }
        var total = 0;
        var type = config.type - 1;
        var c = config.classification;
        if (!counts[type] || !counts[type][c]) {
            return 0;
        }
        var test = counts[type][c];
        total += Number(test);
        return total;
    };
    countFilter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'countFilter',
            pure: false
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], countFilter);
    return countFilter;
}());

var FeedPipe = (function () {
    function FeedPipe() {
    }
    FeedPipe.prototype.transform = function (configs) {
        if (configs === undefined) {
            return false;
        }
        var arr = [];
        configs.forEach(function (config) {
            var tmp = { name: config.provider, types: config.inventory_types };
            arr.push(tmp);
        });
        return arr;
    };
    FeedPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'feed',
            pure: false
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], FeedPipe);
    return FeedPipe;
}());

var FormatPipe = (function () {
    function FormatPipe() {
    }
    FormatPipe.prototype.transform = function (items, headers) {
        if (items.length === 0 || items === undefined)
            return items;
        if (headers === undefined || headers.length === 0)
            return items;
        var vehices = [];
        items.forEach(function (item) {
            var tmp = {};
            for (var i = 0; i < headers.length; i++) {
                var col = headers[i];
                var val = item[i];
                tmp[col] = val;
            }
            vehices.push(tmp);
        });
        return vehices;
    };
    FormatPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'format',
            pure: false
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])()
    ], FormatPipe);
    return FormatPipe;
}());

var DuplicatePipe = (function () {
    function DuplicatePipe() {
    }
    DuplicatePipe.prototype.transform = function (value) {
        if (value.length === 0 || !value) {
            return new Date();
        }
        else {
            var d = value.split('_')[0];
            var timestamp = Number(d) * 1000;
            var newDate = new Date(timestamp);
            return newDate;
        }
    };
    DuplicatePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Pipe */])({
            name: 'dateFilter',
            pure: false
        })
    ], DuplicatePipe);
    return DuplicatePipe;
}());



/***/ }),

/***/ "./src/app/_services/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_config__ = __webpack_require__("./src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AccountService = (function () {
    function AccountService(conf, http) {
        var _this = this;
        this.conf = conf;
        this.http = http;
        this.sendAccountChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.SearchTerm = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["b" /* Subject */]();
        this.isLoading = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Rx__["b" /* Subject */]();
        this.API_URL = this.conf.API_CONFIG();
        this.conf.currentAcouunt.subscribe(function (account) {
            _this.setCurrentAccount(account);
        });
    }
    AccountService.prototype.getAccountData = function (accountId) {
        return this.http.get(this.API_URL + '/api/nexus/' + accountId + '/account_info').map(function (response) { return response.json(); });
    };
    AccountService.prototype.getApiConfigs = function (accountId) {
        return this.http.get(this.API_URL + '/api/nexus/' + accountId + '/api_configs').map(function (response) { return response.json(); });
    };
    AccountService.prototype.getAccountVehicles = function (accountId, type, classification, offset) {
        if (!type) {
            type = 0;
        }
        if (!classification) {
            classification = 0;
        }
        if (!offset) {
            offset = 0;
        }
        var params = "type:" + type + ",classification:" + classification + ",offset:" + offset;
        return this.http.get(this.API_URL + ("/api/vehicle/" + accountId + "/getAccountVehicles/" + params)).map(function (response) { return response; });
    };
    AccountService.prototype.getInfluxConfigs = function (accountId) {
        return this.http.get(this.API_URL + ("/api/influx/" + accountId + "/influx_configs")).map(function (response) { return response.json(); });
    };
    AccountService.prototype.getInfluxFeed = function (fileRequest) {
        return this.http.post(this.API_URL + '/influx.php', { request: "getInfluxFeed", fileRequest: fileRequest }).map(function (response) { return response.json(); });
    };
    AccountService.prototype.getUpdatedFeed = function (fileRequest) {
        return this.http.post(this.API_URL + '/api/archives/getfeed', {
            request: "getUpdatedFeed",
            fileRequest: fileRequest
        }).map(function (response) { return response.json(); });
    };
    AccountService.prototype.testGet = function () {
        return this.http.get(this.API_URL + '/api/nexus/get/10/friends').map(function (res) {
            res.json();
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    AccountService.prototype.testPost = function () {
        return this.http.post(this.API_URL + '/api/nexus', { testing: 'true' }).map(function (res) {
            res.json();
        }, function (err) {
            console.log(err);
        });
    };
    AccountService.prototype.getHeaders = function (params) {
        return this.http.get(this.API_URL + '/api/archives/'
            + params.accountId + '/' + params.provider + '/' + params.filename + '/' + params.providerId + '/header_map')
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.getFileList = function (accountId, parser, providerId) {
        if (providerId === void 0) { providerId = null; }
        // tslint:disable-next-line:max-line-length
        return this.http.post(this.API_URL + '/influx.php', { request: "getFileList", accountId: accountId, parser: parser, providerId: providerId }).map(function (response) { return response.json(); });
    };
    AccountService.prototype.getFilters = function (params) {
        return this.http.get(this.API_URL + '/api/archives/'
            + params.accountId + '/' + params.provider + '/' + params.filename + '/' + params.providerId + '/get_config_data')
            .map(function (res) { return res.json(); });
    };
    AccountService.prototype.getInvCounts = function (accountId) {
        return this.http.get(this.API_URL + '/api/nexus/' + accountId + '/inventory_counts').map(function (response) { return response.json().data; });
    };
    AccountService.prototype.setCurrentAccount = function (account) {
        this.account = account;
        this.sendAccountChange.emit(this.account);
    };
    AccountService.prototype.getCurrentAccount = function () {
        return this.conf.currentAcouunt;
    };
    // getCurrentProvider() {
    //     return this.provider;
    // }
    AccountService.prototype.search = function (params) {
        var _this = this;
        return params.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (param) {
            return _this.searchForAcct(param.term, param.foundList);
        });
    };
    AccountService.prototype.searchForAcct = function (name, foundList) {
        if (foundList === void 0) { foundList = []; }
        var ignore = foundList.toString();
        console.log(ignore);
        return this.http.post(this.API_URL + '/api/nexus/search?term=' + name, { ignore: ignore }).map(function (response) { return response.json(); });
    };
    AccountService.prototype.searchVehicle = function (term, accountId) {
        var _this = this;
        return term.debounceTime(400)
            .distinctUntilChanged()
            .switchMap(function (term) { return _this.searchForItem(term, accountId); });
    };
    AccountService.prototype.searchForItem = function (term, accountId) {
        if (term.includes('http')) {
            var uuid = term.match(/.*([0-9a-f]{32})\.htm$/);
            if (uuid) {
                term = uuid[1];
            }
        }
        return this.http.post(this.API_URL + 'vehicle.php', { request: "searchForItem", search: term, accountId: accountId }).map(function (response) { return response.json(); });
    };
    AccountService.prototype.searchByVin = function (term) {
        return this.http.post(this.API_URL + 'vehicle.php', { request: "searchByVin", search: term }).map(function (response) { return response.json(); });
    };
    AccountService.prototype.call = function () {
        var username = 'ddchenryl';
        var password = 'Dumptruck69!';
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]();
        headers.append("Authorization", "Basic " + btoa(username + ":" + password));
        headers.append("Content-Type", "application/x-www-form-urlencoded");
        // tslint:disable-next-line:max-line-length
        return this.http.get('http://influxtools.dealer.com/archiver_test/test.php?provider=devventure&filename=1521743477__longotoyota__zzInventory.txt&providerId=false&accountId=longotoyota&offset=226461&full=', { headers: headers }).map(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    AccountService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]])
    ], AccountService);
    return AccountService;
}());



/***/ }),

/***/ "./src/app/_services/modal.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__("./node_modules/underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);

var ModalService = (function () {
    function ModalService() {
        this.modals = [];
    }
    ModalService.prototype.add = function (modal) {
        // add modal to array of active modals
        this.modals.push(modal);
    };
    ModalService.prototype.remove = function (id) {
        // remove modal from array of active modals
        var modalToRemove = __WEBPACK_IMPORTED_MODULE_0_underscore__["findWhere"](this.modals, { id: id });
        this.modals = __WEBPACK_IMPORTED_MODULE_0_underscore__["without"](this.modals, modalToRemove);
    };
    ModalService.prototype.open = function (id) {
        // open modal specified by id
        var modal = __WEBPACK_IMPORTED_MODULE_0_underscore__["findWhere"](this.modals, { id: id });
        modal.open();
    };
    ModalService.prototype.close = function (id) {
        // close modal specified by id
        var modal = __WEBPACK_IMPORTED_MODULE_0_underscore__["find"](this.modals, { id: id });
        modal.close();
    };
    ModalService.prototype.closeAndUpdate = function (id) {
        // close modal specified by id
        var modal = __WEBPACK_IMPORTED_MODULE_0_underscore__["find"](this.modals, { id: id });
        modal.close();
    };
    return ModalService;
}());



/***/ }),

/***/ "./src/app/_services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_config__ = __webpack_require__("./src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var UserService = (function () {
    function UserService(http, conf) {
        this.http = http;
        this.conf = conf;
        this.API_URL = this.conf.API_CONFIG();
    }
    UserService.prototype.getAllBugs = function (status) {
        return this.http.post(this.API_URL + 'bugfunctions.php', { request: "getAllBugs", status: status }).map(function (response) { return response.json(); });
    };
    UserService.prototype.addBugNow = function (newBug) {
        return this.http.post(this.API_URL + 'bugfunctions.php', { request: "addBug", newBug: newBug }).map(function (response) { return response.json(); });
    };
    UserService.prototype.markBugComplete = function (id) {
        return this.http.post(this.API_URL + 'bugfunctions.php', { request: "markBugComplete", id: id }).map(function (response) { return response.json(); });
    };
    UserService.prototype.deleteBug = function (id) {
        return this.http.post(this.API_URL + 'bugfunctions.php', { request: "deleteBug", id: id }).map(function (response) { return response.json(); });
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_6__app_config__["a" /* AppConfig */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".container {\n    width: 100%;\n    padding: 0;\n}\n@media (min-width: 767px) {\n    .main-panel {\n        background: rgba(203, 203, 210, 0.15);\n        position: relative;\n        float: right;\n        width: calc(100% - 300px);\n        min-height: 100%;\n\n    }\n\n\n}\n.main-panel#main-container {\n    width:100%;\n    overflow: hidden !important;\n}\n.nav-side-menu .navbar-collapse.collapse.in .brand, .nav-side-menu .navbar-collapse.collapse.in .menu-list {display: none;}\n.navbar-toggle {\n    display: inline-block !important;\n    margin: 0 auto;\n    float: right;\n    padding: 10px;\n}\n.nav-side-menu .navbar-collapse.collapse.in .brand, .nav-side-menu .navbar-collapse.collapse.in .menu-list {\n    display: none;\n}\n.nav-side-menu .navbar-collapse.collapse.in {\n    width:auto;\n}\n@media (min-width: 767px) {\n  .nav-side-menu .menu-list .menu-content {\n    display: block;\n  }\n  /*.nav-side-menu .navbar-collapse.collapse { width:300px;}*/\n\n  #main {\n  \twidth:calc(100% - 300px);\n  \tfloat: right;\n  }\n}\n.nav-side-menu li a {\n    display:block;\n}\n.main-panel#main-container {\n    width:100%;\n}\n.menuContainer.out .nav.menu-list {\n    width:100%;\n}\n.menuContainer {\n  background: #262D3E;\n}\n.container.withPadding {\n  padding: 30px;\n}\n.header-container {\n  background: #4B88C8;\n  -webkit-transition: margin ease-in-out .25s;\n  transition: margin ease-in-out .25s;\n}\n.navbar-fixed-bottom,\n.navbar-fixed-top {\n  z-index: 9;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container navbar-fixed-top\" [@showHeader]=\"!collapsed\">\n  <app-header [showHeader]=\"!collapsed\" [value]=\"searchTerm\" (routeChange)=\"onValueChange($event)\"></app-header>\n</div>\n<div class=\"search-results\" *ngIf=\"showSearch && searchTerm.length > 0\">\n  <app-search-page></app-search-page>\n</div>\n<div class=\"nav-side-menu\" [@mainSlide]=\"mainSlide\">\n  <app-sidebar (sendAccountChange)=\"getAccountChange($event)\" (isAccount)=\"checkAccount($event)\" (collapseSideBar)=\"toggleState($event)\"></app-sidebar>\n</div>\n<div class=\"main-panel\" id=\"main-container\" [@otherSlide]=\"otherSlide\">\n  <div class=\"container\" [class.withPadding]=\"!withPadding\">\n    <router-outlet></router-outlet>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__animations_index__ = __webpack_require__("./src/app/_animations/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_config__ = __webpack_require__("./src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(router, appConfig, activeRoute) {
        var _this = this;
        this.router = router;
        this.appConfig = appConfig;
        this.activeRoute = activeRoute;
        this.title = 'Influx Archiver 2.0';
        this.mainSlide = 'menuIn';
        this.otherSlide = 'mainIn';
        this.withPadding = false;
        this.restoreString = '';
        this.searchTerm = '';
        // loading = true;
        this.showSearch = false;
        this.collapsed = false;
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        this.isIn = false; // store state
        var p = this.activeRoute.queryParams.subscribe(function (params) {
            console.log(params);
            if (params.searchTerm) {
                _this.searchTerm = params.searchTerm;
                p.unsubscribe();
            }
            else {
                _this.searchTerm = '';
            }
            //    this.onValueChange(this.searchTerm);
        });
        this.sub = router.events.subscribe(function (route) {
            if (route instanceof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* NavigationEnd */]) {
                _this.withPadding = router.url.includes('account');
                var isSearchRoute = router.url.includes('/search');
                console.log("THIS IS THE CURRENT ROUTE", router.url);
                if (!isSearchRoute && router.url.includes('searchTerm')) {
                    _this.showSearch = true;
                }
                else {
                    _this.showSearch = false;
                }
                _this.appConfig.setSearchRoute(isSearchRoute);
            }
        });
    }
    AppComponent.prototype.removeSearchResults = function (data) {
    };
    AppComponent.prototype.onValueChange = function (data) {
        console.log(data);
        if (data && data.length > 0) {
            this.router.navigate([], { queryParams: { searchTerm: data }, relativeTo: this.activeRoute });
        }
        else {
            this.router.navigate([]);
        }
    };
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.head_sub = this.appConfig.collapsed.subscribe(function (bool) {
            _this.collapsed = bool;
        });
    };
    AppComponent.prototype.toggleState = function (data) {
        var bool = this.isIn;
        this.isIn = bool === false ? true : false;
        this.mainSlide == 'menuOut' ? this.mainSlide = 'menuIn' : this.mainSlide = 'menuOut';
        this.otherSlide == 'mainOut' ? this.otherSlide = 'mainIn' : this.otherSlide = 'mainOut';
    };
    AppComponent.prototype.checkAccount = function (bool) {
        console.log(bool);
        this.withPadding = bool;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")],
            host: { '[@fadeInAnimation]': '' },
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_28" /* trigger */])('mainSlide', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_25" /* state */])('menuOut', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_26" /* style */])({
                        width: '255px'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_25" /* state */])('menuIn', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_26" /* style */])({
                        width: '85px'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_27" /* transition */])('menuIn <=> menuOut', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* animate */])(250))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_28" /* trigger */])('otherSlide', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_25" /* state */])('mainOut', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_26" /* style */])({
                        paddingLeft: '255px'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_25" /* state */])('mainIn', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_26" /* style */])({
                        paddingLeft: '85px'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_27" /* transition */])('mainOut <=> mainIn', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* animate */])(250))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_28" /* trigger */])('showHeader', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_25" /* state */])('true', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_26" /* style */])({
                        marginTop: '0'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_25" /* state */])('false', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_26" /* style */])({
                        marginTop: '-60px'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_27" /* transition */])('true <=> false', Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_17" /* animate */])(250))
                ]),
                __WEBPACK_IMPORTED_MODULE_2__animations_index__["a" /* fadeInAnimation */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_3__app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export _CurrentUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_account__ = __webpack_require__("./src/app/_models/account.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




function _CurrentUser() {
    return SPAUTH.user().then(function (user) {
        return user;
    });
}
var AppConfig = (function () {
    function AppConfig(jsonp) {
        this.jsonp = jsonp;
        this.currentUser = [];
        this.currentAcouunt = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        this.toggleState = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        this.closeSearch = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        this.isSearchRoute = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        this.searchRoute = false;
        this.collapsed = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        this.searchTerm = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["b" /* Subject */]();
        this.account = new __WEBPACK_IMPORTED_MODULE_3__models_account__["a" /* Account */]();
        this.accountId = '';
        console.log(this.account);
        this.currentAcouunt.next(this.account);
    }
    AppConfig.prototype.collapseHeader = function (bool) {
        this.collapsed.next(bool);
    };
    AppConfig.prototype.setSearchRoute = function (bool) {
        this.searchRoute = bool;
        this.isSearchRoute.next(bool);
    };
    AppConfig.prototype.setSearchTerm = function (string) {
        this.search = string;
        this.searchTerm.next(string);
    };
    AppConfig.prototype.getUserData = function () {
        SPAUTH.appId('influx-archiver2')
            .login()
            .then(function (user) {
            var userName = user.username;
            var firstName = user.firstName;
            var lastName = user.lastName;
            var email = user.email;
            var token = user.token;
            var userData = {
                userName: userName,
                firstName: firstName,
                lastName: lastName,
                email: email,
                token: token
            };
            return user;
        });
        var promise = new Promise(function (resolve, reject) {
            _CurrentUser().then(function (user) {
                resolve(user);
            });
        });
        this.setCurrentUser(promise);
        return promise;
    };
    AppConfig.prototype.setCurrentUser = function (data) {
        var _this = this;
        data.then(function (currentUser) {
            _this.currentUser = currentUser,
                _this.title = _this.currentUser.firstName;
        });
    };
    AppConfig.prototype.setTitle = function (name) {
        this.title = name;
    };
    AppConfig.prototype.setDefaultTitle = function () {
        this.title = this.currentUser.fullName;
    };
    AppConfig.prototype.setCurrentAccount = function (data, reset) {
        if (reset === void 0) { reset = false; }
        this.account.loading = data.loading;
        this.account = __assign({}, this.account, data);
        reset = false;
        if (data.accountId && data.accountId !== this.accountId) {
            this.accountId = data.accountId;
            reset = true;
        }
        if (reset) {
            this.account = data;
        }
        this.currentAcouunt.next(this.account);
        console.log(this.account);
    };
    AppConfig.prototype.getTitle = function () {
        return this.title;
    };
    AppConfig.prototype.getCurrentUser = function () {
        return this.currentUser;
    };
    AppConfig.prototype.API_CONFIG = function () {
        return 'http://localhost:6969';
    };
    AppConfig = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* Jsonp */]])
    ], AppConfig);
    return AppConfig;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export initializeCurrentUser */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_mat_module__ = __webpack_require__("./src/app/shared/mat.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("./src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__feeds_feeds_component__ = __webpack_require__("./src/app/feeds/feeds.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__feeds_feed_edit_feed_edit_component__ = __webpack_require__("./src/app/feeds/feed-edit/feed-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sidebar_sidebar_component__ = __webpack_require__("./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_account_account_component__ = __webpack_require__("./src/app/_components/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_account_account_single_component__ = __webpack_require__("./src/app/_components/account/account-single.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_account_service__ = __webpack_require__("./src/app/_services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_vehicles_index__ = __webpack_require__("./src/app/_components/vehicles/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__quicklinks_quicklinks_component__ = __webpack_require__("./src/app/quicklinks/quicklinks.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pipes_filter_pipe__ = __webpack_require__("./src/app/_pipes/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pipes_feedsearch_pipe__ = __webpack_require__("./src/app/_pipes/feedsearch.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_ng_spin_kit__ = __webpack_require__("./node_modules/ng-spin-kit/dist/spinners.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_ngx_bootstrap__ = __webpack_require__("./node_modules/ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap_dropdown__ = __webpack_require__("./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_config__ = __webpack_require__("./src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_influx_influx_component__ = __webpack_require__("./src/app/_components/influx/influx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_user_service__ = __webpack_require__("./src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__bugs_index__ = __webpack_require__("./src/app/bugs/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_modal_service__ = __webpack_require__("./src/app/_services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_wysiwyg_component__ = __webpack_require__("./src/app/_components/wysiwyg.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__components_modal_component__ = __webpack_require__("./src/app/_components/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__directives_infinitescroller_directive__ = __webpack_require__("./src/app/_directives/infinitescroller.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__scroll_directive__ = __webpack_require__("./src/app/scroll.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__feeds_currentfeeds_component__ = __webpack_require__("./src/app/feeds/currentfeeds.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_ngx_bootstrap_modal__ = __webpack_require__("./node_modules/ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_vehicles_vehicle_carousel_vehicle_carousel_component__ = __webpack_require__("./src/app/_components/vehicles/vehicle-carousel/vehicle-carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_ngx_bootstrap_carousel__ = __webpack_require__("./node_modules/ngx-bootstrap/carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__components_influx_influxfeed_influxfeed_component__ = __webpack_require__("./src/app/_components/influx/influxfeed/influxfeed.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__swimlane_ngx_datatable_src__ = __webpack_require__("./node_modules/@swimlane/ngx-datatable/src/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__components_influx_influx_service__ = __webpack_require__("./src/app/_components/influx/influx-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__search_search_results_search_results_component__ = __webpack_require__("./src/app/search/search-results/search-results.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__search_search_page_search_page_component__ = __webpack_require__("./src/app/search/search-page/search-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_hammerjs__ = __webpack_require__("./node_modules/hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_41_hammerjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










































function initializeCurrentUser(config) {
    return function () { return config.getUserData(); };
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__feeds_feeds_component__["a" /* FeedsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__feeds_feed_edit_feed_edit_component__["a" /* FeedEditComponent */],
                __WEBPACK_IMPORTED_MODULE_9__sidebar_sidebar_component__["a" /* SidebarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_account_account_single_component__["a" /* AccountSingleComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_vehicles_index__["b" /* VehicleListComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_vehicles_index__["a" /* VehicleItemComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_vehicles_index__["c" /* VehicleSingleComponent */],
                __WEBPACK_IMPORTED_MODULE_15__quicklinks_quicklinks_component__["a" /* QuicklinksComponent */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_filter_pipe__["c" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_filter_pipe__["g" /* SearchPipe */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_filter_pipe__["h" /* SearchResultsPipe */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_filter_pipe__["i" /* countFilter */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_filter_pipe__["d" /* FormatPipe */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_filter_pipe__["e" /* InventoryCounts */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_filter_pipe__["b" /* FeedPipe */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_filter_pipe__["a" /* DuplicatePipe */],
                __WEBPACK_IMPORTED_MODULE_16__pipes_filter_pipe__["f" /* SearchArchived */],
                __WEBPACK_IMPORTED_MODULE_23__components_influx_influx_component__["a" /* InfluxComponent */],
                __WEBPACK_IMPORTED_MODULE_25__bugs_index__["a" /* IssuetrackerComponent */],
                __WEBPACK_IMPORTED_MODULE_25__bugs_index__["b" /* SubmitbugComponent */],
                __WEBPACK_IMPORTED_MODULE_27__components_wysiwyg_component__["a" /* TextEditorComponent */],
                __WEBPACK_IMPORTED_MODULE_28__components_modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_29__directives_infinitescroller_directive__["a" /* InfiniteScroller */],
                __WEBPACK_IMPORTED_MODULE_30__scroll_directive__["a" /* ScrollerDirective */],
                __WEBPACK_IMPORTED_MODULE_31__feeds_currentfeeds_component__["a" /* CurrentfeedsComponent */],
                __WEBPACK_IMPORTED_MODULE_34__components_vehicles_vehicle_carousel_vehicle_carousel_component__["a" /* VehicleCarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_36__components_influx_influxfeed_influxfeed_component__["a" /* InfluxfeedComponent */],
                __WEBPACK_IMPORTED_MODULE_17__pipes_feedsearch_pipe__["a" /* feedSearch */],
                __WEBPACK_IMPORTED_MODULE_39__search_search_results_search_results_component__["a" /* SearchResultsComponent */],
                __WEBPACK_IMPORTED_MODULE_40__search_search_page_search_page_component__["a" /* SearchPageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_2__shared_mat_module__["a" /* MatModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_18_ng_spin_kit__["a" /* NgSpinKitModule */],
                __WEBPACK_IMPORTED_MODULE_20_ngx_bootstrap__["b" /* AccordionModule */],
                __WEBPACK_IMPORTED_MODULE_33__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_21_ngx_bootstrap_dropdown__["a" /* BsDropdownModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_32_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_35_ngx_bootstrap_carousel__["a" /* CarouselModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_37__swimlane_ngx_datatable_src__["a" /* NgxDatatableModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_16__pipes_filter_pipe__["c" /* FilterPipe */], __WEBPACK_IMPORTED_MODULE_16__pipes_filter_pipe__["g" /* SearchPipe */], __WEBPACK_IMPORTED_MODULE_16__pipes_filter_pipe__["f" /* SearchArchived */], __WEBPACK_IMPORTED_MODULE_16__pipes_filter_pipe__["a" /* DuplicatePipe */], __WEBPACK_IMPORTED_MODULE_16__pipes_filter_pipe__["i" /* countFilter */], __WEBPACK_IMPORTED_MODULE_16__pipes_filter_pipe__["e" /* InventoryCounts */]],
            // tslint:disable-next-line:max-line-length
            providers: [__WEBPACK_IMPORTED_MODULE_13__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_26__services_modal_service__["a" /* ModalService */], __WEBPACK_IMPORTED_MODULE_38__components_influx_influx_service__["a" /* InfluxService */], __WEBPACK_IMPORTED_MODULE_24__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_20_ngx_bootstrap__["a" /* AccordionConfig */], { provide: __WEBPACK_IMPORTED_MODULE_19__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_19__angular_common__["d" /* HashLocationStrategy */] }, __WEBPACK_IMPORTED_MODULE_22__app_config__["a" /* AppConfig */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export APP_ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__search_search_page_search_page_component__ = __webpack_require__("./src/app/search/search-page/search-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_account_account_component__ = __webpack_require__("./src/app/_components/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_account_account_single_component__ = __webpack_require__("./src/app/_components/account/account-single.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__feeds_feeds_component__ = __webpack_require__("./src/app/feeds/feeds.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_vehicles_index__ = __webpack_require__("./src/app/_components/vehicles/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_influx_influx_component__ = __webpack_require__("./src/app/_components/influx/influx.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__bugs_submitbug_component__ = __webpack_require__("./src/app/bugs/submitbug.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__bugs_issuetracker_component__ = __webpack_require__("./src/app/bugs/issuetracker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__feeds_currentfeeds_component__ = __webpack_require__("./src/app/feeds/currentfeeds.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_influx_influxfeed_influxfeed_component__ = __webpack_require__("./src/app/_components/influx/influxfeed/influxfeed.component.ts");











var APP_ROUTES = [
    { path: '', redirectTo: 'account', pathMatch: 'full' },
    {
        path: 'account', component: __WEBPACK_IMPORTED_MODULE_2__components_account_account_component__["a" /* AccountComponent */], children: [
            {
                path: ':id', component: __WEBPACK_IMPORTED_MODULE_3__components_account_account_single_component__["a" /* AccountSingleComponent */],
                children: [
                    { path: '', redirectTo: 'influx', pathMatch: 'full' },
                    { path: 'vehicles', component: __WEBPACK_IMPORTED_MODULE_5__components_vehicles_index__["b" /* VehicleListComponent */] },
                    { path: 'vehicles/:type', component: __WEBPACK_IMPORTED_MODULE_5__components_vehicles_index__["b" /* VehicleListComponent */] },
                    { path: 'vehicles/:type/:classification', component: __WEBPACK_IMPORTED_MODULE_5__components_vehicles_index__["b" /* VehicleListComponent */] },
                    {
                        path: 'influx', component: __WEBPACK_IMPORTED_MODULE_6__components_influx_influx_component__["a" /* InfluxComponent */], children: [
                            { path: ':provider/:filename', component: __WEBPACK_IMPORTED_MODULE_10__components_influx_influxfeed_influxfeed_component__["a" /* InfluxfeedComponent */] },
                            { path: ':provider/:filename/:providerId', component: __WEBPACK_IMPORTED_MODULE_10__components_influx_influxfeed_influxfeed_component__["a" /* InfluxfeedComponent */] },
                        ]
                    },
                ],
            },
        ]
    },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_0__search_search_page_search_page_component__["a" /* SearchPageComponent */] },
    { path: 'submitbug', component: __WEBPACK_IMPORTED_MODULE_7__bugs_submitbug_component__["a" /* SubmitbugComponent */] },
    { path: 'issuetracker', component: __WEBPACK_IMPORTED_MODULE_8__bugs_issuetracker_component__["a" /* IssuetrackerComponent */] },
    { path: 'currentfeeds', component: __WEBPACK_IMPORTED_MODULE_9__feeds_currentfeeds_component__["a" /* CurrentfeedsComponent */] },
    { path: 'feeds', component: __WEBPACK_IMPORTED_MODULE_4__feeds_feeds_component__["a" /* FeedsComponent */] }
];
var routing = __WEBPACK_IMPORTED_MODULE_1__angular_router__["e" /* RouterModule */].forRoot(APP_ROUTES, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* PreloadAllModules */] });


/***/ }),

/***/ "./src/app/auth/bug.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bug; });
var Bug = (function () {
    function Bug() {
    }
    return Bug;
}());



/***/ }),

/***/ "./src/app/bugs/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__issuetracker_component__ = __webpack_require__("./src/app/bugs/issuetracker.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__issuetracker_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__submitbug_component__ = __webpack_require__("./src/app/bugs/submitbug.component.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__submitbug_component__["a"]; });




/***/ }),

/***/ "./src/app/bugs/issuetracker.component.css":
/***/ (function(module, exports) {

module.exports = ".bugDetail .panel-heading.bug-1 {\n  background-color: #d12040;\n}\n\n.bugButton {\n  background-color: #d12040;\n  color: #FFF;\n  font-weight: bold;\n  border-color: #d12040;\n}\n\n.closedBugs {\n  color: #FFF;\n  font-weight: bold;\n  background-color: green;\n}\n\n.bugDetail .panel-heading.bug-2 {\n  background-color: #2098d1;\n}\n\n.panel .panel-heading {\n  color: white;\n}\n\n.featureButton {\n  background-color: #2098d1;\n  color: #FFF;\n  border-color: #2098d1;\n  font-weight: bold;\n}\n\n.bugDetail .panel-heading.bug-3 {\n  background-color: #d1b220;\n}\n\n.questionButton {\n  background-color: #d1b220;\n  color: #FFF;\n  border-color: #d1b220;\n  font-weight: bold;\n}\n\n.legendButtons {\n  margin-bottom: 10px;\n}\n\n.legendButtons button {\n  margin-right: 5px;\n}\n\nh3.title {\n  margin-top: 10px;\n}\n\n.openIssues {\n  font-weight: bold;\n}\n\n.bugDetail button {\n  margin-left: 5px;\n}\n"

/***/ }),

/***/ "./src/app/bugs/issuetracker.component.html":
/***/ (function(module, exports) {

module.exports = "<h3 class=\"title\">Bug Tracker</h3>\n<p><span class=\"openIssues\">{{bugs?.length}}</span> {{status}} issues</p>\n<div class=\"btn-group legendButtons\" role=\"group\" aria-label=\"Button group with nested dropdown\">\n  <button type=\"button\" class=\"btn btn-secondary bugButton hvr-glow\" (click)=\"toggleBugs(0)\">Open Bugs</button>\n  <button type=\"button\" class=\"btn btn-secondary featureButton hvr-glow\">Feature Requests</button>\n  <button type=\"button\" class=\"btn btn-secondary questionButton hvr-glow\">General Questions</button>\n  <button type=\"button\" class=\"btn btn-secondary closedBugs hvr-glow\" (click)=\"toggleBugs(1)\">Closed Bugs</button>\n</div>\n<div *ngIf=\"!bugsLoading\">\n  <div class=\"panel panel-default\" *ngFor=\"let bug of bugs\">\n    <!--This ngIf sets the bug to only display if it's status is NOT closed-->\n    <div class=\"bugDetail\" [ngStyle]=\"checkBugType(bug)\">\n      <div class=\"panel-heading bug-{{this.bugType}}\">\n        <p style=\"font-weight:bold;\">\n          {{bug.title}}\n        </p>\n        <span style=\"font-style:italic; color:white;font-weight:bold;\">\n          <span *ngIf=\"bug.status == 0\">\n            {{bug.type}}, opened: {{bug.dateSubmitted}}\n          </span>\n        <span *ngIf=\"bug.status == 1\">\n            {{bug.type}}, closed: {{bug.dateClosed}}\n          </span>\n        </span>\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"panel-content\" [innerHTML]=\"bug.content\">\n        </div>\n        <button class=\"btn btn-danger pull-right\" (click)=\"closeBug(bug)\">Close Issue</button>\n        <button class=\"btn btn-danger pull-right\" (click)=\"deleteBug(bug)\">Delete Issue</button>\n      </div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"bugsLoading\" class=\"loadingIndicator\">\n  <sk-folding-cube></sk-folding-cube>\n</div>"

/***/ }),

/***/ "./src/app/bugs/issuetracker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssuetrackerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_user_service__ = __webpack_require__("./src/app/_services/user.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IssuetrackerComponent = (function () {
    function IssuetrackerComponent(userService) {
        this.userService = userService;
        this.bugs = [];
        this.bugsLoading = true;
        this.status = "open";
    }
    IssuetrackerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getAllBugs(0).subscribe(function (bugs) {
            _this.bugs = bugs,
                _this.bugsLoading = false;
        });
    };
    IssuetrackerComponent.prototype.toggleBugs = function (status) {
        var _this = this;
        if (status == 0) {
            this.status = "open";
        }
        else {
            this.status = "closed";
        }
        this.bugsLoading = true;
        this.userService.getAllBugs(status).subscribe(function (bugs) {
            _this.bugs = bugs,
                _this.bugsLoading = false;
        });
    };
    IssuetrackerComponent.prototype.closeBug = function (bug) {
        //alert('testing ' + bug.id);
        var index = this.bugs.indexOf(bug);
        this.userService.markBugComplete(bug.id).subscribe(function (bug) {
            //alert(JSON.stringify(bug)); 
        });
        if (index !== -1) {
            this.bugs.splice(index, 1);
        }
    };
    IssuetrackerComponent.prototype.deleteBug = function (bug) {
        var index = this.bugs.indexOf(bug);
        this.userService.deleteBug(bug.id).subscribe(function (bug) {
        });
        if (index !== -1) {
            this.bugs.splice(index, 1);
        }
    };
    IssuetrackerComponent.prototype.checkBugType = function (bug) {
        if (bug.type == 'Bug') {
            this.bugType = 1;
        }
        else if (bug.type == 'Feature Request') {
            this.bugType = 2;
        }
        else if (bug.type == 'General Question') {
            this.bugType = 3;
        }
    };
    IssuetrackerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-issuetracker',
            template: __webpack_require__("./src/app/bugs/issuetracker.component.html"),
            styles: [__webpack_require__("./src/app/bugs/issuetracker.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_user_service__["a" /* UserService */]])
    ], IssuetrackerComponent);
    return IssuetrackerComponent;
}());



/***/ }),

/***/ "./src/app/bugs/submitbug.component.css":
/***/ (function(module, exports) {

module.exports = ".submitButton {\n    margin-top:5px;\n}\nh3.title {\n    margin-top:0;\n}\n.ticketPreview .panel-heading {\n    background-color: #d12040;\n    color:#FFF;\n    border-top-left-radius: 3px;\n    border-top-right-radius: 3px;\n}\n.ticketPreview .form-group {\n    border:2px solid #ccc;\n    border-radius:4px;\n    background-color:#FFF;\n}"

/***/ }),

/***/ "./src/app/bugs/submitbug.component.html":
/***/ (function(module, exports) {

module.exports = "<form name=\"form\" (ngSubmit)=\"submitBug()\" #heroForm=\"ngForm\">\n  <div class=\"card custom_contain\">\n    <div class=\"header\">\n      <h3 class=\"title\">Add a Bug, Feature Request, or ask us a Question!</h3>\n    </div>\n    <div class=\"content\">\n      <div class=\"row\">\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <label>Type (required)</label>\n            <div class=\"form-group\">\n              <select name=\"type\" class=\"form-control\" [(ngModel)]=\"newBug.type\" required>\n                <option *ngFor=\"let type of types\" value=\"Bug\" [value]=\"type.value\">{{type.display}}</option>\n              </select>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <label>Title (required)</label>\n            <input type=\"text\" class=\"form-control\" name=\"title\" [(ngModel)]=\"newBug.title\" required>\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n          <div class=\"form-group\">\n            <label for=\"exampleInputEmail1\">More Info (required)</label>\n            <textarea class=\"form-control\" name=\"content\" [(ngModel)]=\"newBug.content\" value=\"newBug.content\" rows=\"8\" required></textarea>\n            <!--I can't get the tiny-mce thing to work, not sure why-->\n            <!--<tr-text-editor [elementId]=\"'my-editor-id'\" (onEditorKeyup)=\"keyupHandlerFunction($event)\">\n            </tr-text-editor>-->\n          </div>\n        </div>\n        <div class=\"col-md-12\">\n\n        </div>\n      </div>\n      <div class=\"pull-left\">\n        <div *ngIf=\"!bugSubmitted\">\n          <button type=\"submit\" [disabled]=\"!heroForm.form.valid\" class=\"btn btn-info btn-fill profileButton\">Submit</button>\n        </div>\n        <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"\n        />\n      </div>\n      <div *ngIf=\"bugSubmitted\">\n        <div class=\"alert alert-success\">\n          <strong>Success!</strong> We will take a look at this as soon as possible.\n        </div>\n        <button class=\"btn btn-default\" (click)=\"addAnotherBug()\">Add Another</button>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"col-md-12\">\n        <div *ngIf=\"(newBug.type || newBug.title || newBug.content != null)\" class=\"ticketPreview\">\n          <h4>Preview:</h4>\n          <div class=\"form-group\">\n            <div class=\"bugDetail\">\n              <div class=\"panel-heading card\">\n                <h4>{{newBug.title}}</h4>\n                <h6>{{newBug.type}}</h6>\n              </div>\n              <div class=\"panel-body\">\n                <div class=\"panel-content\">\n                  <p>{{newBug.content}}</p>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</form>"

/***/ }),

/***/ "./src/app/bugs/submitbug.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitbugComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_config__ = __webpack_require__("./src/app/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_user_service__ = __webpack_require__("./src/app/_services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_modal_service__ = __webpack_require__("./src/app/_services/modal.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_bug__ = __webpack_require__("./src/app/auth/bug.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SubmitbugComponent = (function () {
    function SubmitbugComponent(user, userService, modalService) {
        this.user = user;
        this.userService = userService;
        this.modalService = modalService;
        this.newBug = new __WEBPACK_IMPORTED_MODULE_4__auth_bug__["a" /* Bug */]();
        this.types = [
            { value: 'Bug', display: 'Bug' },
            { value: 'Feature Request', display: 'Feature Request' },
            { value: 'General Question', display: 'General Question' }
        ];
        this.bugSubmitted = false;
        this.loading = false;
        this.attachments = [];
        this.profile = this.user.getCurrentUser();
    }
    SubmitbugComponent.prototype.keyupHandlerFunction = function (data) {
        this.newBug.content = data;
    };
    SubmitbugComponent.prototype.getAttachments = function (data) {
        this.attachments = this.attachments.concat(data.id);
        this.newBug.attachments = JSON.stringify(this.attachments);
    };
    SubmitbugComponent.prototype.submitBug = function () {
        var _this = this;
        this.loading = true;
        this.newBug.submittedBy = this.profile.email;
        this.userService.addBugNow(this.newBug).subscribe(function (data) {
            _this.newBug = data;
            _this.bugSubmitted = true;
            _this.loading = false;
        }, function (error) {
            //this.alertService.error(error);
            // this.loading = false;
        });
    };
    SubmitbugComponent.prototype.openModal = function (id) {
        this.modalService.open(id);
    };
    SubmitbugComponent.prototype.closeModal = function (id) {
        this.modalService.close(id);
    };
    SubmitbugComponent.prototype.addAnotherBug = function () {
        this.bugSubmitted = false;
        this.newBug.type = '';
        this.newBug.title = '';
        this.newBug.attachments = null;
    };
    SubmitbugComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-submitbug',
            template: __webpack_require__("./src/app/bugs/submitbug.component.html"),
            styles: [__webpack_require__("./src/app/bugs/submitbug.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_2__services_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_3__services_modal_service__["a" /* ModalService */]])
    ], SubmitbugComponent);
    return SubmitbugComponent;
}());



/***/ }),

/***/ "./src/app/feeds/currentfeeds.component.css":
/***/ (function(module, exports) {

module.exports = "iframe {\n    width:300px;\n    height:500px;\n}"

/***/ }),

/***/ "./src/app/feeds/currentfeeds.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"currentFeeds\">\n  <h2>Currently Running Feeds:</h2>\n  <iframe src=\"http://influxtools.dealer.com/cgi-bin/ps.cgi\"></iframe>\n</div>\n<div class=\"feedQueue\">\n    <a class=\"btn btn-success\" href=\"http://influxtools.dealer.com/feed-queuer/index.html\" target=\"_blank\">Queue a Feed</a>\n</div>"

/***/ }),

/***/ "./src/app/feeds/currentfeeds.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentfeedsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CurrentfeedsComponent = (function () {
    function CurrentfeedsComponent() {
    }
    CurrentfeedsComponent.prototype.ngOnInit = function () {
    };
    CurrentfeedsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-currentfeeds',
            template: __webpack_require__("./src/app/feeds/currentfeeds.component.html"),
            styles: [__webpack_require__("./src/app/feeds/currentfeeds.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CurrentfeedsComponent);
    return CurrentfeedsComponent;
}());



/***/ }),

/***/ "./src/app/feeds/feed-edit/feed-edit.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/feeds/feed-edit/feed-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <form>\n      <div class=\"row\">\n        <div class=\"col-sm-5 form-group\">\n          <label for=\"name\">Name</label>\n          <input type=\"text\" id=\"name\" class=\"form-control\">\n        </div>\n        <div class=\"col-sm-2 form-group\">\n          <label for=\"amount\">Amount</label>\n          <input type=\"number\" id=\"amount\" class=\"form-control\">\n        </div>\n      </div>\n      <p>This is where a Component would go</p>\n    </form>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/feeds/feed-edit/feed-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FeedEditComponent = (function () {
    function FeedEditComponent() {
    }
    FeedEditComponent.prototype.ngOnInit = function () {
    };
    FeedEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-feed-edit',
            template: __webpack_require__("./src/app/feeds/feed-edit/feed-edit.component.html"),
            styles: [__webpack_require__("./src/app/feeds/feed-edit/feed-edit.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedEditComponent);
    return FeedEditComponent;
}());



/***/ }),

/***/ "./src/app/feeds/feeds.component.css":
/***/ (function(module, exports) {

module.exports = ".feedHidingButtons,.loadingIndicatorShower {\n    margin-top:10px;\n}\n"

/***/ }),

/***/ "./src/app/feeds/feeds.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-10\">\n    <div *ngIf=\"!feedEditHidden\">\n      <app-feed-edit></app-feed-edit>\n    </div>\n    <div class=\"feedHidingButtons\">\n      <div *ngIf=\"!feedEditHidden\">\n        <button class=\"btn btn-danger hideFeed\" (click)=\"hideFeed()\">Hide Component</button>\n      </div>\n      <div *ngIf=\"feedEditHidden\">\n        <button class=\"btn btn-success showFeed\" (click)=\"showFeed()\">Show Component</button>\n      </div>\n    </div>\n    <hr>\n    <div *ngIf=\"!feedListHidden\">\n      <ul class=\"list-group\">\n        <a class=\"list-group-item\" style=\"cursor: pointer\" *ngFor=\"let feed of feeds\">{{feed.name}} ({{feed.amount}})</a>\n      </ul>\n    </div>\n    <div class=\"feedHidingButtons\">\n      <div *ngIf=\"!feedListHidden\">\n        <button class=\"btn btn-danger hideFeed\" (click)=\"hideFeedEdit()\">Hide Component</button>\n      </div>\n      <div *ngIf=\"feedListHidden\">\n        <button class=\"btn btn-success showFeed\" (click)=\"showFeedEdit()\">Show Component</button>\n      </div>\n    </div>\n    <div class=\"loadingIndicatorShower\">\n      <div *ngIf=\"!loadingHidden\">\n        <button class=\"btn btn-danger hideLoading\" (click)=\"hideLoading()\">Hide Loading Indicator</button>\n      </div>\n      <div *ngIf=\"loadingHidden\">\n        <button class=\"btn btn-success showLoading\" (click)=\"showLoading()\">Show Loading Indicator</button>\n      </div>\n    </div>\n    <div *ngIf=\"!loadingHidden\" class=\"loadingIndicator\">\n      <div class=\"row\" style=\"clear: both;\">\n        <sk-folding-cube></sk-folding-cube>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/feeds/feeds.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FeedsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_feed_model__ = __webpack_require__("./src/app/shared/feed.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FeedsComponent = (function () {
    function FeedsComponent() {
        this.feeds = [
            new __WEBPACK_IMPORTED_MODULE_1__shared_feed_model__["a" /* Feed */]('vAuto', 5),
            new __WEBPACK_IMPORTED_MODULE_1__shared_feed_model__["a" /* Feed */]('DMI', 10),
            new __WEBPACK_IMPORTED_MODULE_1__shared_feed_model__["a" /* Feed */]('SomethingElse', 18)
        ];
        this.feedEditHidden = false;
        this.feedListHidden = false;
        this.componentLoading = false;
        this.loadingHidden = true;
    }
    FeedsComponent.prototype.ngOnInit = function () {
    };
    /* There is a much cleaner way of doing this with a single function, but for the sake of time this will do */
    FeedsComponent.prototype.hideFeed = function () {
        this.feedEditHidden = !this.feedEditHidden;
    };
    FeedsComponent.prototype.showFeed = function () {
        this.feedEditHidden = !this.feedEditHidden;
    };
    FeedsComponent.prototype.hideFeedEdit = function () {
        this.feedListHidden = !this.feedListHidden;
    };
    FeedsComponent.prototype.showFeedEdit = function () {
        this.feedListHidden = !this.feedListHidden;
    };
    FeedsComponent.prototype.hideLoading = function () {
        this.loadingHidden = !this.loadingHidden;
    };
    FeedsComponent.prototype.showLoading = function () {
        this.loadingHidden = !this.loadingHidden;
    };
    FeedsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-feeds',
            template: __webpack_require__("./src/app/feeds/feeds.component.html"),
            styles: [__webpack_require__("./src/app/feeds/feeds.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FeedsComponent);
    return FeedsComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/***/ (function(module, exports) {

module.exports = "\n.navbar.navbar-default {\n    border-radius:0;\n}\n.nav.navbar-nav.navbar-right {\n    margin-right:10px;\n}\n@media (max-width: 767px) {\n  .navbar-default.navbar-fixed-top {\n    display:none;\n  }\n}\n.navbar-default.navbar-fixed-top {\n    z-index:2;\n}\n.brand.hvr-underline-reveal {\n    position: relative;\n    top: 5px;\n}\n.brand.hvr-underline-reveal .headerTitle {\n    text-decoration: none;\n    font-size: 24px;\n    color: #5bc0de;\n    position: relative;\n    top: 2px;\n    font-family:verdana;\n}\n#navbarSarchBarContainer {\nwidth: calc(165% - 8px);\nz-index: 2;\nleft: 0;\ntop: 0;\npadding: 5px 30px;\npadding-left: 410px;\noverflow-x: hidden;\nfloat: right; \n}\n.header, .header-nav {\n    display:block;\n    background: #4B88C8;\n    position:static;\n    padding-left: 85px;\n    -webkit-transition: padding ease .25s;\n    transition: padding ease .25s;\n}\n.header {\n  height: 60px;\n  min-height: 60px;\n}\n.header-nav {\n  height: 48px;\n}\nspan {\n  color: #fff;\n}\n.header.toggle, .header-nav.toggle {\n  padding-left: 280px;\n}\n.header-nav {\n  background: #EDF2F8;\n}\n.primary-row {\n  height: 60px;\n}\n.header .secondary-row {\n  height: 32px;\n  background: #eee;\n  font-size: 16px;\n  color: #636879;\n  border-bottom: 1px solid rgba(0, 0, 0, .12);\n}\n.accountname {\n  margin-bottom: 4px;\n}"

/***/ }),

/***/ "./src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\" class=\"header\" [class.fullHeight]=\"acct.accountId\" [class.toggle]=\"toggle\">\n  <mat-toolbar-row class=\"primary-row\">\n    <span class=\"accountname\">{{acct.name}}</span>\n    <span>\n      <div id=\"navbarSarchBarContainer\">\n        <div class=\"topSearch\">\n          <input type=\"text\" class=\"form-control input-md\" placeholder=\"Search...\" name=\"srch-term\" id=\"srch-term\" [(ngModel)]=\"value\"\n            [value]=\"value\" (ngModelChange)=\"onValueChange($event)\">\n        </div>\n      </div>\n    </span>\n  </mat-toolbar-row>\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_account_service__ = __webpack_require__("./src/app/_services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("./src/app/app.config.ts");
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(api, accountService) {
        var _this = this;
        this.api = api;
        this.accountService = accountService;
        this.toggle = false;
        this.navLinks = [
            { path: 'influx', label: 'Influx Configs' },
            { path: 'vehicles', label: 'Vehicles' }
        ];
        this.routeChange = new __WEBPACK_IMPORTED_MODULE_1__angular_core__["x" /* EventEmitter */]();
        this.sub = api.getCurrentUser();
        this.title = api.getTitle();
        this.acct = this.api.account;
        this.sub = this.api.currentAcouunt.subscribe(function (account) {
            _this.acct = __assign({}, _this.acct, account);
        });
        this.routeSub = this.api.toggleState.subscribe(function (toggle) {
            _this.toggle = toggle;
        });
    }
    HeaderComponent.prototype.onValueChange = function (data) {
        console.log('VALUE CHANGED', data);
        this.routeChange.emit(data);
    };
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.accountService.SearchTerm.subscribe(function (term) {
            _this.value = term;
            _this.routeChange.emit(term);
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.routeSub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "showHeader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["F" /* Input */])(),
        __metadata("design:type", String)
    ], HeaderComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "routeChange", void 0);
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-header',
            template: __webpack_require__("./src/app/header/header.component.html"),
            styles: [__webpack_require__("./src/app/header/header.component.css")],
            animations: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_0__services_account_service__["a" /* AccountService */]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/quicklinks/quicklinks.component.css":
/***/ (function(module, exports) {

module.exports = ".quicklinks .btn-group {\n    margin-top: 7px;\n}\n/* Dropdown transition */\n.dropdown .dropdown-menu {\n    -webkit-transition: all 0.3s;\n    transition: all 0.3s;\n    max-height: 0;\n    display: block;\n    overflow: hidden;\n    opacity: 0;\n}\n.dropdown.open .dropdown-menu {\n    max-height: 600px;\n    opacity: 1;\n    margin-right:-10px;\n}\n#oemPagesNavBarButtonContainer,\n#quickLinksNavBarButtonContainer { float:left; padding-right:0; }\n/* End dropdown transition */\n"

/***/ }),

/***/ "./src/app/quicklinks/quicklinks.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row quicklinks\">\n  <div class=\"btn-group pull-right\">\n    <!--<div class=\"col-md-3\">\n      <button class=\"btn btn-success\" type=\"submit\">Feeds</button>\n    </div>\n    <div class=\"col-md-3\">\n      <button class=\"btn btn-success\" type=\"button\">Button2</button>\n    </div>-->\n\n    <div id=\"oemPagesNavBarButtonContainer\" class=\"col-md-6 \">\n      <div class=\"dropdown\" dropdown>\n        <button id=\"oemPagesNavBarButton\" class=\"btn btn-primary\" dropdown-open>OEM Pages <span class=\"caret\"></span></button>\n        <ul class=\"dropdown-menu\">\n          <li *ngFor=\"let oemlink of oemlinks\">\n            <a href=\"{{oemlink.href}}\" target=\"_blank\" class=\"{{oemlink.name}}\">{{oemlink.name}}</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n    <div id=\"quickLinksNavBarButtonContainer\" class=\"col-md-6 \">\n      <div class=\"dropdown\" dropdown>\n        <button id=\"quickLinksNavBarButton\" class=\"btn btn-primary\" dropdown-open>Quick Links <span class=\"caret\"></span></button>\n        <ul class=\"dropdown-menu\">\n          <li *ngFor=\"let link of links\">\n            <a href=\"{{link.href}}\" target=\"_blank\" class=\"{{link.name}}\">{{link.name}}</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/quicklinks/quicklinks.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuicklinksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QuicklinksComponent = (function () {
    function QuicklinksComponent() {
        /* this is the list of quick links that populate in the top bar dropdown */
        this.links = [
            { name: 'Feed Queuer', href: 'http://influxtools.dealer.com/feed-queuer/index.html' },
            { name: 'Influx Archiver', href: 'http://influxtools.dealer.com/cgi-bin/feed_archives.cgi' },
            { name: 'CSE/FCA File Viewer', href: 'http://influxtools.dealer.com/cse_viewer/index.htm' },
            { name: 'Raw RyanTech Viewer', href: 'http://influxtools.dealer.com/ryantech-file-viewer/index.htm' },
            { name: 'Subaru Feed Viewer', href: 'http://influxtools.dealer.com//subaru-file-viewer/index.htm' },
            { name: 'Trader TDSR Inventory', href: 'http://influxtools.dealer.com//trader-file-viewer/index.htm' },
            { name: 'Trader History Viewer', href: 'http://influxtools.dealer.com//trader-log-viewer/index.htm' },
            { name: 'Export Viewer', href: 'http://influxtools.dealer.com//cgi-bin/export.cgi' },
            { name: 'DealerSpecialties Image Viewer', href: 'http://influxtools.dealer.com//getauto-images/index.htm' },
            { name: 'Image URL Splitter', href: 'http://influxtools.dealer.com//image_splitter/image_splitter.htm' },
            { name: 'JMP Queue Viewer', href: 'http://influxtools.dealer.com//cgi-bin/jmp.cgi' },
            { name: 'Import Provider Info', href: 'https://docs.dealer.com/display/PRODUCTS/Inventory+Integrations+List' },
            { name: 'Export Provider Info', href: 'https://docs.dealer.com/display/PRODUCTS/Inventory+Exports+List' },
            { name: 'CCI File Viewer', href: 'http://influxtools.dealer.com//cci-file-viewer/index.htm' },
            { name: 'Incentivized Dealer List', href: 'http://influxtools.dealer.com/cgi-bin/incentivized_dealerlist.cgi' },
            { name: 'Add New Export', href: 'http://influxtools.dealer.com//cgi-bin/export_new.cgi' },
            { name: 'DEV Syndicated Exports', href: 'http://wcinventoryfeeds1.dealer.ddc/InventoryFeeds/exports' },
            { name: 'JMP Influx Exceptions', href: 'http://influxtools.dealer.com//cgi-bin/jmp_influx_exceptions.cgi' },
            { name: 'FCA Select Vehicles File', href: 'http://influxtools.dealer.com/cgi-bin/fca_select_vehicles.cgi' }
        ];
        /* oem links that populate in the top bar dropdown */
        this.oemlinks = [
            { name: 'Acura (ADW)', href: 'https://docs.dealer.com/display/IST/Acura+(ADW)' },
            { name: 'Audi (AOA)', href: 'https://docs.dealer.com/display/IST/Audi+%28AOA%29' },
            { name: 'BMW', href: 'https://docs.dealer.com/display/IST/BMW' },
            { name: 'Chrysler Canada (CCI)', href: 'https://docs.dealer.com/display/IST/Chrysler+Canada+%28CCI%29' },
            { name: 'Fiat Chrysler Auto (FCA)', href: 'https://docs.dealer.com/display/IST/Fiat+Chrysler+Automobiles+%28FCA%29' },
            { name: 'Ford Direct (FD)', href: 'https://docs.dealer.com/display/IST/Ford+Direct+%28FD%29' },
            { name: 'Genesis', href: 'https://docs.dealer.com/display/IST/Genesis' },
            { name: 'Jaguar & Land Rover (JLR)', href: 'https://docs.dealer.com/pages/viewpage.action?pageId=137429688' },
            { name: 'Lexus', href: 'https://docs.dealer.com/display/IST/Lexus' },
            { name: 'Mercedes-Benz (MB)', href: 'https://docs.dealer.com/display/IST/Mercedes-Benz' },
            { name: 'Subaru of America (SOA)', href: 'https://docs.dealer.com/display/IST/Subaru+of+America+%28SOA%29' },
            { name: 'Subaru of New England (SNE)', href: 'https://docs.dealer.com/display/IST/Subaru+of+New+England+%28SNE%29' },
            { name: 'Volkswagen (VW)', href: 'https://docs.dealer.com/display/IST/Volkswagen+%28VW%29' },
            { name: 'Volvo (VCNA)', href: 'https://docs.dealer.com/display/IST/Volvo+%28VCNA%29' }
        ];
    }
    QuicklinksComponent.prototype.ngOnInit = function () {
    };
    QuicklinksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-quicklinks',
            template: __webpack_require__("./src/app/quicklinks/quicklinks.component.html"),
            styles: [__webpack_require__("./src/app/quicklinks/quicklinks.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], QuicklinksComponent);
    return QuicklinksComponent;
}());



/***/ }),

/***/ "./src/app/scroll.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollerDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_fromEvent__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_pairwise__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/pairwise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_exhaustMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/exhaustMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_startWith__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};









;
var DEFAULT_SCROLL_POSITION = {
    sT: 0,
    childScrolltop: 0
};
var ScrollerDirective = (function () {
    function ScrollerDirective(elm, renderer, document) {
        this.elm = elm;
        this.renderer = renderer;
        this.document = document;
        this.showList = false;
        this.onScrollAction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isUserScrollingDown = function (positions) {
            return positions[0].sT < positions[1].sT;
        };
        this.isScrollExpectedPercent = function (position) {
            return ((position.sT / position.childScrolltop));
        };
        this.element = this.document.getElementById('main-container');
    }
    ScrollerDirective.prototype.ngAfterViewInit = function () {
        this.registerScrollEvent();
        this.streamScrollEvents();
        this.requestCallbackOnScroll();
    };
    ScrollerDirective.prototype.registerScrollEvent = function () {
        this.scrollEvent$ = __WEBPACK_IMPORTED_MODULE_8_rxjs_Rx__["a" /* Observable */].fromEvent(this.element, this.elm.nativeElement, scroll);
    };
    ScrollerDirective.prototype.streamScrollEvents = function () {
        var _this = this;
        this.userScrolledDown$ = this.scrollEvent$
            .map(function (e, child) { return ({
            sT: e.target.scrollTop,
            childScrolltop: child.target.scrollTop
        }); }).filter(function (positions) { return _this.isUserScrollingDown(positions) && _this.isScrollExpectedPercent(positions[1] == 1); });
    };
    ScrollerDirective.prototype.requestCallbackOnScroll = function () {
        var _this = this;
        this.requestOnScroll$ = this.userScrolledDown$;
        this.requestOnScroll$
            .exhaustMap(function () { _this.onScrollAction.emit(true); })
            .subscribe(function () { });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ScrollerDirective.prototype, "showList", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], ScrollerDirective.prototype, "onScrollAction", void 0);
    ScrollerDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[onScrollAction]'
        }),
        __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DOCUMENT */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Renderer */], Document])
    ], ScrollerDirective);
    return ScrollerDirective;
}());



/***/ }),

/***/ "./src/app/search/search-page/search-page.component.css":
/***/ (function(module, exports) {

module.exports = ".dealersearch {\n    position: absolute;\n    top: 55px;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    margin: 0 auto;\n    height: 80%;\n    width: 65%;\n    padding: 20px;\n}\n\n#indexsearchcontainer {\n    position: relative;\n    top: 4px;\n    width: 50%;\n    margin: 10px auto 0 auto;\n    border: 5px solid;\n    border-radius: 8px;\n}\n\n/* .archiver-logo { \n    width: 45%; \n    margin-left: 27%; \n} */\n\n.parentsearch {\n    border-bottom: 3px solid;\n    position: relative;\n    top: 42px;\n}"

/***/ }),

/***/ "./src/app/search/search-page/search-page.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parentsearch\"></div>\n<div>\n  <mat-progress-bar [class.show]=\"loading\" class=\"loading\" mode=\"indeterminate\"></mat-progress-bar>\n  <span *ngIf=\"getSearchRoute()\">\n\n    <!-- <div class=\"logo\">\n      <img class=\"archiver-logo\" src=\"https://i.imgur.com/HDBBxEV.png\" />\n    </div> -->\n    <div id=\"indexsearchcontainer\" class=\"indexsearchcontainer\">\n      <div class=\"topSearch\">\n        <input type=\"text\" class=\"form-control input-md\" placeholder=\"Search...\" name=\"srch-term\" id=\"srch-term\" [(ngModel)]=\"search\"\n          [value]=\"search\" (ngModelChange)=\"emitTerm($event)\">\n      </div>\n\n    </div>\n  </span>\n\n  <div class=\"row dealersearch\">\n    <app-search-results (isSearchRoute)= \"setSearchRoute($event)\" (searchParam)=\"getValue($event)\"></app-search-results>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search/search-page/search-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__animations_slide_down_animation__ = __webpack_require__("./src/app/_animations/slide-down-animation.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_account_service__ = __webpack_require__("./src/app/_services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchPageComponent = (function () {
    function SearchPageComponent(accountService) {
        var _this = this;
        this.accountService = accountService;
        this.loading = false;
        this.closeSearch = false;
        this.isSearchRoute = false;
        this.search = '';
        this.accountService.isLoading.subscribe(function (loading) {
            console.log(loading);
            _this.loading = loading;
        });
    }
    SearchPageComponent.prototype.setSearchRoute = function (data) {
        this.isSearchRoute = data;
    };
    SearchPageComponent.prototype.getSearchRoute = function () {
        return this.isSearchRoute;
    };
    SearchPageComponent.prototype.getValue = function (term) {
        this.search = term;
        this.emitTerm(this.search);
    };
    SearchPageComponent.prototype.emitTerm = function (term) {
        this.accountService.SearchTerm.next(term);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["F" /* Input */])(),
        __metadata("design:type", Object)
    ], SearchPageComponent.prototype, "showResults", void 0);
    SearchPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-search-page',
            template: __webpack_require__("./src/app/search/search-page/search-page.component.html"),
            styles: [__webpack_require__("./src/app/search/search-page/search-page.component.css")],
            animations: [__WEBPACK_IMPORTED_MODULE_0__animations_slide_down_animation__["a" /* slideDownAnimation */]],
            // tslint:disable-next-line:use-host-property-decorator
            host: { '[@slideDownAnimation]': 'false' }
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_account_service__["a" /* AccountService */]])
    ], SearchPageComponent);
    return SearchPageComponent;
}());



/***/ }),

/***/ "./src/app/search/search-results/search-results.component.css":
/***/ (function(module, exports) {

module.exports = ".button {\n    height: auto;\n    width: auto;\n    margin: 0 10px;\n    border: 1px solid rgba(100,100,100,.15);\n    border-radius: 0;\n    padding: 0 15px;\n}\n\n.inline {\n    display: inline-block;\n}\n\n.title {\n    font-size: 22px;\n    margin-bottom: 0;\n}\n\n.clearfix .buttons{\n    text-align: center;\n}\n\n.clearfix.noShadow, .clearfix.noShadow .inline {\n    -webkit-box-shadow: none !important;\n            box-shadow: none !important;\n    background: transparent;\n    color: #ddd;\n}\n\n.clearfix.noShadow {\n    background: #4a4a4a;\n    color: #fff;\n    border: 1px solid rgba(100,100,100,.15);\n    margin: 15px 0;\n}\n\n.white {\n    color: white;\n}\n\n.mat-card-actions .button:hover { \n    background-color: #6c6c6c; \n}"

/***/ }),

/***/ "./src/app/search/search-results/search-results.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"results\" class=\"white\">\n  <div *ngIf=\"search.length > 0\">\n    Search term:\n    <a (click)=\"closeSearch()\">\n      <span class=\"white btn btn-sm\">{{search}}\n        <i class=\"fa fa-times-circle\"></i>\n      </span>\n    </a>\n  </div>\n  <div *ngIf=\"!loading\" class=\"white\">\n\n    <mat-card *ngFor=\"let account of accounts | searchResults: search\" class=\"clearfix noShadow\">\n      <mat-card-title class=\"inline title\">\n        <b>{{account.name}} </b> / {{account.accountId}} / {{account.address1}}{{account.address2}}, {{account.city}}, {{account.state}} {{account.zip}} {{account.country}}</mat-card-title>\n      <mat-card-actions>\n        <button mat-icon-button class=\"button\" [routerLink]=\"['/account', account.accountId]\" (click)=\"setNewAccount(account);\">\n          <span>\n            <i class=\"fa fa-cogs\"></i> Influx Configs ({{account.num_configs}})</span>\n        </button>\n        <button mat-icon-button class=\"button\" [routerLink]=\"['/account', account.accountId, 'vehicles']\" (click)=\"setNewAccount(account);\">\n          <span>\n            <i class=\"fa fa-car\"></i> Vehicles ({{account.num_vehicles}})</span>\n        </button>\n        <a mat-icon-button class=\"button\" href=\"http://{{account.accountId}}.cms.dealer.com\"  target=\"_blank\">\n           <span class=\"white\">\n            <i class=\"fa fa-laptop\"></i> CMS Site </span>\n        </a>\n        <a mat-icon-button class=\"button\" href=\"{{account.publicUrl}}\" target=\"_blank\">\n          <span class=\"white\">\n            <i class=\"fa fa-laptop\"></i> Live Site </span>\n        </a>\n      </mat-card-actions>\n    </mat-card>\n    <span class=\"white\" *ngIf=\"accounts.length > 0\"> {{accounts.length}} Results Found </span>\n  </div>\n  <div *ngIf=\"loading\" class=\"loadingIndicator clearfix\">\n    <sk-folding-cube></sk-folding-cube>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search/search-results/search-results.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchResultsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_account_service__ = __webpack_require__("./src/app/_services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_config__ = __webpack_require__("./src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SearchResultsComponent = (function () {
    function SearchResultsComponent(router, route, accountService, appConfig) {
        this.router = router;
        this.route = route;
        this.accountService = accountService;
        this.appConfig = appConfig;
        this.accounts = [];
        this.loading = false;
        this.searchTerm = '';
        this.message = '';
        this.search = '';
        this.foundList = [];
        this.isParam = false;
        this.value = '';
        this.isSearchRoute = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["x" /* EventEmitter */]();
        this.searchTerm$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["b" /* Subject */]();
        this.searchParam = new __WEBPACK_IMPORTED_MODULE_2__angular_core__["x" /* EventEmitter */]();
        console.log(this.route.parent);
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchForUser();
        this.registerSubscriber();
        this.searchRoute = this.appConfig.searchRoute;
        this.isSearchRoute.emit(this.searchRoute);
        this.route_sub = this.route.queryParams.subscribe(function (params) {
            if (params.searchTerm && params.searchTerm.length > 0) {
                _this.searchParam.emit(params.searchTerm);
                _this.appConfig.closeSearch.next(true);
                _this.isParam = true;
            }
            else {
                _this.isParam = false;
                _this.appConfig.closeSearch.next(false);
            }
        });
        this.appConfig.isSearchRoute.subscribe(function (searchRoute) {
            _this.isSearchRoute.emit(searchRoute);
        });
    };
    SearchResultsComponent.prototype.registerSubscriber = function () {
        var _this = this;
        this.sub = this.accountService.SearchTerm.subscribe(function (term) {
            console.log(term);
            if (term.length > 0) {
                _this.search = term;
                var p = { term: _this.search, foundList: _this.foundList };
                _this.searchTerm$.next(p);
                _this.accountService.isLoading.next(true);
            }
        });
    };
    SearchResultsComponent.prototype.setNewAccount = function (account) {
        this.appConfig.setCurrentAccount(account);
    };
    SearchResultsComponent.prototype.updateCurrentAccount = function (index) {
        var account = this.accounts[index];
        this.appConfig.setCurrentAccount(account, true);
    };
    SearchResultsComponent.prototype.closeInstance = function () {
        this.accounts = [];
        this.search = '';
    };
    SearchResultsComponent.prototype.searchForUser = function () {
        var _this = this;
        if (this.search.length > 0) {
            this.loading = true;
        }
        this.http_sub = this.accountService.search(this.searchTerm$).subscribe(function (name) {
            var data = _this.accounts.concat(name.data);
            data = _this.arrayUnique(data);
            _this.accounts = data;
            _this.searchTerm = name.term;
            _this.message = name.message;
            _this.loading = false;
            _this.accountService.isLoading.next(false);
        });
    };
    SearchResultsComponent.prototype.arrayUnique = function (array) {
        var a = array.concat();
        for (var i = 0; i < a.length; ++i) {
            for (var j = i + 1; j < a.length; ++j) {
                if (a[i].accountId === a[j].accountId) {
                    a.splice(j--, 1);
                }
            }
        }
        return this.setMatches(a);
    };
    SearchResultsComponent.prototype.setMatches = function (accounts) {
        for (var j = 0; j < accounts.length; j++) {
            var acct = accounts[j];
            this.foundList = this.foundList.concat(acct.accountId);
            var search = this.search;
            var push = [];
            if (search.length > 0 && acct.name.length > 0) {
                var numMatches = 0;
                var id = acct.accountId;
                var acctName = acct.name.toLowerCase().replace(' ', '').toString();
                search = search.toLowerCase().replace(' ', '').toString();
                if (id.includes(search) || acctName.includes(search)) {
                    acct.isMatch = 1;
                    acct.idIndex = id.indexOf(search) * -1;
                    acct.acctIndex = acctName.indexOf(search) * -1;
                    if (acct.idIndex === 1) {
                        acct.idIndex *= -10;
                    }
                    else if (acct.acctIndex === 1) {
                        acct.acctIndex *= -10;
                    }
                }
                else {
                    acct.isMatch = 0;
                    acct.idIndex = -100;
                    acct.acctIndex = -100;
                }
                acct.sum = this.sumIndex(acct);
            }
        }
        return accounts;
    };
    SearchResultsComponent.prototype.sumIndex = function (a) {
        return a.isMatch + a.idIndex + a.acctIndex;
    };
    SearchResultsComponent.prototype.getLargest = function (data) {
        data.sort(function (a, b) {
            if (a.sum < b.sum) {
                return 1;
            }
            else if (a.sum > b.sum) {
                return -1;
            }
            else {
                return 0;
            }
        });
        return data;
    };
    SearchResultsComponent.prototype.closeSearch = function () {
        this.searchParam.emit('');
        this.accounts = [];
        this.search = '';
    };
    SearchResultsComponent.prototype.formatRequest = function (data) {
        console.log(data);
    };
    SearchResultsComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.http_sub.unsubscribe();
        this.route_sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["x" /* EventEmitter */])
    ], SearchResultsComponent.prototype, "isSearchRoute", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["R" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__angular_core__["x" /* EventEmitter */])
    ], SearchResultsComponent.prototype, "searchParam", void 0);
    SearchResultsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
            selector: 'app-search-results',
            template: __webpack_require__("./src/app/search/search-results/search-results.component.html"),
            styles: [__webpack_require__("./src/app/search/search-results/search-results.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3_app_services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_4__app_config__["a" /* AppConfig */]])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/shared/feed.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Feed; });
var Feed = (function () {
    function Feed(name, amount) {
        this.name = name;
        this.amount = amount;
    }
    return Feed;
}());



/***/ }),

/***/ "./src/app/shared/mat.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MatModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MatModule = (function () {
    function MatModule() {
    }
    MatModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["K" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDividerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatProgressBarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatTabsModule */]],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["q" /* MatSliderModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["m" /* MatProgressSpinnerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["c" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["p" /* MatSlideToggleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["r" /* MatSnackBarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["n" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["j" /* MatListModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["k" /* MatPaginatorModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["b" /* MatButtonToggleModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["u" /* MatToolbarModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["o" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["v" /* MatTooltipModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDividerModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["s" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["i" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["g" /* MatExpansionModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["e" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["t" /* MatTabsModule */], __WEBPACK_IMPORTED_MODULE_1__angular_material__["l" /* MatProgressBarModule */]]
        })
    ], MatModule);
    return MatModule;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports) {

module.exports = ".menuContainer {\n  overflow: auto;\n  overflow-x: hidden;\n  font-size: 12px;\n  font-weight: 200;\n  position: fixed;\n  top: 0px;\n  height: 100%;\n}\n\n\n/*.menuContainer.out {\n    width:300px;\n}\n.menuContainer.in {\n    width:70px;\n}*/\n\n\n.menuContainer .navbar.collapse.in .brand,\n.menuContainer .navbar.collapse.in .menu-list {\n  display: none;\n}\n\n\n.menuContainer .navbar.collapse.in {\n  width: auto;\n}\n\n\n.menuContainer .brand {\n  line-height: 50px;\n  display: block;\n  text-align: center;\n  font-size: 12px;\n  padding: 2px 15px;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.2);\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-transform: uppercase;\n}\n\n\n.menuContainer .brand:hover a {\n  text-decoration: none;\n  color: #FFF;\n}\n\n\n.hvr-underline-from-center:before {\n  background: #FFF;\n}\n\n\n.nav-side-menu .navbar-collapse.collapse.in .brand,\n.nav-side-menu .navbar-collapse.collapse.in .menu-list {\n  display: none;\n}\n\n\n/*.nav-side-menu .navbar-collapse.collapse.in { width:auto;}*/\n\n\n.navbar-toggle {\n  display: inline-block !important;\n  margin: 0 auto;\n  float: right;\n  padding: 10px;\n}\n\n\n.nav-side-menu ul,\n.nav-side-menu li {\n  list-style: none;\n  padding: 0px;\n  margin: 0px;\n  line-height: 35px;\n  cursor: pointer;\n}\n\n\n.nav-side-menu ul :not(collapsed) .arrow:before,\n.nav-side-menu li :not(collapsed) .arrow:before {\n  font-family: FontAwesome;\n  content: \"\\f078\";\n  display: inline-block;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle;\n  float: right;\n}\n\n\n.nav-side-menu ul .active,\n.nav-side-menu li .active {\n  background-color: transparent;\n}\n\n\n.nav-side-menu ul .sub-menu li.active,\n.nav-side-menu li .sub-menu li.active {\n  color: #d19b3d;\n}\n\n\n.nav-side-menu ul .sub-menu li.active a,\n.nav-side-menu li .sub-menu li.active a {\n  color: #d19b3d;\n}\n\n\n.nav-side-menu ul .sub-menu li,\n.nav-side-menu li .sub-menu li {\n  background-color: transparent;\n  border: none;\n  line-height: 28px;\n  border-bottom: 1px solid #23282e;\n  margin-left: 0px;\n}\n\n\n.nav-side-menu ul .sub-menu li:before,\n.nav-side-menu li .sub-menu li:before {\n  font-family: FontAwesome;\n  content: \"\\f105\";\n  display: inline-block;\n  padding-left: 10px;\n  padding-right: 10px;\n  vertical-align: middle;\n}\n\n\n.nav-side-menu li {\n  padding-left: 0px;\n}\n\n\n/*.nav-side-menu li a {\n  text-decoration: none;\n  color: #e1ffff;\n}*/\n\n\n.nav-side-menu li a i {\n  padding-left: 10px;\n  width: 20px;\n  padding-right: 20px;\n  border: none;\n  border-radius: 0;\n}\n\n\n.nav-side-menu .panel.card.panel-default {\n  border-radius: 0;\n  border: none;\n  background-color: transparent;\n}\n\n\n.nav-side-menu li a {\n  font-size: 15px;\n}\n\n\n.nav-side-menu li:hover {\n  background-color: #eee;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n}\n\n\n.nav-side-menu li a:hover {\n  text-decoration: none;\n}\n\n\nbody {\n  margin: 0px;\n  padding: 0px;\n}\n\n\n.accordianUnderText a.accordionLink {\n  color: #000;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n\n.accordianUnderText li a {\n  font-size: 12px;\n}\n\n\n.panel .panel-body {\n  padding: 0;\n}\n\n\n.bugSubmitLink,\n.issueTracker,\n.dashboardLink {\n  color: #333;\n  background-color: transparent;\n  border-color: #ddd;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n  color: #FFF;\n}\n\n\n.dashboardLink:hover,\n.nav-side-menu .panel:hover,\n.bugSubmitLink:hover,\n.issueTracker:hover {\n  background-color: transparent;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n}\n\n\n.nav-side-menu .panel {\n  background-color: transparent;\n}\n\n\n.card.navPanelItem,\n.card.navPanelItem .card-header,\n.panel.navPanelItem {\n  background-color: transparent;\n  color: #fff;\n}\n\n\n.panel.navPanelItem .panel-body {\n  background-color: #337aa7;\n}\n\n\n.out .panel-title .navTitle {\n  margin-left: 20px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n\n/*.nav-side-menu .brand {\n    font-size:26px;\n}*/\n\n\n/*.nav-side-menu .brand {\n    border-bottom: 2px solid #DE795B;\n    border-top: 2px solid #DE795B;\n}*/\n\n\n.nav-side-menu .brand a.dashTitle {\n  font-size: 20px;\n  color: #5bc0de;\n  position: relative;\n  top: 2px;\n  font-weight: bold;\n}\n\n\n.nav-side-menu .brand a.dashTitle:hover {\n  text-decoration: none;\n}\n\n\n.nav-side-menu .brand {\n  line-height: 47px;\n}\n\n\n.nav-side-menu {\n  z-index: 10;\n}\n\n\n[class^=\"hvr-icon\"] {\n  display: block;\n  height: 100%;\n}\n\n\n/* Hide SDEV and IST logos when the sidebar collapses to top */\n\n\n@media (max-width: 767px) {\n  .navbar-collapse.in {\n    overflow-y: hidden;\n  }\n}\n\n\n#nav-icon1,\n#nav-icon2,\n#nav-icon3,\n#nav-icon4 {\n  width: 60px;\n  height: 45px;\n  position: relative;\n  margin: 0px auto;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: .3s ease-in-out;\n  transition: .3s ease-in-out;\n  cursor: pointer;\n}\n\n\n#nav-icon2 span {\n  display: block;\n  position: absolute;\n  height: 4px;\n  width: 50%;\n  background: #fff;\n  opacity: .5;\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n  -webkit-transition: .20s ease-in-out;\n  transition: .20s ease-in-out;\n}\n\n\n.out #nav-icon2 span {\n  width: 33%;\n}\n\n\n#nav-icon2 span:nth-child(even) {\n  left: 50%;\n  border-radius: 0 9px 9px 0;\n}\n\n\n#nav-icon2 span:nth-child(odd) {\n  left: 0px;\n  border-radius: 9px 0 0 9px;\n}\n\n\n#nav-icon2 span:nth-child(1),\n#nav-icon2 span:nth-child(2) {\n  top: 0px;\n}\n\n\n#nav-icon2 span:nth-child(3),\n#nav-icon2 span:nth-child(4) {\n  top: 9px;\n}\n\n\n#nav-icon2 span:nth-child(5),\n#nav-icon2 span:nth-child(6) {\n  top: 18px;\n}\n\n\n#nav-icon2.open span:nth-child(1),\n#nav-icon2.open span:nth-child(6) {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n\n#nav-icon2.open span:nth-child(2),\n#nav-icon2.open span:nth-child(5) {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n\n\n#nav-icon2.open span:nth-child(1) {\n  left: 5px;\n  top: 9px;\n}\n\n\n#nav-icon2.open span:nth-child(2) {\n  left: calc(50% - 5px);\n  top: 9px;\n}\n\n\n#nav-icon2.open span:nth-child(3) {\n  left: -50%;\n  opacity: 0;\n}\n\n\n#nav-icon2.open span:nth-child(4) {\n  left: 100%;\n  opacity: 0;\n}\n\n\n#nav-icon2.open span:nth-child(5) {\n  left: 5px;\n  top: 19px;\n}\n\n\n#nav-icon2.open span:nth-child(6) {\n  left: calc(50% - 5px);\n  top: 19px;\n}\n\n\n.out #nav-icon2.open {\n  margin: 0;\n  position: absolute;\n  width: 40px;\n}\n\n\n.navbar-collapse #nav-icon2 {\n  top: 12px;\n  width: 140px;\n}\n\n\n#nav-icon2:hover span {\n  background: #5bc0de;\n  opacity: 1;\n}\n\n\n.navbar-collapse.out #nav-icon2 {\n  top: 13px;\n  right: -27px;\n}\n\n\n.navbar-collapse:not(.out) #nav-icon2 {\n  top: 15px;\n  left: 22px;\n}\n\n\n.nav-side-menu .navTitle {\n  position: relative;\n}\n\n\n.nav-side-menu .dashboardLink .navTitle {\n  left: 0px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n\n.nav-side-menu .navTitle2 {\n  left: 8px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n\n.nav-side-menu .navTitle3 {\n  left: 12px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n\n.nav-side-menu .navTitle4 {\n  left: 12px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n}\n\n\n.nav-side-menu .panel:hover,\n.card.navPanelItem .card-header:hover {\n  cursor: pointer;\n}\n\n\n.bugSubmitLink .navTitle {\n  position: relative;\n  left: 0px;\n}\n\n\n.navTitle.navTitle1 {\n  position: relative;\n  left: 0px;\n}\n\n\n.collapse.navbar-collapse.out .menu-list .panel.card.navPanelItem {\n  border: none;\n}\n\n\n@media (max-width: 767px) {\n  .nav-side-menu {\n    position: relative;\n    width: 100%;\n    margin-bottom: 10px;\n  }\n  .navbar-collapse #nav-icon2 {\n    top: 15px;\n  }\n  .nav-side-menu .toggle-btn {\n    display: block;\n    cursor: pointer;\n    float: right;\n    z-index: 10 !important;\n    padding: 3px;\n    margin: 5px;\n    width: 40px;\n    text-align: center;\n  }\n  .nav-side-menu .navbar-collapse.collapse.in {\n  }\n  .nav-side-menu .navbar-collapse.collapse.in .brand {\n    display: inline-block;\n    text-align: left !important;\n    font-size: 22px;\n    padding-left: 0;\n    line-height: 50px !important;\n  }\n}\n\n\n@media (min-width: 767px) {\n  .nav-side-menu .menu-list .menu-content {\n    display: block;\n  }\n  .nav-side-menu .navbar-collapse.collapse {\n    width: 300px;\n  }\n  #main {\n    width: calc(100% - 300px);\n    float: right;\n  }\n}\n\n\n.nav-side-menu li a {\n  display: block;\n}\n\n\n.nav-side-menu .panel-title .accordion-toggle .accordion-heading {\n  display: block;\n}\n\n\n.hvr-icon-hang,\n.hvr-icon-bob {\n  display: block;\n}\n\n\n@media (max-width: 767px) {\n  .menuContainer {\n    position: relative;\n    margin-bottom: 10px;\n  }\n  .navbar #nav-icon2 {\n    top: 15px;\n  }\n  .menuContainer .toggle-btn {\n    display: block;\n    cursor: pointer;\n    float: right;\n    z-index: 10 !important;\n    padding: 3px;\n    margin: 5px;\n    width: 40px;\n    text-align: center;\n  }\n  .menuContainer .navbar.collapse.in {\n  }\n  .menuContainer .navbar.collapse.in .brand {\n    display: block;\n    text-align: left !important;\n    font-size: 22px;\n    padding-left: 0;\n    line-height: 50px !important;\n  }\n}\n\n\n@media (max-width: 987px) {\n  /*.menuContainer {\n        display: none;\n    }*/\n}\n\n\n.nav.menu-list p {\n  font-weight: 600;\n  text-transform: uppercase;\n  color: #FFF;\n}\n\n\n.nav>li>a {\n  text-align: center;\n}\n\n\n.nav li>a {\n  color: #FFFFFF;\n  margin: 5px 15px;\n  border-radius: 6px;\n}\n\n\n.nav>li>a:hover {\n  background-color: none;\n}\n\n\n.nav>li>a p {\n  margin-bottom: 0;\n}\n\n\n.nav li:hover,\n.nav li:active {\n  background-color: #f3834e;\n  -webkit-transition: all 1s ease;\n  transition: all 1s ease;\n  border-radius: 3px;\n}\n\n\n/*.menuContainer.out .navbar.collapse {\n    display: block;\n}*/\n\n\n#nav-icon2.closed {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n}\n\n\n.collapse.navbar.itemContainer,\n.nav.menu-list {\n  height: 90%;\n}\n\n\n.nav.menu-list li {\n  padding-left: 10px;\n  padding-right: 0px;\n  display: block;\n}\n\n\n/*.menuContainer.in {\n    width:70px;\n}*/\n\n\n.menuContainer.in .collapse.navbar.itemContainer {\n  display: block;\n}\n\n\n.menuContainer.navbar-collapse.in .brand,\n.menuContainer.in .collapse.navbar.itemContainer .nav.menu-list li {\n  display: none;\n}\n\n\n.menuContainer.in .collapse.navbar.itemContainer #nav-icon2 {\n  top: 17px;\n  left: 0;\n}\n\n\n.menuContainer.in .collapse.navbar.itemContainer .nav.menu-list .versionNumber {\n  display: block;\n  left: 20%;\n}\n\n\n.menuContainer.in .collapse.navbar.itemContainer .nav.menu-list .versionNumber p {\n  font-size: 10px;\n}\n\n\n.collapse.navbar.itemContainer.block {\n  display: block;\n}\n\n\n.menuContainer {\n  z-index: 10;\n}\n\n\n.nav-side-menu {\n  overflow: auto;\n  overflow-x: hidden;\n  font-size: 12px;\n  font-weight: 200;\n  position: fixed;\n  top: 0;\n  height: 100%;\n}\n\n\n.menuContainer {\n  overflow: auto;\n  overflow-x: visible;\n  font-size: 12px;\n  font-weight: 200;\n  position: fixed;\n  top: 0;\n  height: 100%;\n}\n\n\n.nav-side-menu.in .menu-list {\n  display: none;\n}\n\n\n.menuContainer.out .nav.menu-list {\n  width: 100%;\n}\n\n\n.menuContainer.navbar-collapse.nav-side-menu.in {\n  overflow-y: hidden;\n  overflow-x: visible;\n  width: 85px;\n}\n\n\n.hvr-icon-hang:before,\n.hvr-icon-bob:before {\n  right: -.5em !important;\n}\n\n\n.navTitle.navTitle4 {\n  margin-left: 2px !important;\n}\n\n\n.menu-list .panel-group {\n  margin-bottom: 0;\n}\n\n\n.verticalText {\n  color: #5bc0de;\n  font-size: 16px;\n  font-weight: bold;\n  position: absolute;\n  top: 20%;\n  left: 33%;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-transform: uppercase;\n  text-align: center;\n}\n\n\n.versionNumber2 {\n  display: block;\n  position: absolute;\n  bottom: 5%;\n  color: #5bc0de;\n  font-weight: bold;\n  left: 44%;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  text-transform: uppercase;\n  font-size: 22px;\n}\n\n\n.panel-group .panel+.panel {\n  margin-top: 0;\n}\n\n\n/* Icon Bob */\n\n\n@-webkit-keyframes hvr-icon-bob {\n  0% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n  50% {\n    -webkit-transform: translateY(-2px);\n    transform: translateY(-2px);\n  }\n  100% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n}\n\n\n@keyframes hvr-icon-bob {\n  0% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n  50% {\n    -webkit-transform: translateY(-2px);\n    transform: translateY(-2px);\n  }\n  100% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n}\n\n\n@-webkit-keyframes hvr-icon-bob-float {\n  100% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n}\n\n\n@keyframes hvr-icon-bob-float {\n  100% {\n    -webkit-transform: translateY(-6px);\n    transform: translateY(-6px);\n  }\n}\n\n\n.hvr-icon-bob {\n  display: inline-block;\n  /* vertical-align: middle; */\n  -webkit-transform: perspective(1px) translateZ(0);\n  transform: perspective(1px) translateZ(0);\n  -webkit-box-shadow: 0 0 1px transparent;\n          box-shadow: 0 0 1px transparent;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n\n\n.hvr-icon-bob:before {\n  content: \"\\f077\";\n  position: absolute;\n  right: .5em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n\n\n.hvr-icon-bob:hover:before,\n.hvr-icon-bob:focus:before,\n.hvr-icon-bob:active:before {\n  -webkit-animation-name: hvr-icon-bob-float, hvr-icon-bob;\n  animation-name: hvr-icon-bob-float, hvr-icon-bob;\n  -webkit-animation-duration: .3s, 1.5s;\n  animation-duration: .3s, 1.5s;\n  -webkit-animation-delay: 0s, .3s;\n  animation-delay: 0s, .3s;\n  -webkit-animation-timing-function: ease-out, ease-in-out;\n  animation-timing-function: ease-out, ease-in-out;\n  -webkit-animation-iteration-count: 1, infinite;\n  animation-iteration-count: 1, infinite;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-direction: normal, alternate;\n  animation-direction: normal, alternate;\n}\n\n\n/* Icon Hang */\n\n\n@-webkit-keyframes hvr-icon-hang {\n  0% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n  50% {\n    -webkit-transform: translateY(2px);\n    transform: translateY(2px);\n  }\n  100% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n}\n\n\n@keyframes hvr-icon-hang {\n  0% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n  50% {\n    -webkit-transform: translateY(2px);\n    transform: translateY(2px);\n  }\n  100% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n}\n\n\n@-webkit-keyframes hvr-icon-hang-sink {\n  100% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n}\n\n\n@keyframes hvr-icon-hang-sink {\n  100% {\n    -webkit-transform: translateY(6px);\n    transform: translateY(6px);\n  }\n}\n\n\n.hvr-icon-hang {\n  display: inline-block;\n  /* vertical-align: middle; */\n  -webkit-transform: perspective(1px) translateZ(0);\n  transform: perspective(1px) translateZ(0);\n  -webkit-box-shadow: 0 0 1px transparent;\n          box-shadow: 0 0 1px transparent;\n  position: relative;\n  padding-right: 2.2em;\n  -webkit-transition-duration: 0.3s;\n  transition-duration: 0.3s;\n}\n\n\n.hvr-icon-hang:before {\n  content: \"\\f078\";\n  position: absolute;\n  right: .5em;\n  padding: 0 1px;\n  font-family: FontAwesome;\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n\n\n.hvr-icon-hang:hover:before,\n.hvr-icon-hang:focus:before,\n.hvr-icon-hang:active:before {\n  -webkit-animation-name: hvr-icon-hang-sink, hvr-icon-hang;\n  animation-name: hvr-icon-hang-sink, hvr-icon-hang;\n  -webkit-animation-duration: .3s, 1.5s;\n  animation-duration: .3s, 1.5s;\n  -webkit-animation-delay: 0s, .3s;\n  animation-delay: 0s, .3s;\n  -webkit-animation-timing-function: ease-out, ease-in-out;\n  animation-timing-function: ease-out, ease-in-out;\n  -webkit-animation-iteration-count: 1, infinite;\n  animation-iteration-count: 1, infinite;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards;\n  -webkit-animation-direction: normal, alternate;\n  animation-direction: normal, alternate;\n}\n\n\n.navPanelItem.feeds .hvr-icon-bob:before,\n.navPanelItem.feeds .hvr-icon-hang:before {\n  right: 1em;\n}\n\n\n.navPanelItem.quickLinks .hvr-icon-bob:before,\n.navPanelItem.quickLinks .hvr-icon-hang:before {\n  right: 10px;\n}\n\n\n.navPanelItem.oemLinks .hvr-icon-bob:before,\n.navPanelItem.oemLinks .hvr-icon-hang:before {\n  right: 10px;\n}\n\n\n.collapsed {\n      width: 85px;\n      text-align: center;\n}\n\n\n.collapsed i {\n  font-size: 36px;\n  display: block !important;\n  clear: both;\n}\n\n\n#nav-icon2 i {\n  font-size: 36px;\n}\n\n\nbody .nav-side-menu {\n  background: transparent;\n}\n\n\n.title,\n.nav_wrap {\n  -webkit-transition: width ease .25s;\n  transition: width ease .25s;\n}\n\n\n.title .inline {\n     padding: 5px;\n     line-height: 27px;\n}\n\n\n.title #nav-icon2 {\n  width: 85px;\n  position: absolute;\n  height: 60px;\n  border: 0px !important;\n  top: 11px;\n  left:0;\n}\n\n\n.title-wrap {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n  height: 60px;\n}\n\n\n.brand.inline {\n  position: absolute;\n  left: 85px;\n  width: 150px;\n}\n\n\n.title i {\n  display: block;\n}\n\n\n.collapsed {\n  margin-top: 15px;\n}\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"title\" [style.width.px]=\"width\">\n  <div class=\"title-wrap\">\n    <h4 class=\"brand inline hvr-underline-reveal\">\n      <img [@enterAnimation] class=\"dashTitle\" [routerLink]=\"['']\" src=\"https://i.imgur.com/sZIRaw5.png\"/>\n    </h4>\n    <div id=\"nav-icon2\" [ngClass]=\"{ 'closed': isIn, 'open': !isIn }\" (click)=\"toggleState()\">\n      <div class=\"white\">\n        <i class=\"fa\" [ngClass]=\"{ 'fa-times-circle': !isIn, 'fa-bars': isIn }\"></i>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"nav_wrap\" [style.width.px]=\"width\" [style.height.px]=\"height\"></div>\n<div class=\"menuContainer navbar-collapse nav-side-menu\" [ngClass]=\"{ 'in': isIn, 'out': !isIn }\">\n  <div class=\"collapse navbar itemContainer\" [ngClass]=\"{ 'block': block, 'notBlock': !block }\">\n    <div *ngIf=\"block\" [@enterAnimation] class=\"menu-list\">\n      <accordion>\n        <a panelClass=\"navPanelItem\" [routerLink]=\"['search']\">\n          <div class=\"panel-title\">\n            <i class=\"fa fa-user fa-lg\"></i>\n            <span class=\"navTitle navTitle1\">Dealer Search</span>\n          </div>\n        </a>\n        <accordion-group panelClass=\"navPanelItem feeds\" #group2>\n          <div accordion-heading [ngClass]=\"{'hvr-icon-bob feeds': group2?.isOpen, 'hvr-icon-hang feeds': !group2?.isOpen}\">\n            <i class=\"fa fa-car fa-lg\"></i>\n            <span class=\"navTitle navTitle2\">Feeds</span>\n          </div>\n          <ul class=\"accordianUnderText\">\n            <li>\n              <a class=\"accordionLink\" [routerLink]=\"['/currentfeeds']\">Currently Running</a>\n            </li>\n          </ul>\n        </accordion-group>\n        <accordion-group panelClass=\"navPanelItem quickLinks\" #group3>\n          <div accordion-heading [ngClass]=\"{'hvr-icon-bob quickLinks': group3?.isOpen, 'hvr-icon-hang quickLinks': !group3?.isOpen}\">\n            <i class=\"fa fa-link fa-lg\"></i>\n            <span class=\"navTitle navTitle3\">Quick Links </span>\n          </div>\n          <ul class=\"accordianUnderText\">\n            <li *ngFor=\"let link of links\">\n              <a href=\"{{link.href}}\" target=\"_blank\" class=\"{{link.name}}\">{{link.name}}</a>\n            </li>\n          </ul>\n        </accordion-group>\n        <accordion-group panelClass=\"navPanelItem oemPages\" #group4>\n          <div [ngClass]=\"{'hvr-icon-bob oemPages': group4?.isOpen, 'hvr-icon-hang oemPages': !group4?.isOpen}\" accordion-heading>\n            <i class=\"fa fa-users fa-lg\"></i>\n            <span class=\"navTitle navTitle4\">OEM Pages </span>\n          </div>\n          <ul class=\"accordianUnderText\">\n            <li *ngFor=\"let oemlink of oemlinks\">\n              <a href=\"{{oemlink.href}}\" target=\"_blank\" class=\"{{oemlink.name}}\">{{oemlink.name}}</a>\n            </li>\n          </ul>\n        </accordion-group>\n      </accordion>\n      <a panelClass=\"navPanelItem\" [routerLink]=\"['/submitbug']\">\n        <div class=\"bugSubmitLink panel-title\">\n          <i class=\"fa fa-bug fa-lg\"></i>\n          <span class=\"navTitle navTitle1\">Submit Bug</span>\n        </div>\n      </a>\n      <a panelClass=\"navPanelItem\" [routerLink]=\"['/issuetracker']\">\n        <div class=\"issueTracker panel-title\">\n          <i class=\"fa fa-list-alt fa-lg\"></i>\n          <span class=\"navTitle navTitle1\">Issue Tracker</span>\n        </div>\n      </a>\n    </div>\n      <div *ngIf=\"!block\" class=\"collapsed\" [@enterAnimation]>\n        <a panelClass=\"navPanelItem\" [routerLink]=\"['search']\">\n          <div class=\"dashboardLink panel-title\">\n            <i class=\"fa fa-user fa-lg\"></i>\n            <span class=\"navTitle navTitle1\">Dealer Search</span>\n          </div>\n        </a>\n        <a panelClass=\"navPanelItem\" [routerLink]=\"['/submitbug']\">\n          <div class=\"bugSubmitLink panel-title\">\n            <i class=\"fa fa-bug fa-lg\"></i>\n            <span class=\"navTitle navTitle1\">Submit Bug</span>\n          </div>\n        </a>\n        <a panelClass=\"navPanelItem\" [routerLink]=\"['/issuetracker']\">\n          <div class=\"issueTracker panel-title\">\n            <i class=\"fa fa-list-alt fa-lg\"></i>\n            <span class=\"navTitle navTitle1\">Issue Tracker</span>\n          </div>\n        </a>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_config__ = __webpack_require__("./src/app/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidebarComponent = (function () {
    function SidebarComponent(router, appConfig) {
        this.appConfig = appConfig;
        this.links = [
            { name: 'Feed Queuer', href: 'http://influxtools.dealer.com/feed-queuer/index.html' },
            { name: 'Influx Archiver', href: 'http://influxtools.dealer.com/cgi-bin/feed_archives.cgi' },
            { name: 'CSE/FCA File Viewer', href: 'http://influxtools.dealer.com/cse_viewer/index.htm' },
            { name: 'Raw RyanTech Viewer', href: 'http://influxtools.dealer.com/ryantech-file-viewer/index.htm' },
            { name: 'Subaru Feed Viewer', href: 'http://influxtools.dealer.com//subaru-file-viewer/index.htm' },
            { name: 'Trader TDSR Inventory', href: 'http://influxtools.dealer.com//trader-file-viewer/index.htm' },
            { name: 'Trader History Viewer', href: 'http://influxtools.dealer.com//trader-log-viewer/index.htm' },
            { name: 'Export Viewer', href: 'http://influxtools.dealer.com//cgi-bin/export.cgi' },
            { name: 'DealerSpecialties Image Viewer', href: 'http://influxtools.dealer.com//getauto-images/index.htm' },
            { name: 'Image URL Splitter', href: 'http://influxtools.dealer.com//image_splitter/image_splitter.htm' },
            { name: 'JMP Queue Viewer', href: 'http://influxtools.dealer.com//cgi-bin/jmp.cgi' },
            { name: 'Import Provider Info', href: 'https://docs.dealer.com/display/PRODUCTS/Inventory+Integrations+List' },
            { name: 'Export Provider Info', href: 'https://docs.dealer.com/display/PRODUCTS/Inventory+Exports+List' },
            { name: 'CCI File Viewer', href: 'http://influxtools.dealer.com//cci-file-viewer/index.htm' },
            { name: 'Incentivized Dealer List', href: 'http://influxtools.dealer.com/cgi-bin/incentivized_dealerlist.cgi' },
            { name: 'Add New Export', href: 'http://influxtools.dealer.com//cgi-bin/export_new.cgi' },
            { name: 'DEV Syndicated Exports', href: 'http://wcinventoryfeeds1.dealer.ddc/InventoryFeeds/exports' },
            { name: 'JMP Influx Exceptions', href: 'http://influxtools.dealer.com//cgi-bin/jmp_influx_exceptions.cgi' },
            { name: 'FCA Select Vehicles File', href: 'http://influxtools.dealer.com/cgi-bin/fca_select_vehicles.cgi' }
        ];
        this.oemlinks = [
            { name: 'Acura (ADW)', href: 'https://docs.dealer.com/display/IST/Acura+(ADW)' },
            { name: 'Audi (AOA)', href: 'https://docs.dealer.com/display/IST/Audi+%28AOA%29' },
            { name: 'BMW', href: 'https://docs.dealer.com/display/IST/BMW' },
            { name: 'Chrysler Canada (CCI)', href: 'https://docs.dealer.com/display/IST/Chrysler+Canada+%28CCI%29' },
            { name: 'Fiat Chrysler Auto (FCA)', href: 'https://docs.dealer.com/display/IST/Fiat+Chrysler+Automobiles+%28FCA%29' },
            { name: 'Ford Direct (FD)', href: 'https://docs.dealer.com/display/IST/Ford+Direct+%28FD%29' },
            { name: 'Genesis', href: 'https://docs.dealer.com/display/IST/Genesis' },
            { name: 'Jaguar & Land Rover (JLR)', href: 'https://docs.dealer.com/pages/viewpage.action?pageId=137429688' },
            { name: 'Lexus', href: 'https://docs.dealer.com/display/IST/Lexus' },
            { name: 'Mercedes-Benz (MB)', href: 'https://docs.dealer.com/display/IST/Mercedes-Benz' },
            { name: 'Subaru of America (SOA)', href: 'https://docs.dealer.com/display/IST/Subaru+of+America+%28SOA%29' },
            { name: 'Subaru of New England (SNE)', href: 'https://docs.dealer.com/display/IST/Subaru+of+New+England+%28SNE%29' },
            { name: 'Volkswagen (VW)', href: 'https://docs.dealer.com/display/IST/Volkswagen+%28VW%29' },
            { name: 'Volvo (VCNA)', href: 'https://docs.dealer.com/display/IST/Volvo+%28VCNA%29' }
        ];
        this.state = 'menuIn';
        this.block = true;
        this.hamburgerSlide = 'in';
        this.NotHotDogSlide = 'out';
        this.width = 0;
        this.hideVerticalText = true;
        this.height = 0 + window.innerHeight;
        this.customClass = 'customClass';
        this.status = {
            isFirstOpen: true,
            isFirstDisabled: false
        };
        this.collapseSideBar = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isAccount = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.NotHotDog = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.isIn = false;
        // NotHotDog slider
        this.isNotHotDogIn = true; // store state
        this.toggleState();
    }
    SidebarComponent.prototype.getAccountChange = function (data) { };
    SidebarComponent.prototype.toggleState = function () {
        var _this = this;
        var bool = this.isIn;
        if (!bool) {
            this.width = 85;
            this.block = false;
        }
        else {
            this.width = 255;
        }
        this.isIn = bool === false ? true : false;
        this.collapseSideBar.emit(bool);
        this.appConfig.toggleState.next(bool);
        this.hamburgerSlide == 'out' ? this.hamburgerSlide = 'in' : this.hamburgerSlide = 'out';
        /* this is to delay setting menu items to display:block to allow the sliding animation to work */
        if (!this.isIn) {
            this.hideVerticalText = true;
            setTimeout(function () {
                _this.block = true;
            }, 250);
        }
        else {
            this.hideVerticalText = false;
            setTimeout(function () {
                _this.block = false;
            }, 250);
        }
    };
    SidebarComponent.prototype.notHotDogToggle = function () {
        var nothotdogbool = this.isNotHotDogIn;
        this.isNotHotDogIn = nothotdogbool === false ? true : false;
        this.NotHotDog.emit(nothotdogbool);
        this.NotHotDogSlide == 'out' ? this.NotHotDogSlide = 'in' : this.NotHotDogSlide = 'out';
    };
    SidebarComponent.prototype.ngOnInit = function () { };
    SidebarComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["R" /* Output */])(),
        __metadata("design:type", Object)
    ], SidebarComponent.prototype, "collapseSideBar", void 0);
    SidebarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sidebar',
            template: __webpack_require__("./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("./src/app/sidebar/sidebar.component.css")],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* trigger */])('hamburgerSlide', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* state */])('out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* style */])({
                        left: '197px'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* state */])('in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* style */])({
                        left: '0px'
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* transition */])('in => out', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('200ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* transition */])('out => in', Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])('100ms ease-out'))
                ]),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_28" /* trigger */])('enterAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_27" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* style */])({ opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* animate */])(400, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_26" /* style */])({ opacity: 1 }))
                    ]),
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* Router */], __WEBPACK_IMPORTED_MODULE_2__app_config__["a" /* AppConfig */]])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map