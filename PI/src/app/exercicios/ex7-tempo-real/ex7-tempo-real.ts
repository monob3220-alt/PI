import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ex7-tempo-real',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ex7-tempo-real.html',
  styleUrl: './ex7-tempo-real.scss'
})
export class Ex7TempoReal {
  nome = '';
}