import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex10Promocao } from './ex10-promocao';

describe('Ex10Promocao', () => {
  let component: Ex10Promocao;
  let fixture: ComponentFixture<Ex10Promocao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex10Promocao],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex10Promocao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
