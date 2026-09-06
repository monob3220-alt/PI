import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex8-cadastro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ex8-cadastro.html',
  styleUrl: './ex8-cadastro.scss'
})
export class Ex8Cadastro {
  produto = 'Mouse Gamer';
  preco = 150;
  quantidade = 2;

  get total(): number {
    return this.preco * this.quantidade;
  }
}