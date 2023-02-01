import {Component, OnInit} from '@angular/core';
import {PersonajesService} from "../../services/personajes.service";
import {Personaje} from "../../models/personaje.model";
import {PersonajeAgregar} from "../../interfaces/personaje-agregar.interface";

@Component({
  selector: 'app-personajes-registrados',
  templateUrl: './personajes-registrados.component.html'
})
export class PersonajesRegistradosComponent implements OnInit {
  public totalPersonajesAgregados: number = 0;
  public personajesAgregados: PersonajeAgregar[] = [];
  public personajeTemporal: PersonajeAgregar[] = [];
  public cargando: boolean = true;

  constructor(private personajeServices: PersonajesService) {
  }

  ngOnInit(): void {
    this.cargarPersonajesDelUSuario();
  }


  cargarPersonajesDelUSuario() {
    this.cargando = true;
    this.personajeServices.personajesDelUsuario().subscribe((resp: any) => {
      this.cargando = false;
      this.personajesAgregados = resp.personajes,
        this.totalPersonajesAgregados = this.personajesAgregados.length;


    });
  }

  buscar(termino: string) {
    this.cargando = true;
    if (termino.length === 0) {
      //basicamente retorna un arreglo vasio
      this.personajesAgregados = this.personajeTemporal;
      this.cargarPersonajesDelUSuario();
      return;
    }
    this.personajeServices.buscarPersonajeDelUsuario(termino).subscribe((resp: any) => {
        this.personajesAgregados = resp.personajes;
        this.totalPersonajesAgregados = this.personajesAgregados.length;
        this.cargando = false;
      }
    )
  }
}
