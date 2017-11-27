import { Component, Input, Output, OnInit } from '@angular/core';
import { Device } from './device.model';


@Component({
  selector: 'device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent {
  filterByWords: any[];
  showHide: boolean;

  constructor() {
    this.showHide = false;
  }

  changeShowStatus(){
   this.showHide = !this.showHide;
 }

  @Input() devices: Device[];

  searchByTerm(searchString){
    var searchWords = searchString.toLowerCase().split(' ');
    console.log(searchWords);
    this.filterByWords = searchWords;
  }
}
