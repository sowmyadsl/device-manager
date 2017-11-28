import { Component, Input, Output, OnInit } from '@angular/core';
import { Device } from './device.model';


@Component({
  selector: 'device-list',
  templateUrl: './device-list.component.html',
  styleUrls: ['./device-list.component.css']
})
export class DeviceListComponent {
  filterByWords: any[];
  filterByRole: string;
  showHide: boolean;

  constructor() {
    this.showHide = false;
  }

  changeShowStatus(){
   this.showHide = !this.showHide;
 }

 onChange(menuOption){
   this.filterByRole = menuOption;
 }

  @Input() devices: Device[];

  refresh(): void {
    window.location.reload();
}

  searchByTerm(searchString){
    var searchWords = searchString.toLowerCase().split(' ');
    console.log(searchWords);
    this.filterByWords = searchWords;
  }

}
