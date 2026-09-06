import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex4Botao } from './ex4-botao';

describe('Ex4Botao', () => {
  let component: Ex4Botao;
  let fixture: ComponentFixture<Ex4Botao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex4Botao],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex4Botao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
