import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './layout/menu/menu.module';
import { DanhMucModule } from './main/danh-muc/danh-muc.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HangHoaModule} from './main/hang-hoa/hang-hoa.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    DanhMucModule,
    BrowserAnimationsModule,
    HangHoaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
