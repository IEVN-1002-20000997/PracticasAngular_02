import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { MultModule } from './mult/mult/mult.module';
import { AppComponent } from './app.component';
import { TemperaturaComponent } from './formularios/temperatura/temperatura.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MultComponent } from './formularios/mult/mult.component';

@NgModule({
  declarations: [
    AppComponent,
    TemperaturaComponent,
    MultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserModule, 
    MultModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
