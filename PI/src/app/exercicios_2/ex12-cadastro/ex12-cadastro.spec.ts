import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex12Cadastro } from './ex12-cadastro';

describe('Ex12Cadastro', () => {
  let component: Ex12Cadastro;
  let fixture: ComponentFixture<Ex12Cadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex12Cadastro],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex12Cadastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
