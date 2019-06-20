import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Account } from '../../../_models/account';

@Component({
  selector: 'app-vehicle-carousel',
  templateUrl: './vehicle-carousel.component.html',
  styleUrls: ['./vehicle-carousel.component.css']
})
export class VehicleCarouselComponent implements OnInit {
  @Input() vehicleImages: Array<any> = [];
  @Input() account: Account;

  private _imgIndex: number = 0;

  get imgIndex(): number {
    return this._imgIndex;
  }

  set imgIndex(newImgIndex: number) {
    this._imgIndex = newImgIndex;

    var wrap = this.elRef.nativeElement.querySelector('.carouselVehicleThumbnailsContainer');
    if (this.imgIndex !== 0) {
      var thumbWidth = wrap.querySelector('.vehicleThumbnail').offsetWidth;
      var currentThumbLeft = this.imgIndex * thumbWidth;
      var bumpFactor = 5;

      if (currentThumbLeft > ((wrap.clientWidth - (thumbWidth * bumpFactor)) + wrap.scrollLeft)) {
        // We should scroll right a bit
        wrap.scrollLeft = currentThumbLeft - wrap.clientWidth + (thumbWidth * bumpFactor);
      } else if (currentThumbLeft < (thumbWidth + wrap.scrollLeft)) {
        // We should scroll left a bit
        // Left position of thumb : scope.imgIndex * thumbWidth
        wrap.scrollLeft = currentThumbLeft - thumbWidth;
      }
    } else {
      wrap.scrollLeft = 0;
    }
  }

  constructor(private elRef: ElementRef) { }

  ngOnInit() { }

  ngOnChanges() {
    this.imgIndex = 0;
  }
  getImageSrc(data: any, accountId: any) {
    let firstLetter = accountId.charAt(0);
    let url = 'https://pictures.XXXXX.com//' + firstLetter + '/' + accountId + '/' + data;
    return url;
  }

  getImageThumbSrc(data: any, accountId: string) {
    let firstLetter = accountId.charAt(0);
    let url = 'https://pictures.XXXXX.com//' + firstLetter + '/' + accountId + '/' + data;
    var fileName = url.substring(url.lastIndexOf('/') + 1);
    return url.replace(fileName, 'thumb_' + fileName);
  }


}
