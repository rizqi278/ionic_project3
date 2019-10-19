import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarKomentarPage } from './daftar-komentar.page';

describe('DaftarKomentarPage', () => {
  let component: DaftarKomentarPage;
  let fixture: ComponentFixture<DaftarKomentarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarKomentarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarKomentarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
