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

const route: Routes = [
  {path: 'hang-hoa', component: QuanLyHangHoaComponent, pathMatch: 'full'}
];


@NgModule({
  declarations: [QuanLyHangHoaComponent],
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
    MatCardModule
  ]
})
export class HangHoaModule {
}
