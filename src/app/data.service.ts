import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  userData: any;
  setUserData(data: any) {
    this.userData = data;
  }
  respuestasCorrectas: Set<string> = new Set<string>();
  respuestasUsuario: Set<string> = new Set<string>();

  constructor() {
    this.respuestasCorrectas = new Set<string>();
  }

  setRespuestasUsuario(respuestas: Set<string>) {
    this.respuestasUsuario = respuestas;
  }

  getRespuestasUsuario(): Set<string> {
    return this.respuestasUsuario;
  }

  setRespuestasCorrectas(respuestas: Set<string>) {
    this.respuestasCorrectas = respuestas;
  }

  getRespuestasCorrectas(): Set<string> {
    return this.respuestasCorrectas;
  }

  private _calificacion: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  get calificacion$() {
    return this._calificacion.asObservable();
  }

  setCalificacion(calificacion: number) {
    this._calificacion.next(calificacion);
  }
  getCalificacion(): number {
    return this._calificacion.value;
  }
}
