import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DeviceListComponent } from './device-list.component';
import { NewDeviceComponent } from './new-device.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { CategoryFilterPipe } from './category-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DeviceListComponent,
    NewDeviceComponent,
    SearchFilterPipe,
    CategoryFilterPipe,
    
  ],
  imports: [
    BrowserModule,FormsModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
