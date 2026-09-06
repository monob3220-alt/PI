import { Component } from '@angular/core';

@Component({
  selector: 'app-ex3-imagem',
  templateUrl: './ex3-imagem.html',
  styleUrl: './ex3-imagem.scss'
})
export class Ex3Imagem {
  imagemProduto = 'https://picsum.photos/200';
  descricaoImagem = 'Imagem ilustrativa do produto';
}