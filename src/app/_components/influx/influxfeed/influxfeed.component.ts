import { ArchivedFile } from './../../../_models/feed';
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
export class InfluxfeedComponent implements OnInit, OnDestroy {
  @Output() sendItem = new EventEmitter();
  @ViewChild('tableInfo') tableInfo: any;
  tableHeight = 0;
  influxHeaders: any = [];
  influxHeadersCheckbox: any = [];
  requestUrl: string;
  pageSize = 0;
  influxVehicles: any = [];
  isLoading = false;
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
  delimiter;
  colLengths: any;

  fileIndex = 0;

  callOnce = false;

  parent_sub: any;
  file_sub: any;

  el: any;

  windowHeight = 0;

  fileRequest: ArchivedFile = new ArchivedFile();

  ARCHIVED_FILE_SUB: Subject<string> = new Subject<string>();
  archived_sub: any;

  constructor(private accountService: AccountService,
    private route: ActivatedRoute, private router: Router,
    private element: ElementRef, private influx: InfluxService) {
    this.el = this.element.nativeElement;
    this.el.classList = "addShadow";
  }

  routeBack() {
    this.router.navigate(['/account', this.fileRequest.accountId, 'influx'], { relativeTo: this.route.parent });
  }

  setRows() {
    if (this.files && this.files.length > 0) {
      this.archivedFile = this.files[0];
      if (this.archivedFile.ind !== undefined) {
        this.getLargest(this.archivedFile.ind.DATA);
      }
    }
  }

  getLargest(data: any) {
    data.sort((a: any, b: any) => {
      if (a < b) {
        return 1;
      } else if (a > b) {
        return -1;
      } else {
        return 0;
      }
    });
    return data;
  }

  getColLength(data: any) {
    const total = [];
    data.forEach((a: any) => {
      const keys = Object.keys(a);
      const lengths = [];
      keys.forEach(key => {
        const tmp = a[key].length;
        lengths.push(tmp);
      });
      total.push(lengths);
    });
    const cols = [];
    for (let j = 0; j < this.influxHeaders.length; j++) {
      cols[j] = [];
      for(let i = 0; i < total.length; i++) {
          cols[j].push(total[i][j]);
      }
      console.log(cols[j]);
     // cols[j] = this.getLargest(cols[j])[0];
    }
    console.log(cols);
    return total;
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

  logEvent(event){
    console.log(event);
  }

  getArchivedFile() {
    this.fileRequest.isLoading = true;
    this.isLoading = true;
    this.accountService.getUpdatedFeed(this.fileRequest)
      .subscribe(vehicles => {
        this.fileRequest.fileSize = Number(vehicles.filesize);
        this.fileRequest.offset = Number(vehicles.offset);
        this.fileRequest.delimiter = vehicles.delimiter;
        this.fileRequest.full = true;
        this.requestUrl = vehicles.vehicles;
        this.headers = vehicles.headers;
        this.fileRequest.start += 50;
        this.fileRequest.end += 50;
        this.influxVehicles = vehicles.vehicles;
        this.selectedInfluxVehicles = this.influxVehicles;
        this.fileRequest.totalElements = vehicles.vehicles.length;
        this.isLoading = false;
     //   this.colLengths = this.getColLength(this.selectedInfluxVehicles);
     //   console.log(this.colLengths);
        if (this.influxVehicles.length >= 50 && !this.fileRequest.filename.includes(this.fileRequest.accountId)) {
          this.getFullFile();
        }
        else {
          this.fileRequest.isLoading = false;
        }
      });
  }

  getFullFile() {
    this.accountService.getUpdatedFeed(this.fileRequest)
      .subscribe(vehicles => {
        this.fileRequest.offset = vehicles.offset;
        this.influxVehicles = vehicles.vehicles;
        this.fileRequest.totalElements = this.influxVehicles.length;
        this.selectedInfluxVehicles = this.influxVehicles;
        this.fileRequest.isLoading = false;
      });
  }

  onValueChange(data: any) {
    this.fileIndex = data;
    this.archivedFile = this.files[data];
    this.getLargest(this.archivedFile.ind.DATA);
    this.router.navigate([
      this.fileRequest.provider,
      this.archivedFile.filename,
      this.fileRequest.providerId],
      {
        relativeTo: this.route.parent
      });
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
    const length = this.influxVehicles.length;
    const rowPosition = event.offset * event.limit;
    const position = (rowPosition / length) * 100;
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
    this.fileRequest.pageSize = 0;
    this.sub = this.route.params.subscribe((params: ArchivedFile) => {
      this.fileRequest = {...params};
      this.fileRequest.accountId = params['id'];
      this.fileRequest.offset = 0;
      this.fileRequest.fileSize = 0;
      this.fileRequest.pageNumber = 0;
      this.fileRequest.totalElements = 0;
      this.fileRequest.start = 0;
      this.fileRequest.end = 50;
      this.fileRequest.full = false;
      this.selectedInfluxVehicles = [];
      this.parent_sub = this.route.parent.parent.params.subscribe(parentParam => {
        this.fileRequest.accountId = parentParam['id'];
        this.accountService.getHeaders(this.fileRequest).subscribe(headers => {
          this.influxHeaders = headers;
          this.influxHeadersCheckbox = this.influxHeaders;
          this.fileRequest.headerMap = headers;
          this.getArchivedFile();
        });
      })
    })
    this.files = this.influx.files;
    this.file_sub = this.influx.fileListSubject.subscribe(fileList => {
      this.files = fileList;
      this.setRows();
    });
    this.adjustTableSize();
  };

  adjustTableSize() {
    this.tableHeight = window.innerHeight - this.tableInfo.nativeElement.clientHeight;
    this.fileRequest.pageSize = Math.floor(this.tableHeight / 50);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
    this.file_sub.unsubscribe();
  }
}
