import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MultComponent } from "./formularios/mult/mult.component";
import { TemperaturaComponent } from "./formularios/temperatura/temperatura.component";
import { CinepolisComponent } from "./formularios/cinepolis/cinepolis.component";


const routes: Routes=[
    {path:'', redirectTo: '/home',pathMatch:'full'},
    {path:'home', component: HomeComponent},
    {path:'Mult', component: MultComponent},
    {path:'Temperatura', component: TemperaturaComponent},
    {path:'Cinepolis', component: CinepolisComponent}
]

@NgModule ({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}