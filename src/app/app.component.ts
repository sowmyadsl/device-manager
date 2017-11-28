import { Component } from '@angular/core';
import { Device } from './device.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  devices: Device[] = [{
      name: "dev-1538",
      image: "http://www.vodafone.com/content/dam/vodafone-images/devices/tiles/vodafone-smart-v8.png",
      location: [45.524700,   -122.674693],
      role: "low",
      status: "running",
      history: "Down for maintenance",
      date: "2017-04-03"
    },{
      name: "dev-1539",
      image: "http://www.vodafone.com/content/dam/vodafone-images/devices/tiles/vodafone-smart-v8.png",
      location: [45.524700,   -122.674693],
      role: "high",
      status: "down",
      history: "Down for maintenance",
      date: "2017-06-03"
    },{
      name: "dev-1540",
      image: "http://www.vodafone.com/content/dam/vodafone-images/devices/tiles/vodafone-smart-v8.png",
      location: [45.524700,   -122.674693],
      role: "high",
      status: "down",
      history: "Down for maintenance",
      date: "2017-06-03"
    },{
      name: "dev-1541",
      image: "http://www.vodafone.com/content/dam/vodafone-images/devices/tiles/vodafone-smart-v8.png",
      location: [45.524700,   -122.674693],
      role: "low",
      status: "running",
      history: "Up and running",
      date: "2017-06-03"
    },{
      name: "dev-1542",
      image: "http://www.vodafone.com/content/dam/vodafone-images/devices/tiles/vodafone-smart-v8.png",
      location: [45.524700,   -122.674693],
      role: "low",
      status: "running",
      history: "Up and running",
      date: "2017-06-03"
    },{
      name: "dev-1543",
      image: "http://www.vodafone.com/content/dam/vodafone-images/devices/tiles/vodafone-smart-v8.png",
      location: [45.524700,   -122.674693],
      role: "high",
      status: "running",
      history: "Up and running",
      date: "2017-06-03"
    },{
      name: "dev-1545",
      image: "http://www.vodafone.com/content/dam/vodafone-images/devices/tiles/vodafone-smart-v8.png",
      location: [45.524700,   -122.674693],
      role: "high",
      status: "running",
      history: "Up and running",
      date: "2017-06-03"
    }
  ];
}
