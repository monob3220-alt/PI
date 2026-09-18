import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex9Classificacao } from './ex9-classificacao';

describe('Ex9Classificacao', () => {
  let component: Ex9Classificacao;
  let fixture: ComponentFixture<Ex9Classificacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex9Classificacao],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex9Classificacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
