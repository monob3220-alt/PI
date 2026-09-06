import { Component } from '@angular/core';

@Component({
  selector: 'app-ex4-botao',
  templateUrl: './ex4-botao.html',
  styleUrl: './ex4-botao.scss'
})
export class Ex4Botao {
  formularioValido = false;

  liberar() {
    this.formularioValido = true;
  }
}