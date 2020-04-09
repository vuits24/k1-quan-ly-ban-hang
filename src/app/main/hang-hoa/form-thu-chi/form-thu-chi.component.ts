import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {XacNhanThuChiComponent} from '../xac-nhan-thu-chi/xac-nhan-thu-chi.component';

@Component({
  selector: 'app-form-thu-chi',
  templateUrl: './form-thu-chi.component.html',
  styleUrls: ['./form-thu-chi.component.scss']
})
export class FormThuChiComponent implements OnInit {

  constructor(
    private vDialog: MatDialog
  ) { }

  ngOnInit(): void {
  }


  fFormXacNhan() {
    this.vDialog.open(XacNhanThuChiComponent, {
      panelClass: 'dialog-full-width',
      disableClose: true,
      position: {
        top: '0.5vh'
      }
    });
  }
}
