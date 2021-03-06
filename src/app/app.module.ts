import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from './layout/menu/menu.module';
import { DanhMucModule } from './main/danh-muc/danh-muc.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HangHoaModule} from './main/hang-hoa/hang-hoa.module';
import {DoiTacModule} from './main/doi-tac/doi-tac.module';
import {LichSuModule} from './main/lich-su/lich-su.module';
import {GdkHttpClientConfigModule} from 'gdk-request-lib';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';

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
    HangHoaModule,
    DoiTacModule,
    LichSuModule,
    HttpClientModule,
    MatSnackBarModule,
    GdkHttpClientConfigModule.forRoot({
      id: 'khominh',
      urlSystem: 'https://apikho-minh.gdk.com.vn'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
