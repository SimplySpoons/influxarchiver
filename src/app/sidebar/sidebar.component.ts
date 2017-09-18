import { Component, OnInit, ElementRef, EventEmitter, Output, OnDestroy, trigger, state, style, transition, animate } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { AccordionModule, AccordionConfig } from 'ngx-bootstrap';
import { AccountService } from '../_services/account.service';
import { Account } from '../_models/account';

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
      // ]),
      // transition(':leave', [   // :leave is alias to '* => void'
      //   animate(1, style({ opacity: 0 }))
      // ])
  ]
})

@Component({
  selector: 'nothotdog',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit, OnDestroy {
  links: any[] = [
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
  oemlinks: any[] = [
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

  element: Element;
  sidebar_width: number;
  invCounts: any;
  sub: any;
  account: any;
  state = 'menuOut';
  block = true;
  hamburgerSlide = 'out';
  NotHotDogSlide = 'in';
  accountId: string;
  provider: string;
  currentRoute: any;
  hideVerticalText: boolean = true;

  constructor(router: Router) {
    router.events.subscribe((url: any) => {
      this.currentRoute = url.url;
      if (this.currentRoute.includes('/influx/')) {
        this.toggleState();
      }
    })
  }

  getAccountChange(data) {
    console.log(data);
  }

  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  public customClass: string = 'customClass';

  @Output()
  public collapseSideBar = new EventEmitter();
  public NotHotDog = new EventEmitter();


  // Slider menu
  isIn = false;   // store state
  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
    this.collapseSideBar.emit(bool);
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


  ngOnInit() {


  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
