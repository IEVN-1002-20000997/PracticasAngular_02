import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MultComponent } from "./formularios/mult/mult.component";
import { TemperaturaComponent } from "./formularios/temperatura/temperatura.component";
import { CinepolisComponent } from "./formularios/cinepolis/cinepolis.component";
import { RegistroComponent } from "./examen/registro/registro.component";
import { CuestionarioComponent } from "./examen/cuestionario/cuestionario.component";
import { ResultadosComponent } from "./examen/resultados/resultados.component";


const routes: Routes=[
    {path:'', redirectTo: '/home',pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'Mult', component: MultComponent},
    {path:'Temperatura', component: TemperaturaComponent},
    {path:'Cinepolis', component: CinepolisComponent},
    {path:'Registro', component: RegistroComponent },
    {path:'Cuestionario', component: CuestionarioComponent },
    {path:'Resultados', component: ResultadosComponent }
]

@NgModule ({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}