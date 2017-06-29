import { Component, OnInit, ElementRef, OnDestroy, trigger, state, style, transition, animate } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AccordionModule, AccordionConfig } from 'ngx-bootstrap';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  animations: [
    trigger('slideInOut', [
      state('in', style({
        transform: 'translate3d(0, 0, 0)'
      })),
      state('out', style({
        transform: 'translate3d(100%, 0, 0)'
      })),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out'))
    ]),
  ]
})
export class SidebarComponent implements OnInit, OnDestroy {

  element: Element;
  sidebar_width: number;
  invCounts: any;
  sub: any;
  account: any;

  constructor() {

  }

  getAccountChange(data) {
    console.log(data);
  }

  public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
  public customClass: string = 'customClass';

  isIn = false;   // store state
  toggleState() { // click handler
    let bool = this.isIn;
    this.isIn = bool === false ? true : false;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
