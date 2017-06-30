import { Component, OnInit, Input, OnDestroy, EventEmitter, Output, OnChanges, AfterViewInit } from '@angular/core';
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

  constructor(private accountService: AccountService, private route: ActivatedRoute, private router: Router) {
       this.scrollCallback = this.loadVehicles.bind(this);
  }
  getItem(data: any){ 
    this.selectedItem = data; 
    this.selected = true; 
  }

  closeSingle(data: any) {
    console.log(data);
    this.selectedItem = null; 
    this.selected = false; 
  }

  searchForVehicle() {
        this.loading=true; 
        this.accountService.searchVehicle(this.itemSearchTerm$, this.accountId).subscribe(items => {
            this.items = this.items.concat(items);
            this.loading=false; 
        });
    }

  loadCorrectVehicles(type: any, classification: any) {
    this.router.navigate(['vehicles', type, classification], { relativeTo: this.route.parent });
    this.loading=true; 
    this.items=[];
    this.accountService.getAccountVehicles(this.accountId, type, classification, 0).subscribe(items => {
      this.items = items.json();
      this.loading=false; 
    }); 
  }

  getScrollAction(data) {
    console.log('data',data);
  }

  loadVehicles() {
    this.loading = true; 
    if(this.loadDone == false){
      this.offset = this.items.length;
        return this.accountService.getAccountVehicles(this.accountId, this.type, this.classification, this.offset).do(this.processData);
    }
    else {
      this.loading = false;
    }
  }

  ngAfterViewInit(){ 
    console.log('afterViewInit');
  }

  private processData = (vehicles) => {
    this.tmpData = vehicles.json(); 
    console.log(this.tmpData.length);
    if(this.tmpData.length < 20){
      this.loadDone = true; 
    }
    this.items = this.items.concat(this.tmpData);
    this.offset = this.items.length;
    this.loading = false;
  }

  ngOnChanges(){ 
    console.log('change occurred'); 
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
      console.log(this.accountId);
    });
    this.routersub = this.route.params.subscribe(params => {
      this.type = params['type'];
      this.classification = params['classification'];
    });
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
    this.routersub.unsubscribe();
  }
}
