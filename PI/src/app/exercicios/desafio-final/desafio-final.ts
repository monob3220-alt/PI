import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-desafio-final',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './desafio-final.html',
  styleUrl: './desafio-final.scss'
})
export class DesafioFinal {
  nomeAluno = '';
  quantidadeDisciplinas = 1;
  mensagem = '';

  aumentar() { this.quantidadeDisciplinas++; }
  diminuir() { if (this.quantidadeDisciplinas > 1) this.quantidadeDisciplinas--; }

  get nomePreenchido(): boolean {
    return this.nomeAluno.trim() !== '';
  }

  matricular() {
    this.mensagem = `Matrícula realizada para ${this.nomeAluno} em ${this.quantidadeDisciplinas} disciplina(s).`;
  }
}