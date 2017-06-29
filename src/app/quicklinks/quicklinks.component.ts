import { Component, OnInit } from '@angular/core';
import { DropdownModule } from "ngx-dropdown";

@Component({
  selector: 'app-quicklinks',
  templateUrl: './quicklinks.component.html',
  styleUrls: ['./quicklinks.component.css']
})
export class QuicklinksComponent implements OnInit {
  /* this is the list of quick links that populate in the top bar dropdown */
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
  /* oem links that populate in the top bar dropdown */
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

  constructor() { }

  ngOnInit() {
  }

}
