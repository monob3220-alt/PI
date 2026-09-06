import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ex10Login } from './ex10-login';

describe('Ex10Login', () => {
  let component: Ex10Login;
  let fixture: ComponentFixture<Ex10Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Ex10Login],
    }).compileComponents();

    fixture = TestBed.createComponent(Ex10Login);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
