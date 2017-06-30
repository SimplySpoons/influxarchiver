import { Component, OnInit, Input } from '@angular/core';
import {Item} from '../../../_models/item'

@Component({
  selector: 'app-vehicle-single',
  templateUrl: './vehicle-single.component.html',
  styleUrls: ['./vehicle-single.component.css']
})
export class VehicleSingleComponent implements OnInit {
  @Input() item: Item;
  @Input() account: any;
  constructor() { }



  ngOnInit() {
  }
  getImageSrc(data: any, accountId: string) {
    let firstLetter = accountId.charAt(0);
    let url = 'https://pictures.dealer.com/ddc/resize/320x/quality/70/sharpen/1/ddc/' + firstLetter + '/' + accountId + '/' + data;
    return url;
  }
  isExpanded = false;   // store state
  toggleState() { // click handler
    let bool = this.isExpanded;
    this.isExpanded = bool === false ? true : false;
  }
}
