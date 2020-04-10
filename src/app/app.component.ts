import {Component, OnInit} from '@angular/core';
import {Platform} from '@angular/cdk/platform';
import {Router} from '@angular/router';
import {GdkRequestService} from 'gdk-request-lib';
import {GDK_DB_QUERY} from './DB-QUERY';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'quan-ly-ban-hang';
  isMobile = false;
  ketNoiSV = false;

  constructor(
    public platform: Platform,
    private route: Router,
    public client: GdkRequestService
  ) {
  }

  ngOnInit(): void {
    if (this.platform.IOS || this.platform.ANDROID) {
      this.isMobile = true;
    }
    (async () => {
      this.khoiTao();
    })();
  }

  async khoiTao() {
    const ketQua = await this.client.initDefault(false);
    console.log(ketQua);
    if (ketQua.ok) {
      this.ketNoiSV = true;
     /* const timKiem = await this.client.query({
        reqId: GDK_DB_QUERY.test.find
      });
      console.log( timKiem);*/

    } else {
      this.ketNoiSV = false;
    }
  }

}
