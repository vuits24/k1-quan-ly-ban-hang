import { TestBed } from '@angular/core/testing';

import { GdkTienIchService } from './gdk-tien-ich.service';

describe('GdkTienIchService', () => {
  let service: GdkTienIchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GdkTienIchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
