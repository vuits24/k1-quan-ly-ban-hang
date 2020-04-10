import {Component, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {FormDanhMucComponent} from '../form-danh-muc/form-danh-muc.component';
import {FormNhomComponent} from '../form-nhom/form-nhom.component';
import {FormKichThuocComponent} from '../form-kich-thuoc/form-kich-thuoc.component';
import {FormDonViTinhComponent} from '../form-don-vi-tinh/form-don-vi-tinh.component';
import {GdkRequestService} from 'gdk-request-lib';

@Component({
  selector: 'app-quan-ly-danh-muc',
  templateUrl: './quan-ly-danh-muc.component.html',
  styleUrls: ['./quan-ly-danh-muc.component.scss']
})
export class QuanLyDanhMucComponent implements OnInit {
  indexTab = 0;

  constructor(
    private vDialog: MatDialog,
    private  client: GdkRequestService
  ) {
  }

  ngOnInit(): void {
    this.fTenHam('3');
    (async () => {
      // var> let > const
      const bien1 = await this.fHamBatDongBo1();
      const bien2 = await this.fHamBatDongBo2();
      console.log(bien1, bien2);
      this.fTimKiemTest();
    })();
// (tham_so:kieu) => {} // ten ham ko dinh danh
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

// string, number, any, boolean,...
  fTenHam(thamSo1: string): void {
    // Thân xử lý sự kiến
    console.log(thamSo1);
  }

  async fHamBatDongBo1(): Promise<string> {
    return new Promise<string>(resolve => {
      setTimeout(() => {
        resolve('ham bat dong bo 1');
        // console.log('ham bat dong bo 1');
      }, 100);
    });

  }

  async fHamBatDongBo2(): Promise<string> {
    return new Promise<string>(resolve => {
      setTimeout(() => {
        resolve('ham bat dong bo 2');
        // console.log('ham bat dong bo 1');
      }, 10);
    });
  }

  async fTimKiemTest() {
    const ketQua = await this.client.query({
      // find(...).toArray((err, rs) => {...........})
      reqId: `
      return new Promise((resolve, reject) => {
      db.test.find({}, {projection: {_id:0, ten: 1}}).toArray((err, rs) => {
      if(err) { reject(err);} else {resolve(rs);}
      });
      });
      `
    });
    console.log(ketQua);
  }
}
