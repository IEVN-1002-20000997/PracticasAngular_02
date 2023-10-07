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

@NgModule({
  declarations: [
    AppComponent,
    TemperaturaComponent,
    MultComponent,
    CinepolisComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule, 
    MultModule,
    BrowserAnimationsModule,
    CineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
