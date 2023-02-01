export class Personaje{
  constructor(
    public nombre: string,
    public especie?: string,
    public genero?: string,
    public estado?: string,
    public img?: string,
    public _id?: string
  ) {}
}
