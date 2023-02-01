import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PersonajesComponent} from "./personajes/personajes.component";
import {AuthGuard} from "../guards/auth.guard";
import {RegistrarPersonajeComponent} from "./registrar-personaje/registrar-personaje.component";
import {PersonajesRegistradosComponent} from "./personajes-registrados/personajes-registrados.component";
import {UsuarioComponent} from "./mantenimiento/usuario/usuario.component";

const routes: Routes = [
  {
    path: 'personajes',
    canActivate: [ AuthGuard ],
    canLoad:[AuthGuard],
    component: PersonajesComponent
  },
  {
    path: '',
    redirectTo: '/personajes',
    pathMatch: 'full' },

  {
    path: 'registrar-personaje/:nombre/:img',
    canActivate: [ AuthGuard ],
    canLoad:[AuthGuard],
    component: RegistrarPersonajeComponent
  },

  {
    path: 'personajes-registrados',
    canActivate: [ AuthGuard ],
    canLoad:[AuthGuard],
    component: PersonajesRegistradosComponent
  },
  {
    path: 'usuario-setings',
    canActivate: [ AuthGuard ],
    canLoad:[AuthGuard],
    component: UsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
