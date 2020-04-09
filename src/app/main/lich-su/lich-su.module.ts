import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonHangComponent } from './don-hang/don-hang.component';
import { ThuChiComponent } from './thu-chi/thu-chi.component';
import { CongNoComponent } from './cong-no/cong-no.component';
import { QuanLyLichSuComponent } from './quan-ly-lich-su/quan-ly-lich-su.component';
import {FlexModule} from '@angular/flex-layout';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {RouterModule, Routes} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material/core';

const route: Routes = [
  {
    path: 'lich-su',
    component: QuanLyLichSuComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [DonHangComponent, ThuChiComponent, CongNoComponent, QuanLyLichSuComponent],
  imports: [
    CommonModule,
    FlexModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatCardModule,
    MatNativeDateModule,
    RouterModule.forChild(route),
    MatInputModule
  ]
})
export class LichSuModule { }
