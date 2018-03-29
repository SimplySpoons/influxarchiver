import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Input, OnDestroy, EventEmitter, Output, OnChanges, AfterViewInit, ElementRef, ViewChild} from '@angular/core';
import { AccountService } from '../../../_services/account.service';
import { Item } from '../../../_models/item';
import { Account } from '../../../_models/account';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { DropdownModule } from "ngx-dropdown";

@Component({
  selector: 'app-vehicle-list',
  templateUrl: './vehicle-list.component.html',
  styleUrls: ['./vehicle-list.component.css']
})
export class VehicleListComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {
  @ViewChild('vehicleWrapper') wrapper;
  itemSearchTerm$ = new Subject<string>();
  account: Account = new Account();
  accountId: string;
  sub: any;
  items: Array<Item> = [];
  type: string = '';
  classification: string;
  routersub: any;
  invCounts: any;
  offset: number = 0;
  immediateCallback = false;
  scrollCallback;
  loading: boolean = false;
  loadDone = false;
  tmpData: any;
  selectedItem: Item;
  selected = false;
  pasted = false;
  value: string = '';
  element;
  classes = '';
  observe: any;

  width = 0;

  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router, private el: ElementRef) {
    this.scrollCallback = this.loadVehicles.bind(this);
    this.element = document.getElementById('main-container');
    this.width += this.element.offsetWidth
    const padding = Number(this.element.style.paddingLeft.replace('px',''));
    this.width -= padding;
    const tmp = this.element.className;
    this.classes = tmp;
    this.element.className = tmp + ' hide_account_info';
    this.observe = Observable.fromEvent(this.element,'scroll').subscribe(event => {
        this.setFixed(event,this.wrapper);
    });
  }
  getItem(data: any) {
    this.selectedItem = data;
    this.selected = true;
  }

  closeSingle(data: any) {
    this.selectedItem = null;
    this.selected = false;
  }

  onValueChange(data: any) {
    if (this.pasted === true) {
      this.itemSearchTerm$.next(data);
    }
  }

  formatRequest(data: any) {
    this.pasted = true;
  }

  searchForVehicle() {
    this.loading = true;
    this.accountService.searchVehicle(this.itemSearchTerm$, this.accountId).subscribe(items => {
      this.items = this.items.concat(items);
      this.loading = false;
    });
  }

  loadCorrectVehicles(type: any, classification: any) {
    this.router.navigate(['vehicles', type, classification], { relativeTo: this.route.parent });
    this.loading = true;
    this.items = [];
    this.accountService.getAccountVehicles(this.accountId, type, classification, 0).subscribe(items => {
      this.items = items.json();
      this.loading = false;
    });
  }

  getScrollAction(data) {
  }

  loadVehicles() {
    this.loading = true;
    if (this.loadDone == false) {
      this.offset = this.items.length;
      return this.accountService.getAccountVehicles(this.accountId, this.type, this.classification, this.offset).do(this.processData);
    }
    else {
      this.loading = false;
    }
  }

  ngAfterViewInit() {
  }

  private processData = (vehicles) => {
    this.tmpData = vehicles.json();
    if (this.tmpData.length < 20) {
      this.loadDone = true;
    }
    this.items = this.items.concat(this.tmpData);
    this.offset = this.items.length;
    this.loading = false;
  }

  ngOnChanges() {
  }

  setFixed(event,wrapper){
    console.log('EVENT',event);
    console.log('WRAPPER', wrapper);
    if(wrapper){
      const top = wrapper.nativeElement.offsetTop;
      const scrollTop = event.target.scrollTop;
      console.log(top);
      if(top - scrollTop <= 60){
        wrapper.nativeElement.className = "wrap fixed";
        this.element = this.wrapper.nativeElement;
      }
    }
  }

  ngOnInit() {
    this.loading = true;
    this.sub = this.route.parent.params.subscribe(params => {
      this.accountId = params['id'];
      this.searchForVehicle();
      this.account = this.accountService.getCurrentAccount();
      this.accountService.getInvCounts(this.accountId).subscribe(counts => {
        this.invCounts = counts;
      })
    });
    this.routersub = this.route.params.subscribe(params => {
      this.type = params['type'];
      this.classification = params['classification'];
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    this.routersub.unsubscribe();
    this.element.className = this.classes;
    console.log(this.element);
  }
}
