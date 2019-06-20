import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Item } from '../../../_models/item';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-vehicle-single',
  templateUrl: './vehicle-single.component.html',
  styleUrls: ['./vehicle-single.component.css'],
  animations: [
    trigger('dialog', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(500px)'
        }),
        animate(150)
      ]),
      transition('* => void', [
        animate(150, style({
          transform: 'translateX(500px)',
          opacity: 0
        }))
      ])
    ]),
  ]
})

export class VehicleSingleComponent implements OnInit {
  @Input() item: Item;
  @Input() account: any;
  @Output() closeBox = new EventEmitter();
  state: any;

  constructor() { }

  closeVehicleInfo(item) {
    this.closeBox.emit(false);
  }

  getImageSrc(data: any, accountId: string) {
    let firstLetter = accountId.charAt(0);
    let url = 'https://pictures.XXXXX.com/ddc/resize/320x/quality/70/sharpen/1/ddc/' + firstLetter + '/' + accountId + '/' + data;
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
