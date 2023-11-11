import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  alumno!: FormGroup;

  constructor(private router: Router, private dataService: DataService) {}  

  ngOnInit(): void {
    this.alumno = new FormGroup({
      nombre: new FormControl(''),
      apaterno: new FormControl(''),
      amaterno: new FormControl(''),
      dia: new FormControl('', [Validators.required, Validators.min(1), Validators.max(31)]),
      mes: new FormControl('', [Validators.required, Validators.min(1), Validators.max(12)]),
      año: new FormControl('', [Validators.required, Validators.pattern(/^[0-9]+$/)]),
      sexo: new FormControl('')
    });
  }

  onSexoChange(event: any) {
    this.alumno.controls['sexo'].setValue(event.target.value);
  }

  onSubmit() {
    console.log(this.alumno.controls['nombre'].value);
    console.log(this.alumno.controls['apaterno'].value);
    console.log(this.alumno.controls['amaterno'].value);
    console.log(this.alumno.controls['dia'].value);
    console.log(this.alumno.controls['mes'].value);
    console.log(this.alumno.controls['año'].value);
    console.log(this.alumno.controls['sexo'].value);
  }

  onLimpiar() {
    // Reiniciar el formulario sin recargar la página
    window.location.reload();
  }

  onSiguienteClick() {
    // Validar que el campo 'nombre' esté completo
    if (this.alumno.controls['nombre'].value.trim() === '') {
      alert('Por favor, completa el campo "Nombre" antes de continuar.');
      return;
    }
    // Validar que el campo 'apaterno' esté completo
    if (this.alumno.controls['apaterno'].value.trim() === '') {
      alert('Por favor, completa el campo "Apaterno" antes de continuar.');
      return;
    }
    // Validar que el campo 'amaterno' esté completo
    if (this.alumno.controls['amaterno'].value.trim() === '') {
      alert('Por favor, completa el campo "Amaterno" antes de continuar.');
      return;
    }
    // Verificar la condición para el campo 'mes'
    const mesValue = this.alumno.controls['mes'].value;
    if (mesValue >= 13) {
      alert('Por favor, ingresa un número de mes entre 1 y 12.');
      return;  // Evitar la navegación si la condición no se cumple
    }
    // Verificar la condición para el campo 'dia'
    const diaValue = this.alumno.controls['dia'].value;
    if (diaValue >= 32) {
      alert('Por favor, ingresa un número de día entre 1 y 31.');
      return;  // Evitar la navegación si la condición no se cumple
    }
    // Validar que el campo 'año' tenga un número ingresado
    if (!this.alumno.controls['año'].value) {
      alert('Por favor, ingresa un año.');
      return;
    }
    // Validar que el campo 'sexo' esté seleccionado
    if (!this.alumno.controls['sexo'].value) {
      alert('Por favor, selecciona tu sexo antes de continuar.');
      return;
    }
    this.dataService.userData = this.alumno.value;  // Asigna los datos al servicio
    // Navegar a la ruta /Cuestionario
    this.router.navigate(['/Cuestionario']);
  }
}




