import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../../../_models/item'; 
import { Account } from '../../../_models/account'; 

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.css']
})
export class VehicleItemComponent implements OnInit {

  @Input() item: Item; 
  @Input() account: Account; 

  constructor() { }

  getImageSrc(data: any, accountId: string) { 
    let firstLetter = accountId.charAt(0); 
    let url = 'https://pictures.dealer.com/ddc/resize/320x/quality/70/sharpen/1/ddc/' + firstLetter + '/' + accountId + '/' + data; 
    return url; 
  }
  
  getVdpLink(uuid: string, type: string) {
      let vdp_link = this.account.internalUrl + '/' + type + '/' + uuid + '.htm'; 
      return vdp_link;
  }

  getVlpLink(vin: string, type: string) {
      let vlp_link = this.account.internalUrl + '/' + type + '-inventory/index.htm?search=' + vin; 
      return vlp_link;
  }


  ngOnInit() {
  }

}
