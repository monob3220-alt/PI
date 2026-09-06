import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { Ex1Apresentacao } from './exercicios/ex1-apresentacao/ex1-apresentacao';
import { Ex2Calculo } from './exercicios/ex2-calculo/ex2-calculo';
import { Ex3Imagem } from './exercicios/ex3-imagem/ex3-imagem';
import { Ex4Botao } from './exercicios/ex4-botao/ex4-botao';
import { Ex5Curtidas } from './exercicios/ex5-curtidas/ex5-curtidas';
import { Ex6Contador } from './exercicios/ex6-contador/ex6-contador';
import { Ex7TempoReal } from './exercicios/ex7-tempo-real/ex7-tempo-real';
import { Ex8Cadastro } from './exercicios/ex8-cadastro/ex8-cadastro';
import { Ex9Estoque } from './exercicios/ex9-estoque/ex9-estoque';
import { Ex10Login } from './exercicios/ex10-login/ex10-login';
import { Ex11Carrinho } from './exercicios/ex11-carrinho/ex11-carrinho';
import { DesafioFinal } from './exercicios/desafio-final/desafio-final';

@NgModule({
  declarations: [App],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ex1Apresentacao,
    Ex2Calculo,
    Ex3Imagem,
    Ex4Botao,
    Ex5Curtidas,
    Ex6Contador,
    Ex7TempoReal,
    Ex8Cadastro,
    Ex9Estoque,
    Ex10Login,
    Ex11Carrinho,
    DesafioFinal
  ],
  bootstrap: [App]
})
export class AppModule { }