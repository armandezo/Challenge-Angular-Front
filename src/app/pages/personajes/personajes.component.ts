import {Component, OnInit} from '@angular/core';
import {PersonajesService} from "../../services/personajes.service";
import {Personaje} from "../../models/personaje.model";


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})
export class PersonajesComponent implements OnInit {
  public totalPersonajes: number = 0;
  public personajes: Personaje[] = [];
  public personajeTemporal: Personaje[] = [];
  public cargando: boolean = true;
  public personajesRegistrados: Array<string> = [];


  constructor(public personajeService: PersonajesService) {
  }


  ngOnInit(): void {
    this.cargarPersonajesRegistrados();
    this.cargarPersonajes();
  }

  cargarPersonajes() {
    this.cargando = true;
    this.personajeService.cargarPersonajesAPI().subscribe(
      personajes => {
        this.personajes = personajes;
        this.totalPersonajes = personajes.length;
        this.cargando = false;
      }
    );
  }

  cargarPersonajesRegistrados(){
    this.personajeService.personajesDelUsuario().subscribe((resp: any) => {
      for (const personaje of resp.personajes) {
        this.personajesRegistrados.push(personaje.nombre);
      }
    });
  }

  // para obultar el agregar personaje +
  estaRegistrado(nombrePersonaje: string): boolean{
    return this.personajesRegistrados.includes(nombrePersonaje)
  }

  buscar(termino: string) {
    this.cargando = true;
    if (termino.length === 0) {
      this.personajes = this.personajeTemporal;
      this.cargarPersonajes();
      return;
    }
    this.personajeService.buscarPersonajeGlobal(termino).subscribe(personajes => {
        this.personajes = personajes;
        this.cargando = false;
      }
    )
  }


}
