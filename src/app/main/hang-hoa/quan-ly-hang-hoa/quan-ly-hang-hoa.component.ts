import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ThanhToanComponent} from '../thanh-toan/thanh-toan.component';

@Component({
  selector: 'app-quan-ly-hang-hoa',
  templateUrl: './quan-ly-hang-hoa.component.html',
  styleUrls: ['./quan-ly-hang-hoa.component.scss']
})
export class QuanLyHangHoaComponent implements OnInit {
  vFormDonHang = true;
  constructor(
    private vDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  fThanhToan() {
    this.vDialog.open(ThanhToanComponent, {
      panelClass: 'dialog-full-width',
      disableClose: true,
      position: {
        top: '0.5vh'
      }
    });
  }

  fChonDonHang() {
    this.vFormDonHang = true;
  }

  fChonThuChi() {
    this.vFormDonHang = false;
  }
}
