import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex13Tarefas } from './ex13-tarefas';

describe('Ex13Tarefas', () => {
  let component: Ex13Tarefas;
  let fixture: ComponentFixture<Ex13Tarefas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex13Tarefas],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex13Tarefas);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
