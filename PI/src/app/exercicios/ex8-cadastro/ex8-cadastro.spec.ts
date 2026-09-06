import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex8Cadastro } from './ex8-cadastro';

describe('Ex8Cadastro', () => {
  let component: Ex8Cadastro;
  let fixture: ComponentFixture<Ex8Cadastro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex8Cadastro],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex8Cadastro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
