import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex1Mensagem } from './ex1-mensagem';

describe('Ex1Mensagem', () => {
  let component: Ex1Mensagem;
  let fixture: ComponentFixture<Ex1Mensagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex1Mensagem],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex1Mensagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
