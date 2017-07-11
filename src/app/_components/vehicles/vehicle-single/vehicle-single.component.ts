import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {Item} from '../../../_models/item';
import { trigger,state,style,animate,transition } from '@angular/animations';

@Component({
  selector: 'app-vehicle-single',
  templateUrl: './vehicle-single.component.html',
  styleUrls: ['./vehicle-single.component.css'],
  animations: [
    trigger('dialog', [
      state('void', style({
        transform: 'translateX(100%)',
        opacict: '0'
      })),
      state('*',   style({
        transform: 'translateX(0)',
        opacity: '1'
      })),
      transition('void => *', animate('100ms ease-in-out')),
      transition('* => void', animate('100ms ease-out-in'))
    ])

  ]
})
export class VehicleSingleComponent implements OnInit {
  @Input() item: Item;
  @Input() account: any;
  @Output() closeBox = new EventEmitter();
  constructor() { }


  closeVehicleInfo() {
    console.log('hitting');
    this.closeBox.emit(false);
  }

  getImageSrc(data: any, accountId: string) {
    let firstLetter = accountId.charAt(0);
    let url = 'https://pictures.dealer.com/ddc/resize/320x/quality/70/sharpen/1/ddc/' + firstLetter + '/' + accountId + '/' + data;
    return url;
  }

  isImageContainerExpanded = false;   // store state
  toggleState() { // click handler
    let bool = this.isImageContainerExpanded;
    this.isImageContainerExpanded = bool === false ? true : false;
  }

  ngOnInit() {
  }
}
