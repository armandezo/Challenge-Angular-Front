import {environment} from "../../environments/environment";

const base_url = environment.base_url;

export class Usuario {
  constructor(
    public nombre: string,
    public email: string,
    public nickname: string,
    public password?: string,
    public img?: string,
    public uid?: string
  ) {
  }



}
