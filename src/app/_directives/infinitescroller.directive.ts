import { Directive, AfterViewInit, ElementRef, Input, Inject } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Observable, Subscription } from 'rxjs/Rx';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/startWith';
import { AppConfig } from '../app.config';

interface ScrollPosition {
  sH: number;
  sT: number;
  cH: number;
};

const DEFAULT_SCROLL_POSITION: ScrollPosition = {
  sH: 0,
  sT: 0,
  cH: 0
};

@Directive({
  selector: '[appInfiniteScroller]'
})
export class InfiniteScroller implements AfterViewInit {
  private scrollEvent$;
  private userScrolledDown$;
  private requestStream$;
  private requestOnScroll$;

  @Input()
  scrollCallback;

  @Input()
  immediateCallback = false;

  @Input()
  scrollPercent = 80;

  @Input()
  totalElements = 0;


  element: Element;


  constructor(private appConfig: AppConfig, private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngAfterViewInit() {
    this.registerScrollEvent();
    this.streamScrollEvents();
    this.requestCallbackOnScroll();
  }

  private registerScrollEvent() {
    this.scrollEvent$ = Observable.fromEvent(this.element, 'scroll');
    this.scrollEvent$.subscribe(event => {
      if (event.target.scrollTop > 0) {
        this.appConfig.collapseHeader(true);
      } else {
        this.appConfig.collapseHeader(false);
      }
    });
  }

  private streamScrollEvents() {
    this.userScrolledDown$ = this.scrollEvent$
      .map((e: any): ScrollPosition => ({
        sH: e.target.scrollHeight,
        sT: e.target.scrollTop,
        cH: e.target.clientHeight
      }))
      .pairwise()
      .filter(positions => this.isUserScrollingDown(positions) && this.isScrollExpectedPercent(positions[1]))
  }

  private requestCallbackOnScroll() {
    this.requestOnScroll$ = this.userScrolledDown$;
    if (this.immediateCallback) {
      this.requestOnScroll$ = this.requestOnScroll$
        .startWith([DEFAULT_SCROLL_POSITION, DEFAULT_SCROLL_POSITION]);
    }

    this.requestOnScroll$
      .exhaustMap(() => { return this.scrollCallback(); })
      .subscribe(() => { });
  }

  private isUserScrollingDown = (positions) => {
    return positions[0].sT < positions[1].sT;
  }

  private isScrollExpectedPercent = (position) => {
    return ((position.sT + position.cH) / position.sH) > (this.scrollPercent / 100);
  }
}
