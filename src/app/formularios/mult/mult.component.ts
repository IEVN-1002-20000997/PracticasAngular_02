import { Component } from '@angular/core';

@Component({
  selector: 'app-mult',
  templateUrl: './mult.component.html',
  styleUrls: ['./mult.component.css']
})
export class MultComponent {
  num1: number = 0;
  num2: number = 0;
  resultado: number = 0;
  procesoMultiplicacion: string = '';

  multiplicar() {
    let proceso = '';
    
    for (let i = 0; i < this.num2; i++) {
      proceso += `${this.num1}`;
      if (i < this.num2 - 1) {
        proceso += ' + ';
      }
    }

    this.procesoMultiplicacion = proceso;
    this.resultado = this.num1 * this.num2;
  }
}
