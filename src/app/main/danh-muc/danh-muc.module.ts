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
import { FormDanhMucComponent } from './form-danh-muc/form-danh-muc.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormNhomComponent } from './form-nhom/form-nhom.component';
import { FormKichThuocComponent } from './form-kich-thuoc/form-kich-thuoc.component';
import { FormDonViTinhComponent } from './form-don-vi-tinh/form-don-vi-tinh.component';
const route: Routes = [
  {
    path: '',
    component: QuanLyDanhMucComponent,
    pathMatch: 'full'
  },
  {
    path: 'danh-muc',
    component: QuanLyDanhMucComponent,
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [QuanLyDanhMucComponent, FormDanhMucComponent, FormNhomComponent, FormKichThuocComponent, FormDonViTinhComponent],
    imports: [
        CommonModule,
        RouterModule.forChild(route),
        FlexLayoutModule,
        MatIconModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatTabsModule,
        MatCardModule,
        MatDialogModule


    ],
  entryComponents: [
    FormDanhMucComponent,
    FormDonViTinhComponent,
    FormKichThuocComponent,
    FormNhomComponent
  ]
})
export class DanhMucModule { }
