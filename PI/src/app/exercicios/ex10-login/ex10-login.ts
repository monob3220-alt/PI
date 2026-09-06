import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex10-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ex10-login.html',
  styleUrl: './ex10-login.scss'
})
export class Ex10Login {
  usuario = '';
  senha = '';
  mensagem = '';

  entrar() {
    this.mensagem = `Bem-vindo, ${this.usuario}!`;
  }

  get camposPreenchidos(): boolean {
    return this.usuario.trim() !== '' && this.senha.trim() !== '';
  }
}