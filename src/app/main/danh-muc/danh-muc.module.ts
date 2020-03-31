import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuanLyDanhMucComponent } from './quan-ly-danh-muc/quan-ly-danh-muc.component';
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
const route: Routes = [
  {
    path: '',
    component: QuanLyDanhMucComponent,
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [QuanLyDanhMucComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTabsModule,
    MatCardModule


  ]
})
export class DanhMucModule { }
