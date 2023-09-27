import { Component } from '@angular/core';

@Component({
  selector: 'app-temperatura',
  templateUrl: './temperatura.component.html',
  styleUrls: ['./temperatura.component.css']
})
export class TemperaturaComponent {
  num = '';
  resultado = 0;
  operacion: string | null = null; // Establece la operación inicial en null

  calcular() {
    if (this.operacion === null) {
      // Realiza algún manejo de error o muestra un mensaje al usuario
      // porque no se ha seleccionado una operación.
      return;
    }

    switch (this.operacion) {
      case 'cen':
        this.resultado = (parseFloat(this.num) - 32) * 5/9;
        break;
      case 'faren':
        this.resultado = (parseFloat(this.num) * 9/5) + 32;
        break;
      default:
        this.resultado = 0;
        break;
    }
  }
}
