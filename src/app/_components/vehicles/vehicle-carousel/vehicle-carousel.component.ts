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

  imgIndex = -1;

  constructor(private elRef:ElementRef) { }

  ngOnInit() {

  }


  ngDoCheck() {
    if (this.imgIndex >= 0) {
      var wrap = this.elRef.nativeElement.querySelector('.carouselVehicleThumbnailsContainer');
      var thumbWidth = wrap.querySelector('.vehicleThumbnail').offsetWidth;
      var currentThumbLeft = this.imgIndex * thumbWidth;
      var bumpFactor = 5;
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
      // if (this.imgIndex !== 0) {
      //   let wrap = element.all(by.tagName('.thumb-wrap').get(0));
      //
      //
      //
      // }
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
