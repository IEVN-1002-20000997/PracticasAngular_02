import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre: string = '';
  compradores: number = 0;
  boletosPorComprador: number = 0; 
  resultado: number = 0.00;
  mostrarTotal: boolean = false;
  opcionSeleccionada: string = 'no'; 
  excedeLimite: boolean = false;

  procesar() {
    // Check if compradores or boletosPorComprador are negative
    if (this.compradores < 0 || this.boletosPorComprador < 0) {
      alert("No se pueden ingresar números negativos en Compradores o Boletos.");
      return;
    }
  
    // Check if the user entered a name
    if (!this.nombre) {
      alert("Por favor, ingresa el nombre antes de procesar.");
      return;
    }
  
    const precioPorBoleto = 12;
    let precioBase = this.boletosPorComprador * precioPorBoleto;
  
    let descuentoAdicional = 0;
    if (this.opcionSeleccionada === 'si') {
      descuentoAdicional = precioBase * 0.1;
    }
  
    precioBase -= descuentoAdicional;
  
    let descuento = 0;
  
    if (this.boletosPorComprador > 5) {
      descuento = precioBase * 0.15;
    } else if (this.boletosPorComprador >= 3 && this.boletosPorComprador <= 5) {
      descuento = precioBase * 0.1;
    }
  
    const limitePorCompradores = this.compradores * 7;
  
    if (this.boletosPorComprador > limitePorCompradores) {
      alert(`No puedes comprar más de ${limitePorCompradores} boletos con ${this.compradores} comprador(es).`);
      this.excedeLimite = true;
      return;
    } else {
      this.excedeLimite = false;
    }
  
    const total = precioBase - descuento;
  
    this.resultado = Number(total.toFixed(2));
    this.mostrarTotal = true;
  }
  
  
  salir() {
    
  }
}


