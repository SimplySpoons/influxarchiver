import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Item } from '../../../_models/item';
import { Account } from '../../../_models/account';
import { AccountService } from '../../../_services/account.service';

@Component({
  selector: 'app-vehicle-item',
  templateUrl: './vehicle-item.component.html',
  styleUrls: ['./vehicle-item.component.css']
})
export class VehicleItemComponent implements OnInit {

  @Input() item: Item;
  @Input() account: Account;
  // @Input() customButtons: any; 
  @Output() sendItem = new EventEmitter();

  loading = false;

  constructor() {

  }

  showCustomButton(item: any, buttonConditions: any) {
    if (buttonConditions.type == 3 && buttonConditions.classification == 0) {
      return true;
    }
    else if (item.certified == true && buttonConditions.certified == true) {
      return true;
    }
    else if (item.vehicleType == buttonConditions.type && buttonConditions.classification == 0) {
      return true;
    }
    else if (item.vehicleType == buttonConditions.type && item.classification == buttonConditions.classification) {
      return true;
    }
    return false;
  }

  getImageSrc(data: any, accountId: string) {
    let firstLetter = accountId.charAt(0);
    let url = 'https://pictures.dealer.com/ddc/resize/320x/quality/70/sharpen/1/ddc/' + firstLetter + '/' + accountId + '/' + data;
    return url;
  }

  openVehicleSingle(item: any) {
    this.sendItem.emit(item);
  }

  getVdpLink(item: any) {
    let vdp_link = 'http://' + item.accountId + '.cms.dealer.com/' + item.type + '/' + item.uuid + '.htm';
    return vdp_link;
  }

  getVlpLink(item: any) {
    let vlp_link = 'http://' + this.item.accountId + '.cms.dealer.com/' + item.type + '-inventory/index.htm?search=' + item.vin;
    return vlp_link;
  }

  getAuditTrail(vin: string) {
    let audit_link = '//apps.dealer.com/inventory/as/' + this.item.accountId + '/' + this.item.accountId + '-admin/i/index#/vehicle~summary?vin=' + vin + '&history&quickFilter=all';
    return audit_link;
  }


  ngOnInit() {
  }

}