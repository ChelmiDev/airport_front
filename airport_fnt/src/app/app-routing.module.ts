import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {InicioComponent} from "./inicio/inicio.component";
import {MainComponent} from "./main/main.component";
import {PilotoComponent} from "./piloto/piloto.component";

const routes: Routes = [
  {path:'inicio',component:InicioComponent},
  {path:'home',component:MainComponent},
  {path:'piloto',component:PilotoComponent},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'/login'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
