import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNhomComponent } from './form-nhom.component';

describe('FormNhomComponent', () => {
  let component: FormNhomComponent;
  let fixture: ComponentFixture<FormNhomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormNhomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNhomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
