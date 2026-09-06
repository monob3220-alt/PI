import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex11-carrinho',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex11-carrinho.html',
  styleUrl: './ex11-carrinho.scss'
})
export class Ex11Carrinho {
  produto = 'Mouse Gamer';
  preco = 120;
  quantidade = 1;
  mensagem = '';

  get total(): number {
    return this.preco * this.quantidade;
  }

  aumentar() { this.quantidade++; }
  diminuir() { if (this.quantidade > 1) this.quantidade--; }
  adicionar() {
    this.mensagem = `Adicionado ${this.quantidade}x ${this.produto} ao carrinho.`;
  }
}