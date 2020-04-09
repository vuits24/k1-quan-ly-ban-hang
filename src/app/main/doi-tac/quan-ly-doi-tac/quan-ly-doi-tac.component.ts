import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormDoiTacComponent} from '../form-doi-tac/form-doi-tac.component';

@Component({
  selector: 'app-quan-ly-doi-tac',
  templateUrl: './quan-ly-doi-tac.component.html',
  styleUrls: ['./quan-ly-doi-tac.component.scss']
})
export class QuanLyDoiTacComponent implements OnInit {

  constructor(
    private vDialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  vCapNhatDoiTac() {
    this.vDialog.open(FormDoiTacComponent, {
      panelClass: 'dialog-full-width',
      disableClose: true,
      position: {
        top: '0.5vh'
      }
    });
  }
}
