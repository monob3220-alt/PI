import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex9-estoque',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ex9-estoque.html',
  styleUrl: './ex9-estoque.scss'
})
export class Ex9Estoque {
  nomeProduto = 'Caneta';
  estoque = 10;

  aumentar() { this.estoque++; }
  diminuir() { if (this.estoque > 0) this.estoque--; }
}