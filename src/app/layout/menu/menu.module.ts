import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyMenuComponent } from './quan-ly-menu/quan-ly-menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
@NgModule({
  declarations: [QuanLyMenuComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule

  ],
  exports: [
    QuanLyMenuComponent
  ]
})
export class MenuModule { }
