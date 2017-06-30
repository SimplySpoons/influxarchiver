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

}
