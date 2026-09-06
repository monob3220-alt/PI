import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1Apresentacao } from './ex1-apresentacao';

describe('Ex1Apresentacao', () => {
  let component: Ex1Apresentacao;
  let fixture: ComponentFixture<Ex1Apresentacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex1Apresentacao],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex1Apresentacao);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
