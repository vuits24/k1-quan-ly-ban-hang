import {Component, OnInit} from '@angular/core';
import {Platform} from '@angular/cdk/platform';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'quan-ly-ban-hang';
  isMobile = false;
  constructor(
    public platform: Platform,
    private route: Router
  ) { }

  ngOnInit(): void {
    if (this.platform.IOS || this.platform.ANDROID) {
      this.isMobile = true;
    }
  }


}
