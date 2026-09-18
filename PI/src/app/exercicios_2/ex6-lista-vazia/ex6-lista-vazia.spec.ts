import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex6ListaVazia } from './ex6-lista-vazia';

describe('Ex6ListaVazia', () => {
  let component: Ex6ListaVazia;
  let fixture: ComponentFixture<Ex6ListaVazia>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex6ListaVazia],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex6ListaVazia);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
