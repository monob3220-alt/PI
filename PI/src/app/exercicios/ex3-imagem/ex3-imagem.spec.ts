import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex3Imagem } from './ex3-imagem';

describe('Ex3Imagem', () => {
  let component: Ex3Imagem;
  let fixture: ComponentFixture<Ex3Imagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex3Imagem],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex3Imagem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
