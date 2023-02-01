import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {catchError, map} from "rxjs/operators";
import {Personaje} from "../models/personaje.model";
import {delay, of} from "rxjs";
import {PersonajeAgregar} from "../interfaces/personaje-agregar.interface";
const url_rick_morty = environment.url_rick_morty;
const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(public http: HttpClient) {
  }
// GETERS
  get token(): string {
    return localStorage.getItem('token') || '';
  }

  get headers(){
    return {headers: {
        'x-token': this.token,
      }}
  }



  //Por default trae 20 personajes, definido por el propio servicio de https://rickandmortyapi.com/
  cargarPersonajesAPI() {
    const url = `${url_rick_morty}/character`;
    return this.http.get(url).pipe(
      map((resp: any) => {
        const personajes = resp.results.map((personaje: any) => {
          const {name: nombre,status: estado, species: especie, gender: genero, image: img } = personaje;
          return new Personaje(nombre, especie, genero, estado,img);
          }
        );
        return personajes;
        }
      )
    )
  }

  buscarPersonajeGlobal(termino: string){
    const url = `${url_rick_morty}/character/?name=${termino}`;
    return this.http.get(url).pipe(
      delay(2500),
      map((resp: any) => {
          const personajes = resp.results.map((personaje: any) => {
              const {name: nombre,status: estado, species: especie, gender: genero, image: img } = personaje;
              return new Personaje(nombre, especie, genero, estado,img);
            }
          );
          return personajes;
        }
      )
      //retornar arreglo vacio si no existe el persnaje a buscar
      , catchError(err => of([]))
    )

  }


  agregarPersonaje(personaje: PersonajeAgregar){
    const url = `${base_url}/personajes`;
    return this.http.post<{ok: boolean, personaje: Personaje} >(url, personaje, this.headers);
  }

  personajesDelUsuario(){
    const url = `${base_url}/personajes`;
    return this.http.get(url, this.headers);
  }

  buscarPersonajeDelUsuario(termino: string){
    const url = `${base_url}/personajes/buscar/${termino}`;
    return this.http.get(url, this.headers);
  }



}
