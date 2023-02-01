import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import {PagesComponent} from "./pages.component";
import {SharedModule} from "../shared/shared.module";
import {RouterOutlet} from "@angular/router";
import {PersonajesComponent} from "./personajes/personajes.component";
import { RegistrarPersonajeComponent } from './registrar-personaje/registrar-personaje.component';

import {ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { PersonajesRegistradosComponent } from './personajes-registrados/personajes-registrados.component';
import { UsuarioComponent } from './mantenimiento/usuario/usuario.component';

@NgModule({
  declarations: [
    PagesComponent,
    PersonajesComponent,
    RegistrarPersonajeComponent,
    PersonajesRegistradosComponent,
    UsuarioComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    RouterOutlet,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    PagesComponent
  ]
})
export class PagesModule { }
