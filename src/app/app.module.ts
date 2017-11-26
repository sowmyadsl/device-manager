import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DeviceListComponent } from './device-list.component';
import { NewDeviceComponent } from './new-device.component';

@NgModule({
  declarations: [
    AppComponent,
    DeviceListComponent,
    NewDeviceComponent
  ],
  imports: [
    BrowserModule,FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
