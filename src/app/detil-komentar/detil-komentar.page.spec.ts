import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetilKomentarPage } from './detil-komentar.page';

describe('DetilKomentarPage', () => {
  let component: DetilKomentarPage;
  let fixture: ComponentFixture<DetilKomentarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetilKomentarPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetilKomentarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
