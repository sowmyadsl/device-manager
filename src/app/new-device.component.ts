import { Component, Output, EventEmitter } from '@angular/core';
import { Device } from './device.model';


@Component({
  selector: 'app-new-device',
  templateUrl: './new-device.component.html',
  styleUrls: ['./new-device.component.css']
})
export class NewDeviceComponent  {
  @Output() newDeviceSender = new EventEmitter;

  newDevice (
   name: string,
   image: string,
   location: any,
   role: string,
   status: string,
   history: string,
   date: string
 ){
   var newDevice = new Device(name, image, location, role, status, history, date);
   this.newDeviceSender.emit(newDevice);
 }

}
