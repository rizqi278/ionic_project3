import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaftarArtikelPage } from './daftar-artikel.page';

describe('DaftarArtikelPage', () => {
  let component: DaftarArtikelPage;
  let fixture: ComponentFixture<DaftarArtikelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaftarArtikelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaftarArtikelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
