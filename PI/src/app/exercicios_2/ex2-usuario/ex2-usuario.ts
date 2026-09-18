import { Component } from '@angular/core';

@Component({
  selector: 'app-ex2-usuario',
  standalone: false,
  templateUrl: './ex2-usuario.html',
  styleUrl: './ex2-usuario.scss',
})
export class Ex2Usuario {
  usuarioLogado = false;

   alternarLogin() {
    this.usuarioLogado = !this.usuarioLogado;
  }
}
