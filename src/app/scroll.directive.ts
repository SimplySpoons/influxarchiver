import { Directive, HostListener, ElementRef, Input, Renderer, Output, EventEmitter, AfterViewInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/pairwise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/exhaustMap';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/startWith';
import { Observable, Subscription } from 'rxjs/Rx';

interface ScrollPosition {
  sT: number;
  childScrolltop: number;
};
const DEFAULT_SCROLL_POSITION: ScrollPosition = {
  sT: 0,
  childScrolltop: 0
};


@Directive({
  selector: '[onScrollAction]'
})

export class ScrollerDirective implements AfterViewInit {
  private scrollEvent$;
  private userScrolledDown$;
  private requestStream$;
  private requestOnScroll$;
  private element: Element;
  @Input() showList: boolean = false;
  @Output()
  public onScrollAction = new EventEmitter();



  constructor(private elm: ElementRef, private renderer: Renderer, @Inject(DOCUMENT) private document: Document) {
    this.element = this.document.getElementById('main-container');
  }

  ngAfterViewInit() {
    this.registerScrollEvent();
    this.streamScrollEvents();
    this.requestCallbackOnScroll();
  }

  private registerScrollEvent() {
    this.scrollEvent$ = Observable.fromEvent(this.element, this.elm.nativeElement, scroll);
  }

  private streamScrollEvents() {
    this.userScrolledDown$ = this.scrollEvent$
      .map((e: any, child: any): ScrollPosition => ({
        sT: e.target.scrollTop,
        childScrolltop: child.target.scrollTop
      })).filter(positions => this.isUserScrollingDown(positions) && this.isScrollExpectedPercent(positions[1] == 1))
  }

  private requestCallbackOnScroll() {
    this.requestOnScroll$ = this.userScrolledDown$;
    this.requestOnScroll$
      .exhaustMap(() => { this.onScrollAction.emit(true) })
      .subscribe(() => { });
  }

  private isUserScrollingDown = (positions) => {
    return positions[0].sT < positions[1].sT;
  }

  private isScrollExpectedPercent = (position) => {
    return ((position.sT / position.childScrolltop));
  }

}