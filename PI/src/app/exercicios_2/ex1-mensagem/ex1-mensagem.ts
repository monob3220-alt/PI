import { Component } from '@angular/core';

@Component({
  selector: 'app-ex1-mensagem',
  standalone: false,
  templateUrl: './ex1-mensagem.html',
  styleUrl: './ex1-mensagem.scss',
})
export class Ex1Mensagem {
  mensagemVisivel = false;

  alternarMensagem():void {
    this.mensagemVisivel = !this.mensagemVisivel;
  }
}
