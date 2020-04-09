import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuChiComponent } from './thu-chi.component';

describe('ThuChiComponent', () => {
  let component: ThuChiComponent;
  let fixture: ComponentFixture<ThuChiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThuChiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThuChiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
