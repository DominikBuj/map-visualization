import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AgmCoreModule} from "@agm/core";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AgmCoreModule.forRoot({apiKey: 'AIzaSyD5CgZ1v4CAoV78OTaFEva8tyCPrOLvSOk'})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
