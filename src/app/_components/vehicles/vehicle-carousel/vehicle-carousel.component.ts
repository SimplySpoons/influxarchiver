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

  private _imgIndex: number;

  get imgIndex(): number {
    return this._imgIndex;
  }

  set imgIndex(newImgIndex: number) {
    this._imgIndex = newImgIndex;
    if (this.imgIndex >= 0) {
       var wrap = this.elRef.nativeElement.querySelector('.carouselVehicleThumbnailsContainer');
       var thumbWidth = wrap.querySelector('.vehicleThumbnail').offsetWidth;
       var currentThumbLeft = this.imgIndex * thumbWidth;
       var bumpFactor = 2;
       console.log("imgIndex " + this.imgIndex + " currentThumbLeft: " + currentThumbLeft + " wrap width " + wrap.clientWidth + " thumb width " + thumbWidth + " bumpFactor " + bumpFactor + " wrap scroll left: " + wrap.scrollLeft)
       console.log("if check: " + currentThumbLeft + " > " + (wrap.clientWidth - (thumbWidth * bumpFactor))  + wrap.scrollLeft );
       console.log("else if check " + currentThumbLeft + " < " + thumbWidth + wrap.scrollLeft);
       if (currentThumbLeft > ((wrap.clientWidth - (thumbWidth * bumpFactor)) + wrap.scrollLeft)) {

           // We should scroll right a bit
               wrap.scrollLeft = currentThumbLeft - wrap.clientWidth + (thumbWidth * bumpFactor);
               console.log("laddy currentThumbLeft - wrap.clientWidth + (thumbWidth * bumpFactor) " + wrap.scrollLeft);
       } else if (currentThumbLeft < (thumbWidth + wrap.scrollLeft)) {
           // We should scroll left a bit
               // Left position of thumb : scope.imgIndex * thumbWidth
               wrap.scrollLeft = currentThumbLeft - thumbWidth;
               console.log("lassy currentThumbLeft - thumbWidth " + wrap.scrollLeft);
       }
     }
  }

  constructor(private elRef:ElementRef) { }

  ngOnInit() { }

  getImageSrc(data: any, accountId: string) {
    let firstLetter = accountId.charAt(0);
    let url = 'https://pictures.dealer.com//' + firstLetter + '/' + accountId + '/' + data;
    return url;
  }

  getImageThumbSrc(data: any, accountId: string) {
    let firstLetter = accountId.charAt(0);
    let url = 'https://pictures.dealer.com//' + firstLetter + '/' + accountId + '/' + data;
    var fileName = url.substring(url.lastIndexOf('/') + 1);
    return url.replace(fileName, 'thumb_' + fileName);
  }


}
