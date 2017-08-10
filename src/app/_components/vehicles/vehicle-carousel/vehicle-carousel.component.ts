import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../../_models/account';

@Component({
  selector: 'app-vehicle-carousel',
  templateUrl: './vehicle-carousel.component.html',
  styleUrls: ['./vehicle-carousel.component.css']
})
export class VehicleCarouselComponent implements OnInit {
  @Input() vehicleImages: Array<any> = [];
  @Input() account: Account;

  imgIndex = 0;

  constructor() { }

  ngOnInit() {
  }
  getImageSrc(data: any, accountId: string) {
    let firstLetter = accountId.charAt(0);
    let url = 'https://pictures.dealer.com/ddc/resize/320x/quality/70/sharpen/1/ddc/' + firstLetter + '/' + accountId + '/' + data;
    return url;
  }

  test() {
    alert("something" + this.imgIndex);
  }
}
