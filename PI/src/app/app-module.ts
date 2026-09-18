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
import { Ex1Mensagem } from './exercicios_2/ex1-mensagem/ex1-mensagem';
import { Ex2Usuario } from './exercicios_2/ex2-usuario/ex2-usuario';
import { Ex3Idade } from './exercicios_2/ex3-idade/ex3-idade';
import { Ex4Estoque } from './exercicios_2/ex4-estoque/ex4-estoque';
import { Ex5Nomes } from './exercicios_2/ex5-nomes/ex5-nomes';
import { Ex6ListaVazia } from './exercicios_2/ex6-lista-vazia/ex6-lista-vazia';
import { Ex7Cores } from './exercicios_2/ex7-cores/ex7-cores';
import { Ex8Produtos } from './exercicios_2/ex8-produtos/ex8-produtos';
import { Ex9Classificacao } from './exercicios_2/ex9-classificacao/ex9-classificacao';
import { Ex10Promocao } from './exercicios_2/ex10-promocao/ex10-promocao';
import { Ex11Disponiveis } from './exercicios_2/ex11-disponiveis/ex11-disponiveis';
import { Ex12Cadastro } from './exercicios_2/ex12-cadastro/ex12-cadastro';
import { Ex13Tarefas } from './exercicios_2/ex13-tarefas/ex13-tarefas';
import { Ex14Conversao } from './exercicios_2/ex14-conversao/ex14-conversao';


@NgModule({
  declarations: [
    App,
    Ex1Mensagem,
    Ex2Usuario,
    Ex3Idade,
    Ex4Estoque,
    Ex5Nomes,
    Ex6ListaVazia,
    Ex7Cores,
    Ex8Produtos,
    Ex9Classificacao,
    Ex10Promocao,
    Ex11Disponiveis,
    Ex12Cadastro,
    Ex13Tarefas,
    Ex14Conversao,
    DesafioFinal,
  ],
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
    DesafioFinal,
  ],
  bootstrap: [App],
})
export class AppModule {}
