import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuanLyMenuComponent } from './quan-ly-menu.component';

describe('QuanLyMenuComponent', () => {
  let component: QuanLyMenuComponent;
  let fixture: ComponentFixture<QuanLyMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuanLyMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuanLyMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
