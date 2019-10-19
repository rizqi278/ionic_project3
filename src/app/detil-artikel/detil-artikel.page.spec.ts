import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetilArtikelPage } from './detil-artikel.page';

describe('DetilArtikelPage', () => {
  let component: DetilArtikelPage;
  let fixture: ComponentFixture<DetilArtikelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetilArtikelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetilArtikelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
