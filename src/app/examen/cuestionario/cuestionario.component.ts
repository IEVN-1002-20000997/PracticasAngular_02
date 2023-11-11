import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-cuestionario',
  templateUrl: './cuestionario.component.html',
  styleUrls: ['./cuestionario.component.css']
})
export class CuestionarioComponent {
  opcionSeleccionadaP1: string = ''; 
  opcionSeleccionadaP2: string = ''; 
  opcionSeleccionadaP3: string = ''; 
  opcionSeleccionadaP4: string = ''; 
  opcionSeleccionadaP5: string = ''; 

  respuestasCorrectas: Set<string> = new Set<string>(); 
  respuestasCorrectasTotal: number = 0;  // Nueva variable para mantener el total de respuestas correctas

  constructor(private dataService: DataService, private router: Router) {}

  actualizarRespuestaCorrecta(event: any, pregunta: string) {
    // Verificar si event no es indefinido y tiene la propiedad 'value'
    if (event && 'value' in event) {
      if (event.value === 't') {
        this.respuestasCorrectas.add(pregunta);
        this.respuestasCorrectasTotal++;
      } else {
        this.respuestasCorrectas.delete(pregunta);
        this.respuestasCorrectasTotal--;
      }
    }
  }

  getRespuestasCorrectasArray(): string[] {
    return Array.from(this.respuestasCorrectas);
  }
  

  onTerminar() {
    if (!this.opcionSeleccionadaP1) {
      alert('Por favor, responde la pregunta 1 antes de continuar.');
      return;  
    }
    if (!this.opcionSeleccionadaP2) {
      alert('Por favor, responde la pregunta 2 antes de continuar.');
      return;  
    }
    if (!this.opcionSeleccionadaP3) {
      alert('Por favor, responde la pregunta 3 antes de continuar.');
      return;  
    }
    if (!this.opcionSeleccionadaP4) {
      alert('Por favor, responde la pregunta 4 antes de continuar.');
      return;  
    }
    if (!this.opcionSeleccionadaP5) {
      alert('Por favor, responde la pregunta 5 antes de continuar.');
      return;  
    }
    // Obtener la calificación
    const calificacion = this.calcularCalificacionTotal();

    // Actualizar el servicio con la calificación
    this.dataService.setCalificacion(calificacion);

    // Navegar a la ruta /Resultados
    this.router.navigate(['/Resultados']);
  }

  // Método para calcular la calificación total
  calcularCalificacionTotal(): number {
    // Puedes regresar el total de respuestas correctas
    return this.respuestasCorrectasTotal;
  }

}
