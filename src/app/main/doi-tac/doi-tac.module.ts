import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {QuanLyDoiTacComponent} from './quan-ly-doi-tac/quan-ly-doi-tac.component';
import {FlexModule} from '@angular/flex-layout';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {FormDoiTacComponent} from './form-doi-tac/form-doi-tac.component';
import {RouterModule, Routes} from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';

const route: Routes = [
  {
    path: 'doi-tac',
    component: QuanLyDoiTacComponent,
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [QuanLyDoiTacComponent, FormDoiTacComponent],
  imports: [
    CommonModule,
    FlexModule,
    MatRadioModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,
    RouterModule.forChild(route),
    MatInputModule,
    MatDialogModule
  ],
  entryComponents: [
    FormDoiTacComponent
  ]
})
export class DoiTacModule {
}
