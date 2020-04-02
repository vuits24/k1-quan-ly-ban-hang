import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormDanhMucComponent} from '../form-danh-muc/form-danh-muc.component';
import {FormNhomComponent} from '../form-nhom/form-nhom.component';
import {FormKichThuocComponent} from '../form-kich-thuoc/form-kich-thuoc.component';
import {FormDonViTinhComponent} from '../form-don-vi-tinh/form-don-vi-tinh.component';

@Component({
  selector: 'app-quan-ly-danh-muc',
  templateUrl: './quan-ly-danh-muc.component.html',
  styleUrls: ['./quan-ly-danh-muc.component.scss']
})
export class QuanLyDanhMucComponent implements OnInit {
  indexTab = 1;
  constructor(
    private vDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  fThongTinForm(them: boolean = true, v: any = null) {
    switch (this.indexTab) {
      case 0: {
        this.vDialog.open(FormDanhMucComponent, {
          panelClass: 'dialog-full-width',
          disableClose: true,
          position: {
            top: '0.5vh'
          }
        });
        break;
      }
      case 1: {
        this.vDialog.open(FormNhomComponent, {
          panelClass: 'dialog-full-width',
          disableClose: true,
          position: {
            top: '0.5vh'
          }
        });
        break;
      }
      case 2: {
        this.vDialog.open(FormKichThuocComponent, {
          panelClass: 'dialog-full-width',
          disableClose: true,
          position: {
            top: '0.5vh'
          }
        });
        break;
      }
      case  3: {
        this.vDialog.open(FormDonViTinhComponent, {
          panelClass: 'dialog-full-width',
          disableClose: true,
          position: {
            top: '0.5vh'
          }
        });
        break;
      }
      default: {
        this.indexTab = 0;
        break;
      }
    }

  }

  fLayIndexTab(idx: number) {
    this.indexTab = idx;
    console.log(idx);
  }
}
