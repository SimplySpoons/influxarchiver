import { Component, OnInit, ElementRef, EventEmitter, Output, OnDestroy, trigger, state, style, transition, animate } from '@angular/core';
import { Router, ActivatedRoute, RouterModule, NavigationEnd } from '@angular/router';
import { AccordionModule, AccordionConfig } from 'ngx-bootstrap';
import { AccountService } from '../_services/account.service';
import { Account } from '../_models/account';
import { AppConfig } from '../app.config';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('hamburgerSlide', [
      state('out', style({
        left: '197px'
      })),
      state('in', style({
        left: '0px'
      })),
      transition('in => out', animate('200ms ease-in')),
      transition('out => in', animate('100ms ease-out'))
    ]),
    trigger('enterAnimation', [
      transition(':enter', [   // :enter is alias to 'void => *'
        style({ opacity: 0 }),
        animate(400, style({ opacity: 1 }))
      ]),
    ])
  ]
})

export class SidebarComponent implements OnInit, OnDestroy {
  links: any[] = [
    { name: 'Feed Queuer', href: 'http://influxtools.XXXXX.com/feed-queuer/index.html' },
    { name: 'Influx Archiver', href: 'http://influxtools.XXXXX.com/cgi-bin/feed_archives.cgi' },
    { name: 'CSE/FCA File Viewer', href: 'http://influxtools.XXXXX.com/cse_viewer/index.htm' },
    { name: 'Raw RyanTech Viewer', href: 'http://influxtools.XXXXX.com/ryantech-file-viewer/index.htm' },
    { name: 'Subaru Feed Viewer', href: 'http://influxtools.XXXXX.com//subaru-file-viewer/index.htm' },
    { name: 'Trader TDSR Inventory', href: 'http://influxtools.XXXXX.com//trader-file-viewer/index.htm' },
    { name: 'Trader History Viewer', href: 'http://influxtools.XXXXX.com//trader-log-viewer/index.htm' },
    { name: 'Export Viewer', href: 'http://influxtools.XXXXX.com//cgi-bin/export.cgi' },
    { name: 'DealerSpecialties Image Viewer', href: 'http://influxtools.XXXXX.com//getauto-images/index.htm' },
    { name: 'Image URL Splitter', href: 'http://influxtools.XXXXX.com//image_splitter/image_splitter.htm' },
    { name: 'JMP Queue Viewer', href: 'http://influxtools.XXXXX.com//cgi-bin/jmp.cgi' },
    { name: 'Import Provider Info', href: 'https://docs.XXXXX.com/display/PRODUCTS/Inventory+Integrations+List' },
    { name: 'Export Provider Info', href: 'https://docs.XXXXX.com/display/PRODUCTS/Inventory+Exports+List' },
    { name: 'CCI File Viewer', href: 'http://influxtools.XXXXX.com//cci-file-viewer/index.htm' },
    { name: 'Incentivized Dealer List', href: 'http://influxtools.XXXXX.com/cgi-bin/incentivized_dealerlist.cgi' },
    { name: 'Add New Export', href: 'http://influxtools.XXXXX.com//cgi-bin/export_new.cgi' },
    { name: 'DEV Syndicated Exports', href: 'http://wcinventoryfeeds1.XXXXX.ddc/InventoryFeeds/exports' },
    { name: 'JMP Influx Exceptions', href: 'http://influxtools.XXXXX.com//cgi-bin/jmp_influx_exceptions.cgi' },
    { name: 'FCA Select Vehicles File', href: 'http://influxtools.XXXXX.com/cgi-bin/fca_select_vehicles.cgi' }
  ];
  oemlinks: any[] = [
    { name: 'Acura (ADW)', href: 'https://docs.XXXXX.com/display/IST/Acura+(ADW)' },
    { name: 'Audi (AOA)', href: 'https://docs.XXXXX.com/display/IST/Audi+%28AOA%29' },
    { name: 'BMW', href: 'https://docs.XXXXX.com/display/IST/BMW' },
    { name: 'Chrysler Canada (CCI)', href: 'https://docs.XXXXX.com/display/IST/Chrysler+Canada+%28CCI%29' },
    { name: 'Fiat Chrysler Auto (FCA)', href: 'https://docs.XXXXX.com/display/IST/Fiat+Chrysler+Automobiles+%28FCA%29' },
    { name: 'Ford Direct (FD)', href: 'https://docs.XXXXX.com/display/IST/Ford+Direct+%28FD%29' },
    { name: 'Genesis', href: 'https://docs.XXXXX.com/display/IST/Genesis' },
    { name: 'Jaguar & Land Rover (JLR)', href: 'https://docs.XXXXX.com/pages/viewpage.action?pageId=137429688' },
    { name: 'Lexus', href: 'https://docs.XXXXX.com/display/IST/Lexus' },
    { name: 'Mercedes-Benz (MB)', href: 'https://docs.XXXXX.com/display/IST/Mercedes-Benz' },
    { name: 'Subaru of America (SOA)', href: 'https://docs.XXXXX.com/display/IST/Subaru+of+America+%28SOA%29' },
    { name: 'Subaru of New England (SNE)', href: 'https://docs.XXXXX.com/display/IST/Subaru+of+New+England+%28SNE%29' },
    { name: 'Volkswagen (VW)', href: 'https://docs.XXXXX.com/display/IST/Volkswagen+%28VW%29' },
    { name: 'Volvo (VCNA)', href: 'https://docs.XXXXX.com/display/IST/Volvo+%28VCNA%29' }
  ];

  element: Element;
  sidebar_width: number;
  invCounts: any;
  sub: any;
  account: any;
  state = 'menuIn';
  block = true;
  hamburgerSlide = 'in';
  NotHotDogSlide = 'out';
  accountId: string;
  provider: string;
  width = 0;
  currentRoute: any;
  hideVerticalText = true;
  height = 0 + window.innerHeight;
  public customClass = 'customClass';
  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  @Output()
  public collapseSideBar = new EventEmitter();
  public isAccount = new EventEmitter();
  public NotHotDog = new EventEmitter();
  isIn = false;

  constructor(router: Router, private appConfig: AppConfig) {
    this.toggleState();
  }


  getAccountChange(data) { }

  toggleState() { // click handler
    let bool = this.isIn;
    if(!bool){
      this.width = 85;
      this.block = false;
    } else {
      this.width = 255;
    }
    this.isIn = bool === false ? true : false;
    this.collapseSideBar.emit(bool);
    this.appConfig.toggleState.next(bool);
    this.hamburgerSlide == 'out' ? this.hamburgerSlide = 'in' : this.hamburgerSlide = 'out';

    /* this is to delay setting menu items to display:block to allow the sliding animation to work */
    if (!this.isIn) {
      this.hideVerticalText = true;
      setTimeout(() => {
        this.block = true;
      }, 250);
    } else {
      this.hideVerticalText = false;
      setTimeout(() => {
        this.block = false;
      }, 250);
    }
  }

  // NotHotDog slider
  isNotHotDogIn = true;   // store state
  notHotDogToggle() { // click handler
    let nothotdogbool = this.isNotHotDogIn;
    this.isNotHotDogIn = nothotdogbool === false ? true : false;
    this.NotHotDog.emit(nothotdogbool);
    this.NotHotDogSlide == 'out' ? this.NotHotDogSlide = 'in' : this.NotHotDogSlide = 'out';
  }

  ngOnInit() { }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
