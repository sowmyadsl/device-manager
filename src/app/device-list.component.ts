import { Component, Input, Output, OnInit } from '@angular/core';
import { Device } from './device.model';


@Component({
  selector: 'device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent {
  filterByWords: any[];

  @Input() devices: Device[];

  searchByTerm(searchString){
    var searchWords = searchString.toLowerCase().split(' ');
    console.log(searchWords);
    this.filterByWords = searchWords;
  }


}
