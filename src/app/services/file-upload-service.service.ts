import {EventEmitter, Injectable} from '@angular/core';
import {environment} from "../../environments/environment";

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class FileUploadServiceService {
  public nuevaImagen: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
// Sube la imagen al backend
  async actualizarFoto(
    archivo: File,
    coleccion: 'usuarios' | 'persoanje',
    id: string) {
    try {
      const url = `${base_url}/uploads/${coleccion}/${id}`

      const formData = new FormData();
      formData.append('imagen', archivo);

      const resp = await fetch(url, {
        method: 'PUT',
        headers: {
          'x-token': localStorage.getItem('token') || ''
        },
        body: formData
      });

      const data = await resp.json();

      if(data.ok){
        return data.modelo.img;
      }else{
        console.log(data.msg)
        return false
      }
      return true;
    } catch (error) {
      console.log(error)
      return false;
    }
  }
}
