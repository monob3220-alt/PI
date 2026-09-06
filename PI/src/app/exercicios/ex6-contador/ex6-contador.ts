import { Component } from '@angular/core';

@Component({
  selector: 'app-ex6-contador',
  templateUrl: './ex6-contador.html',
  styleUrl: './ex6-contador.scss'
})
export class Ex6Contador {
  quantidade = 0;

  
  incrementar() {
    this.quantidade++;
  }

  decrementar() {
    if (this.quantidade > 0) {
      this.quantidade--;
    }
  }
}