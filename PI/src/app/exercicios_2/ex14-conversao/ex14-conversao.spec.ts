import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex14Conversao } from './ex14-conversao';

describe('Ex14Conversao', () => {
  let component: Ex14Conversao;
  let fixture: ComponentFixture<Ex14Conversao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex14Conversao],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex14Conversao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
