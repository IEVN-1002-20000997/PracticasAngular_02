import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { MultModule } from './mult/mult/mult.module';
import { CineModule } from './cine/cine/cine.module';
import { AppComponent } from './app.component';
import { TemperaturaComponent } from './formularios/temperatura/temperatura.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultComponent } from './formularios/mult/mult.component';
import { CinepolisComponent } from './formularios/cinepolis/cinepolis.component';
import { MenuComponent } from './menu/menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistroComponent } from './examen/registro/registro.component';
import { MaterialModule } from './material/material/material.module';
import { CuestionarioComponent } from './examen/cuestionario/cuestionario.component';
import { ResultadosComponent } from './examen/resultados/resultados.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperaturaComponent,
    MultComponent,
    CinepolisComponent,
    MenuComponent,
    RegistroComponent,
    CuestionarioComponent,
    ResultadosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule, 
    MultModule,
    BrowserAnimationsModule,
    CineModule,
    AppRoutingModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
