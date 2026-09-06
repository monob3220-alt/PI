import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ex2-calculo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex2-calculo.html',
  styleUrl: './ex2-calculo.scss'
})
export class Ex2Calculo {
  produto = 'Teclado';
  preco = 150;
  quantidade = 3;
}