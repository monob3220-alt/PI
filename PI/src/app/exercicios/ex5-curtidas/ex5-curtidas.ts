import { Component } from '@angular/core';

@Component({
  selector: 'app-ex5-curtidas',
  templateUrl: './ex5-curtidas.html',
  styleUrl: './ex5-curtidas.scss'
})
export class Ex5Curtidas {
  curtidas = 0;

  curtir() {
    this.curtidas++;
  }
}