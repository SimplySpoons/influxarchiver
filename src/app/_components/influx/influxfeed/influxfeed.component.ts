import { element } from 'protractor';
import { InfluxService } from './../influx-service';
import { slideInOutAnimation } from './../../../_animations/slide-in.animation';
import { Component, OnInit, OnDestroy, TemplateRef, Output, Input, AfterViewInit, ElementRef, ViewChild, EventEmitter } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable/src/components/datatable.component';
import { AccountService } from '../../../_services/account.service';
import { Account } from '../../../_models/account';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Rx';
import { influxVehicles } from './data';
declare var $;

import 'rxjs/add/operator/map';

@Component({
  selector: 'app-influxfeed',
  templateUrl: './influxfeed.component.html',
  styleUrls: ['./influxfeed.component.css'],
  animations: [slideInOutAnimation],
  // tslint:disable-next-line:use-host-property-decorator
  host: { '[@slideInOutAnimation]': '' }
})
export class InfluxfeedComponent implements OnInit, OnDestroy, AfterViewInit {
  @Output() sendItem = new EventEmitter();
  @ViewChild('tableInfo') tableInfo: any;
  tableHeight = 0;
  influxHeaders: any = [];
  influxHeadersCheckbox: any = [];
  requestUrl: string;
  pageSize = 0;
  influxVehicles: any = [];
  loadingAll = false;
  selectedInfluxVehicles: any = [];
  fileCache: any = []
  temp = [];
  tmp = [];
  feedLoading: boolean = false;
  provider = '';
  timestamp = '';
  filename = '';
  providerid = '';
  private sub: any;
  account: Account;
  accountId: string;
  showTable: boolean = false;
  headers: any = [];
  loadingIndicator: boolean = true;
  timeout: any;
  selected = [];
  testing: any = '';
  dtTrigger: Subject<any> = new Subject();
  files: any = [];
  archivedFile: any;
  vehiclesSelectedExpand: boolean = false;
  columnFiltersExpand: boolean = false;
  value;

  fileIndex = 0;

  callOnce = false;

  filesize = 0;

  offset = 0;

  parent_sub: any;
  file_sub: any;

  el: any;

  windowHeight = 0;


  ARCHIVED_FILE_SUB: Subject<string> = new Subject<string>();
  archived_sub: any;

  constructor(private accountService: AccountService,
    private route: ActivatedRoute, private router: Router,
    private element: ElementRef, private influx: InfluxService) {
    this.el = this.element.nativeElement;
    this.el.classList = "addShadow";
    this.sub = this.route.params.subscribe(params => {
      this.accountId = params['id'];
      this.provider = params['provider'];
      this.providerid = params['providerid'];
      this.timestamp = params['timestamp'];
      this.filename = params['filename'];
      console.log(this.filename);
      this.parent_sub = this.route.parent.parent.params.subscribe(parentParam => {
        this.accountId = parentParam['id'];
        this.accountService.getHeaders(this.provider).subscribe(headers => {
          this.influxHeaders = headers;
          this.influxHeadersCheckbox = this.influxHeaders;
          this.showTable = true;
          this.feedLoading = false;
          this.getArchivedFile();
        });
      })
    })
    this.files = this.influx.files;
    this.file_sub = this.influx.fileListSubject.subscribe(fileList => {
      this.files = fileList;
      if (this.influxVehicles.length === 0) {
        this.setRows();
      }
    });
  }

  routeBack() {
    this.router.navigate(['/account', this.accountId, 'influx'], { relativeTo: this.route.parent });
  }

  setRows() {
    if (this.files && this.files.length > 0) {
      this.archivedFile = this.files[0];
    }
  }

  getHeight() {
    return {
      height: this.tableHeight + 'px'
    };
  }

  toggleVehiclesSelectedExpand() { // click handler
    let bool = this.vehiclesSelectedExpand;
    this.vehiclesSelectedExpand = bool === false ? true : false;
  }

  toggleFiltersDropDown() { // click handler
    let bool = this.columnFiltersExpand;
    this.columnFiltersExpand = bool === false ? true : false;
  }

  openVehicleSingle(vehicle: any) { }

  getStyle(checkbox: any) {
    const top = checkbox.clientHeight;
    let style = '';
    if (this.columnFiltersExpand) {
      style = '100%';
    } else {
      style = -top + 'px';
    }
    return {
      top: style,
      height: top
    };
  }

  getArchivedFile() {
    this.feedLoading = true;
    this.loadingAll = true;
    this.selectedInfluxVehicles = [];
    let filename = null;
    if (this.filename) {
      filename = this.filename;
    }
    if (filename !== null) {
      this.accountService.getUpdatedFeed(this.provider, filename, this.accountId, this.providerid, this.offset, this.fileIndex)
        .subscribe(vehicles => {
          this.filesize = Number(vehicles.filesize);
          this.offset = Number(vehicles.offset);
          this.requestUrl = vehicles.url;
          this.headers = vehicles.headers;
          this.influxVehicles = [...vehicles.vehicles];
          this.selectedInfluxVehicles = this.influxVehicles;
          if(this.influxVehicles.length >= 50){
            this.getFullFile();
            } else {
            this.loadingAll = false;
          }
        });
    }
  }

  getFullFile() {
    let filename = null;
    if (this.filename) {
      filename = this.filename;
    }
    if (filename !== null) {
      this.accountService.getUpdatedFeed(this.provider, filename, this.accountId, this.providerid, this.offset, this.fileIndex, true)
        .subscribe(vehicles => {
          console.log(vehicles);
          const items = [...this.influxVehicles];
          items.splice(50, 0, ...vehicles.vehicles);
          this.influxVehicles = items;
          this.selectedInfluxVehicles = this.influxVehicles;
          this.loadingAll = false;
          console.log(this.influxVehicles);
        });
    }
  }

  onValueChange(data: any) {
    this.fileIndex = data;
    this.archivedFile = this.files[data];
    this.offset = 0;
    this.router.navigate([this.provider, this.archivedFile.filename, this.providerid], { relativeTo: this.route.parent });
  }

  addClass(vehicle: any) {
    if (vehicle.hightlight === 0 || !vehicle.highlight) {
      vehicle.highlight = 1;
    }
    else if (vehicle.highlight === 1) {
      vehicle.highlight = 0;
    }
    else {
    }
  }

  getColumnData(vehicle, column) {
    return vehicle[column];
  }

  onSelect({ selected, vehicle }) {
    this.selected.splice(0, this.selected.length);
    this.selected.push(...selected);
  }

  onActivate(event) {
  }

  getStyles() {
    return '.ngx-datatable.scroll-horz .datatable-body {max-height: 500px;}';
  }

  onPage(event) {
    clearTimeout(this.timeout);
    this.timeout = setTimeout(() => {
    }, 100);
  }

  checkAll(boolean = false) {
    this.influxHeadersCheckbox.forEach(box => {
      this.toggle(box);
    });
  }

  toggle(col) {
    const isChecked = this.isChecked(col);

    if (isChecked) {
      this.influxHeaders = this.influxHeaders.filter(c => {
        return c.prop !== col.prop;
      });
    } else {
      this.influxHeaders = [...this.influxHeaders, col];
    }
  }

  isChecked(col) {
    return this.influxHeaders.find(c => {
      return c.prop === col.prop;
    });
  }

  ngOnInit(): void {
    this.setRows();
  };

  ngAfterViewInit() {
    this.adjustTableSize();
  }

  adjustTableSize() {
    this.tableHeight = window.innerHeight - this.tableInfo.nativeElement.clientHeight;
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.file_sub.unsubscribe();
  }
}
