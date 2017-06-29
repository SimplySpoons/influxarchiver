import { Component, OnInit, ElementRef } from '@angular/core';
import { AccordionModule, AccordionConfig } from 'ngx-bootstrap';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  element: Element; 
  sidebar_width: number;
  
  constructor(private elm: ElementRef) {
    this.element = elm.nativeElement; 
    console.log(this.element);

   }

   public status: any = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  ngOnInit() {
  }

}
