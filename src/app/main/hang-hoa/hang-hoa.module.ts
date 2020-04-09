import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuanLyHangHoaComponent} from './quan-ly-hang-hoa/quan-ly-hang-hoa.component';
import {RouterModule, Routes} from '@angular/router';
import {FlexModule} from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import { ThanhToanComponent } from './thanh-toan/thanh-toan.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { QuanLyThuChiComponent } from './quan-ly-thu-chi/quan-ly-thu-chi.component';
import { FormThuChiComponent } from './form-thu-chi/form-thu-chi.component';
import {MatRadioModule} from '@angular/material/radio';
import { XacNhanThuChiComponent } from './xac-nhan-thu-chi/xac-nhan-thu-chi.component';

const route: Routes = [
  {path: '', component: QuanLyHangHoaComponent, pathMatch: 'full'},
  {path: 'hang-hoa', component: QuanLyHangHoaComponent, pathMatch: 'full'}

];


@NgModule({
  declarations: [QuanLyHangHoaComponent, ThanhToanComponent, QuanLyThuChiComponent, FormThuChiComponent, XacNhanThuChiComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(route),
    FlexModule,
    MatMenuModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDialogModule,
    MatRadioModule
  ],
  entryComponents: [
    ThanhToanComponent,
    XacNhanThuChiComponent
  ]
})
export class HangHoaModule {
}
