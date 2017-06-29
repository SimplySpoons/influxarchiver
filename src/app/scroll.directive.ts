import { Directive, HostListener, ElementRef, Input, Renderer, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[clickOutside]'
})

export class ScrollerDirective {
  private element: Element;
  @Input() showList: boolean = false;
  @Output()
  public clickOutside = new EventEmitter();

  constructor(private elm: ElementRef, private renderer: Renderer) {
    this.element = this.elm.nativeElement;
  }

  @HostListener('document:click', ['$event.target'])
  public onClick(targetElement) {
    const clickedInside = this.elm.nativeElement.contains(targetElement);
    if (!clickedInside) {
      this.clickOutside.emit(false);
    }
    else {
      this.clickOutside.emit(true);
    }
  }
}